import React, { useState } from 'react';
import { SlidersHorizontal, Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { PrimaryCategory } from '../types/furniture';

interface NavbarProps {
  onSelectCategory: (category: PrimaryCategory) => void;
  onOpenInquiry: () => void;
  onOpenAssetManager: () => void;
  onReplayIntro?: () => void;
  activeView: 'home' | PrimaryCategory;
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectCategory,
  onOpenInquiry,
  onOpenAssetManager,
  activeView,
  onGoHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0c0b0a]/90 backdrop-blur-md border-b border-[#22201d] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={onGoHome}
          type="button"
          className="group flex flex-col items-start text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c89d5c]"
        >
          <span className="font-serif text-2xl tracking-[0.2em] font-light text-[#f5f2eb] uppercase group-hover:text-white transition-colors">
            ALMEX
          </span>
          <span className="font-sans text-[9px] tracking-[0.35em] text-[#8e867a] uppercase -mt-1 group-hover:text-[#c89d5c] transition-colors">
            FURNITURE
          </span>
        </button>

        {/* Zone 2: 4 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-[#a1998c]">
          <button
            onClick={() => onSelectCategory('office-chairs')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeView === 'office-chairs' ? 'text-white' : ''
            }`}
          >
            Office Chairs
            {activeView === 'office-chairs' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c89d5c]" />
            )}
          </button>

          <button
            onClick={() => onSelectCategory('office-desks')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeView === 'office-desks' ? 'text-white' : ''
            }`}
          >
            Office Desks
            {activeView === 'office-desks' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c89d5c]" />
            )}
          </button>

          <a
            href="#showroom-section"
            onClick={(e) => {
              if (activeView !== 'home') {
                e.preventDefault();
                onGoHome();
                setTimeout(() => {
                  document.getElementById('showroom-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="transition-colors hover:text-white py-1"
          >
            Showroom
          </a>

          <a
            href="#about-section"
            onClick={(e) => {
              if (activeView !== 'home') {
                e.preventDefault();
                onGoHome();
                setTimeout(() => {
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="transition-colors hover:text-white py-1"
          >
            About
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Curator / Image Manager Button (allows user to upload their 20-22 photos or change intro) */}
          <button
            onClick={onOpenAssetManager}
            type="button"
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#b5ada0] hover:text-white border border-[#2b2824] hover:border-[#4d4740] bg-[#141311] transition-colors whitespace-nowrap"
            title="Upload and manage your original 20–22 furniture photos and intro image"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#c89d5c]" />
            <span>Showroom Curator</span>
          </button>

          {/* Primary Inquire action */}
          <button
            onClick={onOpenInquiry}
            type="button"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#0c0b0a] bg-[#eae7e1] hover:bg-white hover:text-black transition-colors whitespace-nowrap tracking-wide"
          >
            <Phone className="w-3.5 h-3.5 text-[#0c0b0a]" />
            <span>Showroom Inquiries</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAssetManager}
            type="button"
            className="p-2 text-[#c89d5c] border border-[#2b2824] bg-[#141311]"
            aria-label="Manage images"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-[#eae7e1] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#11100e] border-b border-[#262420] px-6 py-6 space-y-5 animate-fade-in-scale">
          <div className="space-y-4 text-sm font-medium tracking-[0.15em] uppercase text-[#a1998c]">
            <div>
              <button
                onClick={() => {
                  onSelectCategory('office-chairs');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 ${
                  activeView === 'office-chairs' ? 'text-[#c89d5c]' : 'text-white'
                }`}
              >
                01. Office Chairs
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  onSelectCategory('office-desks');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 ${
                  activeView === 'office-desks' ? 'text-[#c89d5c]' : 'text-white'
                }`}
              >
                02. Office Desks
              </button>
            </div>
            <div>
              <a
                href="#showroom-section"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeView !== 'home') onGoHome();
                }}
                className="block py-2 text-white"
              >
                Showroom (Kirti Nagar)
              </a>
            </div>
            <div>
              <a
                href="#about-section"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeView !== 'home') onGoHome();
                }}
                className="block py-2 text-white"
              >
                About Almex
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#262420] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssetManager();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#b5ada0] border border-[#2b2824] bg-[#141311]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#c89d5c]" />
              <span>Showroom Curator (Manage Photos)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-black bg-[#eae7e1]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Showroom Inquiries</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
