import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Brokerage Services',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in-0 duration-200">
      <div
        className="relative w-full max-w-lg border border-[var(--border-subtle)] p-8 shadow-2xl theme-transition"
        style={{ backgroundColor: 'var(--bg-ink)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[var(--accent-gold)] animate-bounce" />
            <h3 className="font-serif-display text-2xl text-[var(--text-primary)]">
              Consultation Request Received
            </h3>
            <p className="text-body text-sm max-w-xs text-[var(--text-secondary)]">
              Thank you for reaching out to Worldwide Securities. Our corporate advisory team will contact you shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-nav-meta text-[var(--accent-gold)]">Direct Inquiry</span>
              <h3 className="font-serif-display text-2xl text-[var(--text-primary)] mt-1">
                Consult With Our Advisory Team
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kwame Mensah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-transparent border border-[var(--separator)] text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kwame@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-transparent border border-[var(--separator)] text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+233 24 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-transparent border border-[var(--separator)] text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                  Service Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[var(--bg-ink)] border border-[var(--separator)] text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                >
                  <option value="Brokerage Services">Brokerage & Securities Facilitation</option>
                  <option value="Equity Trading">Equity Trading</option>
                  <option value="Bond Trading">Bond & Fixed Income Trading</option>
                  <option value="Corporate Advisory">Corporate Advisory & Valuation</option>
                  <option value="IPO Services">Initial Public Offering (IPO) Sponsoring</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  placeholder="How can our financial team assist your goals?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-transparent border border-[var(--separator)] text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-shimmer w-full py-3 mt-2">
                <Send className="w-4 h-4" />
                Submit Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
