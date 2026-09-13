import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PulseNetworkCanvasProps {
  className?: string;
  theme?: 'dark' | 'light';
}

interface PulseData {
  mesh: THREE.Mesh;
  from: number;
  to: number;
  progress: number;
  speed: number;
  alive: boolean;
}

export const PulseNetworkCanvas: React.FC<PulseNetworkCanvasProps> = ({
  className = '',
  theme = 'dark',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const networkGroupRef = useRef<THREE.Group | null>(null);
  const animFrameId = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);

  const isLight = theme === 'light';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Colors
    const fogColor = isLight ? 0xffffff : 0x050505;
    const fogDensity = isLight ? 0.008 : 0.015;
    const nodeColor = isLight ? 0xb8941f : 0xc5a059;
    const pulseColor = isLight ? 0xc5a059 : 0xd4af37;
    const lineColor = isLight ? 0xb8941f : 0xc5a059;
    const lineOpacity = isLight ? 0.15 : 0.22;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(fogColor, fogDensity);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 60);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Network Group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);
    networkGroupRef.current = networkGroup;

    const particleCount = 28;
    const nodesGroup = new THREE.Group();
    const connectionsGroup = new THREE.Group();
    networkGroup.add(nodesGroup);
    networkGroup.add(connectionsGroup);

    const nodeMat = new THREE.MeshBasicMaterial({
      color: nodeColor,
      transparent: true,
      opacity: 0.85,
    });

    const pulseMat = new THREE.MeshBasicMaterial({
      color: pulseColor,
      transparent: true,
      opacity: 0.9,
    });

    const lineMat = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: lineOpacity,
    });

    const sphereGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const scales = [0.6, 0.8, 1.0, 1.25];
    const nodePositions: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      const mesh = new THREE.Mesh(sphereGeo, nodeMat);
      const scale = scales[Math.floor(Math.random() * scales.length)];
      mesh.scale.setScalar(scale);

      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 55,
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 40
      );
      pos.normalize().multiplyScalar(Math.abs((Math.random() - 0.5) * 45));

      mesh.position.copy(pos);
      nodePositions.push(pos.clone());
      nodesGroup.add(mesh);
    }

    // Connections update function
    const updateConnections = () => {
      // Clear old connections
      while (connectionsGroup.children.length > 0) {
        const child = connectionsGroup.children[0] as THREE.Line;
        if (child.geometry) child.geometry.dispose();
        connectionsGroup.remove(child);
      }

      for (let i = 0; i < particleCount - 1; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = nodesGroup.children[i].position;
          const p2 = nodesGroup.children[j].position;
          if (p1.distanceTo(p2) < 22) {
            const geom = new THREE.BufferGeometry().setFromPoints([p1.clone(), p2.clone()]);
            const line = new THREE.Line(geom, lineMat);
            connectionsGroup.add(line);
          }
        }
      }
    };

    updateConnections();

    // Pulses state
    const pulses: PulseData[] = [];
    const pulseGeo = new THREE.SphereGeometry(0.35, 12, 12);

    const spawnPulse = () => {
      if (Math.random() > 0.88) {
        const fromIdx = Math.floor(Math.random() * particleCount);
        const neighbors: number[] = [];

        for (let j = 0; j < particleCount; j++) {
          if (j === fromIdx) continue;
          if (nodesGroup.children[fromIdx].position.distanceTo(nodesGroup.children[j].position) < 22) {
            neighbors.push(j);
          }
        }

        if (neighbors.length === 0) return;
        const toIdx = neighbors[Math.floor(Math.random() * neighbors.length)];

        const pMesh = new THREE.Mesh(pulseGeo, pulseMat.clone());
        pMesh.position.copy(nodesGroup.children[fromIdx].position);
        networkGroup.add(pMesh);

        pulses.push({
          mesh: pMesh,
          from: fromIdx,
          to: toIdx,
          progress: 0,
          speed: 0.25 + Math.random() * 0.35,
          alive: true,
        });
      }
    };

    // Center camera lookAt
    const centerPos = new THREE.Vector3();
    for (let i = 0; i < particleCount; i++) {
      centerPos.add(nodesGroup.children[i].position);
    }
    centerPos.divideScalar(particleCount);
    camera.position.set(centerPos.x, centerPos.y, centerPos.z + 55);
    camera.lookAt(centerPos);

    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisibleRef.current) {
        animFrameId.current = requestAnimationFrame(animate);
        return;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Rotate network gently
      networkGroup.rotation.y = time * 0.05;
      networkGroup.rotation.x = Math.sin(time * 0.03) * 0.05;

      // Animate pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += delta * p.speed;

        if (p.progress >= 1) {
          networkGroup.remove(p.mesh);
          p.mesh.geometry.dispose();
          (p.mesh.material as THREE.Material).dispose();
          pulses.splice(i, 1);
          continue;
        }

        const startP = nodesGroup.children[p.from].position;
        const endP = nodesGroup.children[p.to].position;
        const currentP = startP.clone().lerp(endP, p.progress);
        p.mesh.position.copy(currentP);
        p.mesh.scale.setScalar(1 + p.progress * 1.8);
      }

      spawnPulse();

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    // Observer for viewport visibility
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      pulses.forEach((p) => {
        networkGroup.remove(p.mesh);
        p.mesh.geometry.dispose();
        (p.mesh.material as THREE.Material).dispose();
      });

      sphereGeo.dispose();
      pulseGeo.dispose();
      nodeMat.dispose();
      pulseMat.dispose();
      lineMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isLight]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
