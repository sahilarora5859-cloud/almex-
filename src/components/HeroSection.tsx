import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PrimaryCategory } from '../types/furniture';

interface HeroSectionProps {
  heroImageUrl: string;
  onExploreClick: () => void;
  onSelectCategory: (category: PrimaryCategory) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImageUrl,
  onExploreClick,
  onSelectCategory,
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0b0a]">
      {/* Background Image with Slow Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImageUrl}
          alt="Almex Contemporary Executive Interior"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark architectural scrims for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/65 to-[#0c0b0a]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(12,11,10,0.85)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-12 pb-20">
        {/* Location & Brand Kicker (Quiet unboxed text) */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#c89d5c] mb-6">
          <span>Kirti Nagar</span>
          <span aria-hidden="true" className="text-[#595246]">·</span>
          <span>New Delhi</span>
        </div>

        {/* Main Brand Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.18em] text-[#faf7f2] uppercase mb-4 text-balance">
          ALMEX
        </h1>
        <span className="font-sans text-sm sm:text-base md:text-lg font-medium tracking-[0.55em] text-[#b8b0a1] uppercase mb-8 block -mt-2">
          FURNITURE
        </span>

        {/* Tagline / Subtitle */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#eae5db] font-normal tracking-wide max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
          &ldquo;Furniture Designed for Modern Spaces&rdquo;
        </p>

        {/* Direct Category Shortcuts for instant editorial navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={() => onSelectCategory('office-chairs')}
            type="button"
            className="group px-6 py-3 border border-[#3d3832] bg-[#12110f]/80 backdrop-blur-xs text-xs uppercase tracking-[0.2em] text-[#ded9ce] hover:border-[#c89d5c] hover:text-white transition-all"
          >
            <span>01 · Office Chairs</span>
            <span className="inline-block ml-2 text-[#c89d5c] group-hover:translate-x-0.5 transition-transform">→</span>
          </button>

          <button
            onClick={() => onSelectCategory('office-desks')}
            type="button"
            className="group px-6 py-3 border border-[#3d3832] bg-[#12110f]/80 backdrop-blur-xs text-xs uppercase tracking-[0.2em] text-[#ded9ce] hover:border-[#c89d5c] hover:text-white transition-all"
          >
            <span>02 · Office Desks</span>
            <span className="inline-block ml-2 text-[#c89d5c] group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>

        {/* EXPLORE COLLECTION ↓ */}
        <button
          onClick={onExploreClick}
          type="button"
          className="group flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-[#a69e90] hover:text-white transition-colors focus:outline-none"
        >
          <span>EXPLORE COLLECTION</span>
          <ArrowDown className="w-4 h-4 text-[#c89d5c] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Subtle hairline border */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#2b2723] to-transparent" />
    </section>
  );
};
