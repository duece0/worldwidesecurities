import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { Sun, Moon, Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

interface NavigationProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

interface SubMenuItem {
  label: string;
  href: string;
  subChildren?: { label: string; href: string }[];
}

interface NavItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  toggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  const navLinks: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      href: '/about',
      children: [
        { label: 'Who We Are', href: '/about#who-we-are' },
        { label: 'What We Do', href: '/about#what-we-do' },
        { label: 'Our People', href: '/about#our-people' },
        { label: 'Contact Us', href: '/about#contact' },
      ],
    },
    {
      label: 'Our Services',
      href: '/services',
      children: [
        {
          label: 'Brokerage Services',
          href: '/services#brokerage',
          subChildren: [
            { label: 'Equity Trading', href: '/services#equity-trading' },
            { label: 'Bond Trading', href: '/services#bond-trading' },
          ],
        },
        {
          label: 'Corporate Advisory',
          href: '/services#corporate-advisory',
          subChildren: [
            { label: 'Mergers & Acquisitions', href: '/services#ma' },
            { label: 'Corporate Valuation', href: '/services#valuation' },
            { label: 'Initial Public Offering', href: '/services#ipo' },
          ],
        },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 theme-transition ${
        isScrolled
          ? 'py-3 backdrop-blur-md border-b border-[var(--separator)] shadow-2xl'
          : 'py-4 bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <BrandLogo className="h-16 sm:h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className={`text-nav-meta transition-colors duration-300 flex items-center gap-1.5 py-2 ${
                  location.pathname === item.href
                    ? 'text-[var(--accent-gold)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-gold)]'
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-70" />
                )}
              </Link>

              {/* Submenu Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div
                  className="absolute top-full left-0 pt-2 w-64 animate-in fade-in-0 zoom-in-95 duration-150"
                  style={{ zIndex: 100 }}
                >
                  <div
                    className="p-3 rounded-none shadow-2xl border border-[var(--border-subtle)] backdrop-blur-xl theme-transition"
                    style={{ backgroundColor: 'var(--dropdown-bg)' }}
                  >
                    {item.children.map((sub: SubMenuItem) => (
                      <div key={sub.label} className="group/sub mb-1.5 last:mb-0">
                        <Link
                          to={sub.href}
                          className="block px-3 py-2 text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] hover:bg-[var(--card-bg)] transition-colors rounded-none"
                        >
                          {sub.label}
                        </Link>
                        {sub.subChildren && (
                          <div className="pl-6 border-l border-[var(--border-subtle)] ml-3 my-1 space-y-1">
                            {sub.subChildren.map((child: { label: string; href: string }) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block py-1 text-[0.7rem] text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--separator)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300"
            title="Toggle theme mode"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Contact Button linking directly to /about#contact */}
          <Link
            to="/about#contact"
            className="btn-shimmer text-xs py-2.5 px-6 inline-flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Contact Us
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--separator)] text-[var(--text-primary)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 text-[var(--text-primary)] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-full shadow-2xl border-b border-[var(--separator)] animate-in fade-in-0 duration-200 theme-transition"
          style={{ backgroundColor: 'var(--dropdown-bg)', maxHeight: '80vh', overflowY: 'auto' }}
        >
          <div className="p-6 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <div key={item.label} className="border-b border-[var(--separator)] pb-3">
                <Link
                  to={item.href}
                  className="text-nav-meta block text-base py-1 text-[var(--text-primary)] font-medium"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/about#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-shimmer w-full text-center mt-4 py-3 block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
