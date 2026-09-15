import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const tickerText = "Licensed by SEC Ghana • Since 2001 • ";

  return (
    <footer
      className="relative z-10 theme-transition"
      style={{ backgroundColor: "var(--bg-void)", borderTop: "1px solid var(--separator)" }}
    >
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <BrandLogo className="h-16 w-14 sm:h-20 sm:w-16 flex-shrink-0 text-[var(--accent-gold)]" variant="emblem" />
              <div>
                <h3 className="font-serif-display text-lg sm:text-xl tracking-wider uppercase" style={{ color: "var(--accent-gold)" }}>
                  WORLDWIDE SECURITIES
                </h3>
                <p className="text-[0.65rem] sm:text-xs font-mono-tech tracking-[0.15em] uppercase mt-1" style={{ color: "var(--accent-gold)" }}>
                  NAVIGATING THE CAPITAL MARKETS
                </p>
              </div>
            </div>
            <p className="text-body max-w-md text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Licensed by the Securities and Exchange Commission, Ghana as a broker-dealer and a Licensed Dealing Member (LDM) of the Ghana Stock Exchange since 2001.
            </p>
          </div>

          {/* Right 3 Navigation Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
              {/* COMPANY */}
              <div className="sm:col-span-3">
                <h4 className="text-xs font-mono-tech font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--accent-gold)" }}>
                  COMPANY
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Who We Are", href: "/about#who-we-are" },
                    { label: "Our People", href: "/about#our-people" },
                    { label: "Contact", href: "/about#contact" }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm transition-colors duration-300 hover:text-[var(--accent-gold)]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SERVICES */}
              <div className="sm:col-span-4">
                <h4 className="text-xs font-mono-tech font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--accent-gold)" }}>
                  SERVICES
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Brokerage", href: "/services#brokerage" },
                    { label: "Equity Trading", href: "/services#equity-trading" },
                    { label: "Bond Trading", href: "/services#bond-trading" },
                    { label: "Corporate Advisory", href: "/services#corporate-advisory" },
                    { label: "IPO Services", href: "/services#ipo" }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm transition-colors duration-300 hover:text-[var(--accent-gold)]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div className="sm:col-span-5">
                <h4 className="text-xs font-mono-tech font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--accent-gold)" }}>
                  CONTACT
                </h4>
                <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>
                    <a href="tel:+233302445560" className="hover:text-[var(--accent-gold)] transition-colors whitespace-nowrap">
                      +233 302 445 560
                    </a>
                  </li>
                  <li className="whitespace-nowrap">
                    <a href="mailto:info@worldwidesecurities-gh.com" className="hover:text-[var(--accent-gold)] transition-colors whitespace-nowrap text-xs sm:text-sm">
                      info@worldwidesecurities-gh.com
                    </a>
                  </li>
                  <li className="leading-relaxed">
                    No. 8, 2nd Djebobo Street,<br />
                    Redco, Madina, Accra
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Continuous Ticker Bar */}
      <div className="overflow-hidden border-t border-[var(--separator)] py-3 bg-[var(--bg-ink)]/50">
        <div className="flex whitespace-nowrap" style={{ animation: "tickerScroll 30s linear infinite" }}>
          {Array.from({ length: 12 }).map((_, idx) => (
            <span
              key={idx}
              className="font-mono-tech text-xs tracking-wider uppercase mr-8"
              style={{ color: "var(--text-secondary)", opacity: 0.45 }}
            >
              {tickerText}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center border-t border-[var(--separator)] py-5 px-6">
        <p className="text-xs font-mono-tech tracking-wide" style={{ color: "var(--text-secondary)", opacity: 0.4 }}>
          © {new Date().getFullYear()} Worldwide Securities Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};


