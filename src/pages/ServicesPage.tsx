import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  TrendingUp,
  Landmark,
  Building,
  Scale,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="theme-transition min-h-screen pt-28 pb-16">
      {/* SERVICES HERO BANNER */}
      <section className="bg-[var(--bg-ink)] border-b border-[var(--separator)] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">Institutional & Private Solutions</span>
            <h1 className="text-display-large text-[var(--text-primary)] max-w-3xl">
              Brokerage & Advisory Services
            </h1>
            <p className="text-body max-w-2xl text-lg mt-4 leading-relaxed">
              Our brokerage services are structured to meet our clients' specific needs. We act as facilitators and market makers in the fixed income and equities markets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1: BROKERAGE SERVICES & TRADING */}
      <section id="brokerage" className="section-padding bg-[var(--bg-void)] border-b border-[var(--separator)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <div className="mb-14">
              <span className="text-nav-meta text-[var(--accent-gold)] mb-2 block">Market Execution</span>
              <h2 className="text-display-large text-[var(--text-primary)]">
                Trading & Market Facilitation
              </h2>
            </div>
          </ScrollReveal>

          {/* Sub-item: Equity Trading */}
          <div id="equity-trading" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-b border-[var(--separator)]">
            <div className="lg:col-span-6">
              <ScrollReveal animation="left">
                <div className="flex items-center gap-3 text-[var(--accent-gold)] mb-3 font-mono-tech text-xs uppercase tracking-wider">
                  <TrendingUp className="w-5 h-5" />
                  <span>SEC Regulated</span>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">
                  Equity Trading
                </h3>
                <p className="text-body text-base mb-6 leading-relaxed">
                  We facilitate the purchase and sale of equities (shares). We also offer customized private placement services for the purchase and sale of shares in privately held companies.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Execution of equity trades for retail and institutional clients',
                    'Private placement of equity shares for unlisted corporate entities',
                    'Portfolio management advisory and valuation reporting',
                    'Direct sponsorship of block transactions for corporate entities',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/about#contact" className="btn-shimmer text-xs py-3 px-7 inline-block">
                  Trade Equities With Us
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal animation="right">
                <div className="border border-[var(--border-subtle)] overflow-hidden shadow-2xl">
                  <img
                    src="/images/service-equity.jpg"
                    alt="Equity Trading Chart Analysis"
                    className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Sub-item: Bond Trading */}
          <div id="bond-trading" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal animation="left">
                <div className="border border-[var(--border-subtle)] overflow-hidden shadow-2xl">
                  <img
                    src="/images/service-bond.jpg"
                    alt="Ghana Fixed Income Market Bonds"
                    className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <ScrollReveal animation="right">
                <div className="flex items-center gap-3 text-[var(--accent-gold)] mb-3 font-mono-tech text-xs uppercase tracking-wider">
                  <Landmark className="w-5 h-5" />
                  <span>GFIM Market Facilitation</span>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">
                  Bond Trading (Ghana Fixed Income Market)
                </h3>
                <p className="text-body text-base mb-6 leading-relaxed">
                  We facilitate the purchase and sale of fixed income securities on the Ghana Fixed Income Market (GFIM) and undertake private placement of debt instruments to help clients raise capital.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Government of Ghana Treasury Notes and Long-Term Sovereign Bonds',
                    'Bank of Ghana Cocoa Bills and Treasury Bills trading',
                    'Corporate Debt Securities and Fixed Deposit placements',
                    'Bespoke Private Debt Placements for corporate liquidity needs',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/about#contact" className="btn-ghost text-xs py-3 px-7 inline-block">
                  Consult Bond Desk
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORPORATE ADVISORY */}
      <section id="corporate-advisory" className="section-padding bg-[var(--bg-ink)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <div className="mb-14">
              <span className="text-nav-meta text-[var(--accent-gold)] mb-2 block">Investment Banking</span>
              <h2 className="text-display-large text-[var(--text-primary)]">
                Strategic Corporate Advisory
              </h2>
              <p className="text-body max-w-2xl mt-3">
                Our advisory team is made up of seasoned professionals with decades of cumulative experience in financial strategy, mergers, and capital growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mergers & Acquisitions */}
            <ScrollReveal animation="pop" delay={100}>
              <div id="ma" className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition flex flex-col justify-between h-full">
                <div>
                  <Building className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                  <h3 className="font-serif-display text-2xl text-[var(--text-primary)] mb-3">
                    Mergers & Acquisitions
                  </h3>
                  <p className="text-body text-sm leading-relaxed mb-6">
                    Strategic advisory on mergers, acquisitions, divestitures, buyouts, and corporate restructurings. We guide clients through complex transactions to maximize shareholder value.
                  </p>
                </div>
                <Link to="/about#contact" className="btn-ghost text-xs py-2.5 px-4 w-full text-center block">
                  M&A Consultation
                </Link>
              </div>
            </ScrollReveal>

            {/* Corporate Valuation */}
            <ScrollReveal animation="pop" delay={200}>
              <div id="valuation" className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition flex flex-col justify-between h-full">
                <div>
                  <Scale className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                  <h3 className="font-serif-display text-2xl text-[var(--text-primary)] mb-3">
                    Corporate Valuation
                  </h3>
                  <p className="text-body text-sm leading-relaxed mb-6">
                    We offer robust business valuation services backed by our deep understanding of industry-specific factors that determine the true intrinsic value of a enterprise.
                  </p>
                </div>
                <Link to="/about#contact" className="btn-ghost text-xs py-2.5 px-4 w-full text-center block">
                  Request Valuation Report
                </Link>
              </div>
            </ScrollReveal>

            {/* Initial Public Offering */}
            <ScrollReveal animation="pop" delay={300}>
              <div id="ipo" className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition flex flex-col justify-between h-full">
                <div>
                  <Award className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                  <h3 className="font-serif-display text-2xl text-[var(--text-primary)] mb-3">
                    Initial Public Offering (IPO)
                  </h3>
                  <p className="text-body text-sm leading-relaxed mb-6">
                    As Lead Advisers and Sponsoring Brokers, we prepare and file the necessary prospectus, manage SEC Ghana regulatory approvals, underwrite offerings, and lead public share placement.
                  </p>
                </div>
                <Link to="/about#contact" className="btn-shimmer text-xs py-2.5 px-4 w-full text-center block">
                  IPO Sponsoring Desk
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
