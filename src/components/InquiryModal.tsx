import React, { useState } from 'react';
import { X, Send, MessageSquare, Phone, MapPin, CheckCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<'Office Chairs' | 'Office Desks' | 'Both' | 'General'>('Office Chairs');
  const [message, setMessage] = useState(
    initialProduct ? `Inquiring about ${initialProduct}` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Almex Furniture (Kirti Nagar),\n\nName: ${name || 'Prospective Client'}\nPhone: ${phone || 'Not provided'}\nCategory: ${category}\nDetails: ${message || 'Interested in viewing your showroom collection.'}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070605]/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-fade-in-scale"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#141311] border border-[#2d2a25] shadow-2xl p-6 sm:p-8 text-[#eae7e1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-[#8a8274] hover:text-white p-2"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#c89d5c] block mb-1">
            ALMEX SHOWROOM CONCIERGE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f7f5ef]">
            Showroom Inquiry
          </h3>
          <p className="text-xs text-[#968e81] mt-1">
            Kirti Nagar Flagship · Contemporary Corporate & Residential Collections
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-[#c89d5c] mx-auto" />
            <h4 className="font-serif text-2xl text-[#faf7f2]">Inquiry Dispatched</h4>
            <p className="text-xs text-[#a69e90] max-w-sm mx-auto leading-relaxed">
              Our showroom consultants in Kirti Nagar will connect with you promptly with high-resolution catalogues and specifications.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              type="button"
              className="mt-4 px-6 py-2.5 bg-[#c89d5c] text-black text-xs uppercase tracking-widest font-medium"
            >
              Return to Showroom
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Vikram Malhotra"
                className="w-full bg-[#1b1916] border border-[#2c2924] px-3.5 py-2.5 text-sm text-[#eae7e1] placeholder-[#5c564d] focus:border-[#c89d5c] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98..."
                  className="w-full bg-[#1b1916] border border-[#2c2924] px-3.5 py-2.5 text-sm text-[#eae7e1] placeholder-[#5c564d] focus:border-[#c89d5c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                  Collection Interest
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-[#1b1916] border border-[#2c2924] px-3.5 py-2.5 text-sm text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                >
                  <option value="Office Chairs">Office Chairs (Section 01)</option>
                  <option value="Office Desks">Office Desks (Section 02)</option>
                  <option value="Both">Both Categories</option>
                  <option value="General">General Showroom Visit</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                Specific Models or Space Requirements
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Specify executive suite requirements, chair counts, or specific dimensions..."
                className="w-full bg-[#1b1916] border border-[#2c2924] px-3.5 py-2.5 text-sm text-[#eae7e1] placeholder-[#5c564d] focus:border-[#c89d5c] focus:outline-none"
              />
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 py-3 px-4 bg-[#25D366]/90 hover:bg-[#25D366] text-black font-medium text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp</span>
              </button>

              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-[#c89d5c] hover:bg-[#d6ac6e] text-black font-medium text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Request</span>
              </button>
            </div>

            <div className="pt-3 text-[11px] text-[#696357] text-center flex items-center justify-center gap-2">
              <MapPin className="w-3 h-3 text-[#c89d5c]" />
              <span>Almex Furniture · Kirti Nagar, New Delhi 110015</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
