import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  MapPin,
  Phone,
  Mail,
  BarChart2,
  FileCheck,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface BoardMember {
  name: string;
  title: string;
}

export const AboutPage: React.FC = () => {
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

  const boardMembers: BoardMember[] = [
    {
      name: 'Mr. Yaw Agyeman-Badu',
      title: 'Board Chairman',
    },
    {
      name: 'Mr. Rexford Adomako-Bonsu',
      title: 'Board Member – Non-Executive Director',
    },
    {
      name: 'Mr. Percy Amoo-Yankey',
      title: 'Board Member – Non-Executive Director',
    },
    {
      name: 'Mr. Isaac Tettey',
      title: 'Board Member – Non-Executive Director',
    },
    {
      name: 'Mr. Okwei Dowuona',
      title: 'Managing Director',
    },
  ];

  return (
    <div className="theme-transition min-h-screen pt-28 pb-16">
      {/* PAGE HERO */}
      <section className="bg-[var(--bg-ink)] border-b border-[var(--separator)] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">Corporate Profile</span>
            <h1 className="text-display-large text-[var(--text-primary)] max-w-3xl">
              About Worldwide Securities
            </h1>
            <p className="text-body max-w-2xl text-lg mt-4">
              Facilitating financial market participation, capital expansion, and advisory excellence in Ghana since 2001.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are" className="section-padding bg-[var(--bg-void)] border-b border-[var(--separator)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Frame */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="left">
                <div className="relative border border-[var(--border-subtle)] shadow-2xl overflow-hidden">
                  <img
                    src="/images/trading-floor.jpg"
                    alt="Trading Floor"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    style={{ aspectRatio: '16/10' }}
                  />
                  <div className="p-6 bg-[var(--bg-ink)] border-t border-[var(--separator)]">
                    <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--accent-gold)] uppercase">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Regulatory Standing</span>
                    </div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] mt-1">
                      Licensed & Regulated by SEC Ghana
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="right">
                <span className="text-nav-meta text-[var(--accent-gold)] mb-2 block">Who We Are</span>
                <h2 className="text-display-large text-[var(--text-primary)] mb-6">
                  Our History & Restructuring
                </h2>

                <p className="text-body mb-6 text-base sm:text-lg leading-relaxed">
                  Worldwide Securities is licensed by the Securities and Exchange Commission, Ghana as a broker-dealer. At Worldwide Securities, we offer bespoke solutions to our clients to enable them meet their securities and business goals.
                </p>

                <p className="text-body mb-6 leading-relaxed">
                  We are one of the pioneering broker-dealers in Ghana, having been in operations since year 2001. Over the years, we have contributed significantly to the development of the capital markets in Ghana. We have listed via Initial Public Offering about five indigenous companies acting as Lead Advisers and Sponsoring Brokers.
                </p>

                <p className="text-body leading-relaxed p-4 border-l-2 border-[var(--accent-gold)] bg-[var(--card-bg)]">
                  In year 2022, we suspended operations to undergo a major restructuring of our business. We resumed operations, rebranded with a strengthened capital structure and digitized trading capabilities to deliver enhanced value to our institutional and retail clients.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="section-padding bg-[var(--bg-ink)] border-b border-[var(--separator)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">Core Expertise</span>
              <h2 className="text-display-large text-[var(--text-primary)]">
                What We Do
              </h2>
              <p className="text-body mt-4">
                Providing holistic financial services ranging from market execution to corporate capital raising.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="pop" delay={100}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition h-full">
                <BarChart2 className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-3">Securities Trading</h3>
                <p className="text-body text-sm leading-relaxed">
                  We facilitate the purchase and sale of bonds, equities, treasury bills, and fixed deposits on behalf of our clients across secondary and primary markets.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="pop" delay={200}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition h-full">
                <Building2 className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-3">Capital Raising</h3>
                <p className="text-body text-sm leading-relaxed">
                  We act as advisors and facilitators for firms looking to raise capital in the debt and equity markets.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="pop" delay={300}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition h-full">
                <FileCheck className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-3">Private Placements</h3>
                <p className="text-body text-sm leading-relaxed">
                  We undertake private placement of securities to help our clients raise capital from accredited private investors to support their business growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR PEOPLE / BOARD & KEY MANAGEMENT */}
      <section id="our-people" className="section-padding bg-[var(--bg-void)] border-b border-[var(--separator)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">Governance & Leadership</span>
              <h2 className="text-display-large text-[var(--text-primary)]">
                Board & Key Management
              </h2>
              <p className="text-body mt-4">
                Guided by distinguished market leaders and seasoned financial executives committed to strict corporate governance.
              </p>
            </div>
          </ScrollReveal>

          {/* Tabular Display of Board & Key Management */}
          <ScrollReveal animation="pop" delay={100}>
            <div className="max-w-4xl mx-auto border border-[var(--border-subtle)] bg-[var(--bg-ink)] shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--separator)] bg-[var(--card-bg)]">
                      <th className="py-4 px-6 font-mono-tech text-xs uppercase tracking-widest text-[var(--accent-gold)]">
                        Name
                      </th>
                      <th className="py-4 px-6 font-mono-tech text-xs uppercase tracking-widest text-[var(--accent-gold)]">
                        Position / Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--separator)]">
                    {boardMembers.map((member, idx) => (
                      <tr key={idx} className="hover:bg-[var(--card-bg)]/60 transition-colors">
                        <td className="py-4 px-6 font-serif-display text-lg text-[var(--text-primary)] font-medium">
                          {member.name}
                        </td>
                        <td className="py-4 px-6 font-mono-tech text-xs text-[var(--accent-gold)] uppercase tracking-wider">
                          {member.title}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-[var(--bg-ink)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal animation="pop">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nav-meta text-[var(--accent-gold)] mb-3 block">Reach Out</span>
              <h2 className="text-display-large text-[var(--text-primary)]">
                Get In Touch
              </h2>
              <p className="text-body mt-4">
                Our office is situated in Accra, Ghana. Reach out to our customer service or corporate advisory desk for inquiries.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Address */}
            <ScrollReveal animation="pop" delay={100}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition h-full flex flex-col justify-between hover:border-[var(--accent-gold)]/50">
                <div>
                  <MapPin className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                  <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-2">Office Address</h3>
                  <p className="text-body text-sm leading-relaxed">
                    No. 8, 2nd Djebobo Street, Redco, Madina, Accra, Ghana
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Telephone Desk */}
            <ScrollReveal animation="pop" delay={200}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition h-full flex flex-col justify-between hover:border-[var(--accent-gold)]/50">
                <div>
                  <Phone className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                  <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-2">Telephone Desk</h3>
                  <p className="text-body text-sm leading-relaxed">
                    +233 302 445 560
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Email Communication */}
            <ScrollReveal animation="pop" delay={300}>
              <div className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-void)] theme-transition h-full flex flex-col justify-between hover:border-[var(--accent-gold)]/50">
                <div>
                  <Mail className="w-10 h-10 text-[var(--accent-gold)] mb-6" />
                  <h3 className="font-serif-display text-xl text-[var(--text-primary)] mb-2">Email Communication</h3>
                  <p className="text-body text-sm leading-relaxed break-all">
                    info@worldwidesecurities-gh.com
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

