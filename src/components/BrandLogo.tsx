import React from 'react';

interface BrandLogoProps {
  className?: string;
  title?: string;
  variant?: 'full' | 'emblem';
}

const U1 = [
  { cx: 28, cy: 28, rx: 4.2, ry: 10.5, rotate: -42 },
  { cx: 22, cy: 39, rx: 4, ry: 10, rotate: -56 },
  { cx: 19, cy: 51, rx: 3.8, ry: 9.5, rotate: -68 },
  { cx: 20, cy: 63, rx: 3.7, ry: 9.2, rotate: -78 },
  { cx: 25, cy: 75, rx: 3.6, ry: 9, rotate: -100 },
  { cx: 33, cy: 84, rx: 3.5, ry: 8.8, rotate: -122 },
  { cx: 42, cy: 90, rx: 3.4, ry: 8.5, rotate: -140 }
];

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-14 sm:h-16 w-auto",
  title = "Worldwide Securities logo",
  variant = 'full',
}) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Exact Gold Emblem Crest SVG Diagram from Original Target Site */}
      <svg
        viewBox="0 0 120 150"
        className={`${className} shrink-0 text-[var(--accent-gold)] transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md`}
        role="img"
        aria-label={title}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M36 86C20 75 14 54 19 34C21.5 23.5 27 15 35 10" strokeWidth="3.4" />
          <path d="M84 86C100 75 106 54 101 34C98.5 23.5 93 15 85 10" strokeWidth="3.4" />
        </g>
        <g fill="currentColor">
          {U1.map((t) => (
            <ellipse
              key={`left-${t.cy}`}
              cx={t.cx}
              cy={t.cy}
              rx={t.rx}
              ry={t.ry}
              transform={`rotate(${t.rotate} ${t.cx} ${t.cy})`}
            />
          ))}
          {U1.map((t) => {
            const i = 120 - t.cx;
            return (
              <ellipse
                key={`right-${t.cy}`}
                cx={i}
                cy={t.cy}
                rx={t.rx}
                ry={t.ry}
                transform={`rotate(${-t.rotate} ${i} ${t.cy})`}
              />
            );
          })}
        </g>
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="60" cy="48" r="31" strokeWidth="2.8" />
          <path d="M29 48H91" strokeWidth="2.1" />
          <path d="M34 32C47 36 73 36 86 32" strokeWidth="1.9" />
          <path d="M34 64C47 60 73 60 86 64" strokeWidth="1.9" />
          <path d="M60 17V79" strokeWidth="1.9" />
          <path d="M45 20C37 37 37 59 45 76" strokeWidth="1.9" />
          <path d="M75 20C83 37 83 59 75 76" strokeWidth="1.9" />
        </g>
        <path
          d="M61 27C67 29 71 34 72 40C76 42 78 45 76 49C78 54 74 58 74 63C73 70 67 76 61 74C57 68 54 65 55 59C51 58 49 55 51 51C47 48 49 42 54 39C54 34 57 30 61 27Z"
          fill="currentColor"
        />
        <path d="M78 67C81 69 81 73 78 75C76 73 76 69 78 67Z" fill="currentColor" opacity="0.85" />
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 80V121" strokeWidth="4.2" strokeDasharray="2 5" />
          <path d="M60 97V130" strokeWidth="4.2" />
          <path d="M45 124C48 140 58 139 60 129C62 139 72 140 75 124" strokeWidth="5" />
          <path d="M39 123H81" strokeWidth="4.2" />
          <path d="M51 130L42 121" strokeWidth="4.2" />
          <path d="M69 130L78 121" strokeWidth="4.2" />
        </g>
      </svg>

      {/* Underlined Compact Typography matching original & user specification */}
      {variant === 'full' && (
        <div className="flex flex-col border-b border-[var(--accent-gold)] pb-0.5 transition-colors">
          <span className="font-serif-display text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-[0.12em] text-[var(--text-primary)] uppercase whitespace-nowrap group-hover:text-[var(--accent-gold)]">
            WORLDWIDE SECURITIES LIMITED
          </span>
        </div>
      )}
    </div>
  );
};

