import React from 'react';
import { PrimaryCategory } from '../types/furniture';

interface ClosingSectionProps {
  backgroundImageUrl: string;
  onSelectCategory: (category: PrimaryCategory) => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  backgroundImageUrl,
  onSelectCategory,
}) => {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0c0b0a] border-t border-[#1f1d19]">
      {/* Full-width cinematic image with slow zoom & fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImageUrl}
          alt="Almex Contemporary Spaces"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out filter brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/60 to-[#0c0b0a]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 flex flex-col items-center">
        {/* DEFINE YOUR SPACE */}
        <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.45em] text-[#c89d5c] mb-4 block">
          DEFINE YOUR SPACE
        </span>

        {/* ALMEX FURNITURE */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.16em] text-[#faf7f2] uppercase mb-4">
          ALMEX FURNITURE
        </h2>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#ded8cb] font-normal tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
          &ldquo;Where Contemporary Design Meets Refined Spaces&rdquo;
        </p>

        {/* Category Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onSelectCategory('office-chairs');
            }}
            type="button"
            className="px-6 py-3 border border-[#3d3832] bg-[#141311]/90 backdrop-blur-xs text-xs uppercase tracking-[0.2em] text-[#ded9ce] hover:border-[#c89d5c] hover:text-white transition-all"
          >
            Explore Office Chairs →
          </button>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onSelectCategory('office-desks');
            }}
            type="button"
            className="px-6 py-3 border border-[#3d3832] bg-[#141311]/90 backdrop-blur-xs text-xs uppercase tracking-[0.2em] text-[#ded9ce] hover:border-[#c89d5c] hover:text-white transition-all"
          >
            Explore Office Desks →
          </button>
        </div>
      </div>
    </section>
  );
};
