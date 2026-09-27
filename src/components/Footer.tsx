import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { PrimaryCategory } from '../types/furniture';

interface FooterProps {
  onSelectCategory: (category: PrimaryCategory) => void;
  onOpenAssetManager: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenAssetManager,
  onOpenInquiry,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080706] text-[#b8b0a1] border-t border-[#1d1b18] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1c1a17]">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl tracking-[0.2em] font-light text-[#f5f2eb] uppercase block">
                ALMEX
              </span>
              <span className="font-sans text-xs tracking-[0.45em] text-[#8e867a] uppercase block mt-0.5">
                FURNITURE
              </span>
            </div>
            <p className="font-serif italic text-sm text-[#9c9486] max-w-sm">
              &ldquo;Where Contemporary Design Meets Refined Spaces&rdquo;
            </p>
            <div className="text-xs text-[#736c61] pt-2 space-y-1">
              <p>Almex by Nitin Furniture</p>
              <p>Kirti Nagar, New Delhi, India</p>
            </div>
          </div>

          {/* Collections Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#c89d5c] block">
              Showroom Collections
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#a8a092]">
              <li>
                <button
                  onClick={() => {
                    scrollToTop();
                    onSelectCategory('office-chairs');
                  }}
                  className="hover:text-white transition-colors"
                >
                  01 · Office Chairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToTop();
                    onSelectCategory('office-desks');
                  }}
                  className="hover:text-white transition-colors"
                >
                  02 · Office Desks
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAssetManager}
                  className="hover:text-[#c89d5c] transition-colors text-[11px] text-[#736c61]"
                >
                  Showroom Curator (Manage Photos)
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Column (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#c89d5c] block">
              Showroom Inquiries
            </span>
            <p className="text-xs text-[#8c8476] leading-relaxed">
              Main Furniture Block, Kirti Nagar, New Delhi 110015
            </p>
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <button
                onClick={onOpenInquiry}
                className="text-left text-[#ded8cb] hover:text-[#c89d5c] transition-colors"
              >
                Inquire or Schedule Private Viewing →
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#23201b] hover:border-[#423d34] text-[#a8a092] hover:text-white transition-colors"
                aria-label="Almex on Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#23201b] hover:border-[#423d34] text-[#a8a092] hover:text-white transition-colors"
                aria-label="Almex on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <button
                onClick={onOpenInquiry}
                className="p-2 border border-[#23201b] hover:border-[#423d34] text-[#a8a092] hover:text-white transition-colors"
                aria-label="Direct Email / Phone"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#696257]">
          <div>
            © {new Date().getFullYear()} ALMEX FURNITURE (Almex by Nitin Furniture). All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 text-[#8c8476] hover:text-white transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
