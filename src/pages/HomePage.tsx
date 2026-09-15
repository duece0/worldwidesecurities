import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Building2,
  Coins,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { PulseNetworkCanvas } from '../components/PulseNetworkCanvas';

export const HomePage: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  const [activeTab, setActiveTab] = useState<'brokerage' | 'equity' | 'bond' | 'advisory'>('brokerage');

  const servicesData = {
    brokerage: {
      title: 'Brokerage Services',
      subtitle: 'Market Facilitation & Execution',
      description:
        'We act as facilitators and market makers in the fixed income and equities markets. We facilitate the purchase and sale of financial securities for institutional, corporate, and private clients.',
      features: ['Bonds & Fixed Income', 'GSE Equities', 'Treasury Bills', 'Fixed Deposit Placement'],
      image: '/images/trading-floor.jpg',
      href: '/services#brokerage',
    },
    equity: {
      title: 'Equity Trading',
      subtitle: 'Ghana Stock Exchange Member',
      description:
        'We facilitate the purchase and sale of equities on the Ghana Stock Exchange and offer customized private placement services for share capital raising.',
      features: ['GSE Secondary Market Trading', 'Private Placements', 'Portfolio Advisory', 'Block Trade Execution'],
      image: '/images/service-equity.jpg',
      href: '/services#equity-trading',
    },
    bond: {
      title: 'Bond Trading',
      subtitle: 'Fixed Income Market Makers',
      description:
        'We facilitate trading of sovereign and corporate fixed income securities on the Ghana Fixed Income Market (GFIM) and undertake private bond placements.',
      features: ['GFIM Secondary Trading', 'Bank of Ghana Cocoa Bills', 'Government Notes & Bonds', 'Structured Fixed Income'],
      image: '/images/service-bond.jpg',
      href: '/services#bond-trading',
    },
    advisory: {
      title: 'Corporate Advisory',
      subtitle: 'Strategic Investment Banking',
      description:
        'Our seasoned corporate finance team guides firms through mergers, business valuations, restructuring, and listing on the Ghana Stock Exchange via Initial Public Offerings (IPO).',
      features: ['M&A Advisory & Divestitures', 'Independent Corporate Valuation', 'IPO Lead Advisory & Sponsoring', 'Capital Restructuring'],
      image: '/images/office-interior.jpg',
      href: '/services#corporate-advisory',
    },
  };

  return (
    <div className="theme-transition min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* 3D Particle & Energy Pulse Canvas Background (Scoped to Header / Hero ONLY) */}
        <PulseNetworkCanvas theme={theme} className="absolute inset-0 pointer-events-none z-0" />

        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/trading-floor.jpg"
            alt="Worldwide Securities Trading Floor"
            className="w-full h-full object-cover object-center filter grayscale-[35%] opacity-35 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-[var(--bg-void)]/80 to-transparent"></div>
          <div className="absolute inset-0" style={{ background: 'var(--overlay-gradient)' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          <ScrollReveal animation="pop">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] font-mono-tech text-xs tracking-widest uppercase mb-8 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" />
              <span>SEC Ghana Licensed Broker-Dealer</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="pop" delay={100}>
            <h1 className="text-display-massive max-w-5xl overlay-shadow mb-6 text-[var(--text-primary)]">
              Navigating the <span className="text-[var(--accent-gold)] italic font-serif-display">Capital Markets</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="pop" delay={200}>
            <p className="text-body max-w-2xl text-lg sm:text-xl mb-10 text-[var(--text-secondary)] font-light leading-relaxed">
              Facilitating financial growth, securities brokerage, and corporate advisory services across Ghana and international capital markets since 2001.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="pop" delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/about#contact" className="btn-shimmer text-sm py-4 px-9">
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link to="/services" className="btn-ghost text-sm py-4 px-8">
                Explore Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="section-padding border-y border-[var(--separator)] bg-[var(--bg-ink)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Frame */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="left">
                <div className="relative overflow-hidden border border-[var(--border-subtle)] shadow-2xl group">
                  <img
                    src="/images/office-interior.jpg"
                    alt="Worldwide Securities Corporate Interior"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 border border-[var(--accent-gold)]/20 backdrop-blur-md bg-black/40">
                    <p className="font-mono-tech text-xs text-[var(--accent-gold)] uppercase tracking-wider">SEC Regulated Broker-Dealer</p>
                    <p className="text-sm font-semibold text-white mt-1">Established Operations in Ghana Since 2001</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Copy Details */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="right">
                <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">About Worldwide Securities</span>
                <h2 className="text-display-large text-[var(--text-primary)] mb-6">
                  Pioneering Securities Brokerage in Ghana
                </h2>

                <p className="text-body mb-6 text-base sm:text-lg">
                  Worldwide Securities is licensed by the Securities and Exchange Commission, Ghana as a broker-dealer. We are one of the pioneering broker-dealers in Ghana, having been in operations since year 2001.
                </p>

                <p className="text-body mb-8">
                  Over the years, we have contributed significantly to the development of the capital markets in Ghana. We have listed via Initial Public Offering about five indigenous companies on the Ghana Stock Exchange acting as Lead Advisers and Sponsoring Brokers.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-y border-[var(--separator)] mb-8">
                  <div>
                    <h3 className="font-serif-display text-3xl text-[var(--accent-gold)]">25+</h3>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1 font-mono-tech">Years Experience</p>
                  </div>
                  <div>
                    <h3 className="font-serif-display text-3xl text-[var(--accent-gold)]">5+</h3>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1 font-mono-tech">IPO Listings</p>
                  </div>
                  <div>
                    <h3 className="font-serif-display text-3xl text-[var(--accent-gold)]">SEC Ghana</h3>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1 font-mono-tech">Fully Regulated</p>
                  </div>
                </div>

                <Link to="/about" className="btn-ghost">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW TABS */}
      <section className="section-padding bg-[var(--bg-void)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">Bespoke Solutions</span>
                <h2 className="text-display-large text-[var(--text-primary)]">
                  Comprehensive Financial Solutions
                </h2>
              </div>
              <Link to="/services" className="mt-4 md:mt-0 text-sm font-semibold text-[var(--accent-gold)] hover:underline flex items-center gap-1">
                View All Services Details <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Service Selector Tabs */}
          <ScrollReveal animation="pop" delay={100}>
            <div className="flex flex-wrap gap-3 mb-10 border-b border-[var(--separator)] pb-4">
              {(Object.keys(servicesData) as Array<keyof typeof servicesData>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 text-xs font-mono-tech uppercase tracking-wider transition-all border ${
                    activeTab === key
                      ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] font-bold'
                      : 'border-[var(--separator)] text-[var(--text-secondary)] hover:border-[var(--border-subtle)]'
                  }`}
                >
                  {servicesData[key].title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Tab Panel Content */}
          {(() => {
            const service = servicesData[activeTab];
            return (
              <ScrollReveal animation="pop" delay={200}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 border border-[var(--border-subtle)] bg-[var(--bg-ink)] theme-transition">
                  <div className="lg:col-span-6">
                    <span className="text-nav-meta text-[var(--accent-gold)]">{service.subtitle}</span>
                    <h3 className="font-serif-display text-3xl text-[var(--text-primary)] mt-2 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-body text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-sm text-[var(--text-primary)]">
                          <FileCheck2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to={service.href} className="btn-shimmer text-xs py-3 px-7">
                      Service Overview
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="lg:col-span-6 relative overflow-hidden border border-[var(--separator)]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-ink)] via-transparent to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })()}
        </div>
      </section>

      {/* CORE PILLARS GRID */}
      <section className="section-padding bg-[var(--bg-ink)] border-t border-[var(--separator)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">Why Choose Worldwide Securities</span>
              <h2 className="text-display-large text-[var(--text-primary)]">
                Built on Trust & Strategic Integrity
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="pop" delay={100}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] hover:border-[var(--accent-gold)]/50 transition-all group h-full">
                <TrendingUp className="w-10 h-10 text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-3">Securities Trading</h3>
                <p className="text-body text-sm">
                  We facilitate the purchase and sale of bonds, equities, treasury bills, and fixed deposit placements on behalf of institutional and private clients.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="pop" delay={200}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] hover:border-[var(--accent-gold)]/50 transition-all group h-full">
                <Building2 className="w-10 h-10 text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-3">Capital Raising</h3>
                <p className="text-body text-sm">
                  We act as lead advisors and facilitators for corporations looking to raise debt or equity capital on the Ghana Stock Exchange and GFIM.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="pop" delay={300}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] hover:border-[var(--accent-gold)]/50 transition-all group h-full">
                <Coins className="w-10 h-10 text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-3">Private Placements</h3>
                <p className="text-body text-sm">
                  We undertake customized private placement of securities to help our business clients access bespoke capital from accredited investors.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[var(--bg-void)] via-[var(--bg-ink)] to-[var(--bg-void)] border-t border-[var(--separator)]">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal animation="pop">
            <span className="text-nav-meta text-[var(--accent-gold)] mb-4 block">Get Started Today</span>
            <h2 className="text-display-large text-[var(--text-primary)] mb-6">
              Ready to grow your capital or list your enterprise?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-8 text-base">
              Partner with Ghana's trusted broker-dealer and financial advisory experts for your trading and capital market needs.
            </p>

            <Link to="/about#contact" className="btn-shimmer text-sm py-4 px-10 inline-flex items-center gap-2">
              Schedule an Advisory Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
