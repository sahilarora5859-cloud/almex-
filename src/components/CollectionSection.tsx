import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PrimaryCategory } from '../types/furniture';

interface CollectionSectionProps {
  onSelectCategory: (category: PrimaryCategory) => void;
  chairsCoverUrl: string;
  desksCoverUrl: string;
  chairsCount: number;
  desksCount: number;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  onSelectCategory,
  chairsCoverUrl,
  desksCoverUrl,
  chairsCount,
  desksCount,
}) => {
  return (
    <section id="collection-section" className="py-24 sm:py-36 bg-[#0e0d0b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#22201d]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c89d5c] mb-3">
              <span>ALMEX SELECTION</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#c89d5c]/60" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-[0.08em] text-[#f5f2eb] uppercase">
              OUR COLLECTION
            </h2>
          </div>
          <p className="text-sm font-sans text-[#968e80] max-w-sm mt-4 md:mt-0 leading-relaxed">
            Curated ready-made furniture dedicated to refined modern workspaces and corporate environments.
          </p>
        </div>

        {/* Large Editorial Panels (ONLY 01 Office Chairs and 02 Office Desks) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* 01 — OFFICE CHAIRS PANEL */}
          <div
            onClick={() => onSelectCategory('office-chairs')}
            className="group relative cursor-pointer overflow-hidden border border-[#272420] bg-[#141311] transition-all duration-700 hover:border-[#524b42]"
          >
            {/* Image Container with subtle slow zoom */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#100f0d]">
              <img
                src={chairsCoverUrl}
                alt="Almex Office Chairs Collection"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            </div>

            {/* Editorial Panel Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#12110e]">
              <div>
                <div className="flex items-center justify-between text-xs font-medium tracking-[0.25em] text-[#c89d5c] uppercase mb-3">
                  <span>01</span>
                  <span>{chairsCount} Curated Models</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#f7f4ed] font-light tracking-[0.06em] uppercase group-hover:text-white transition-colors">
                  OFFICE CHAIRS
                </h3>
                <p className="mt-3 text-sm text-[#9e9688] leading-relaxed max-w-md">
                  Ergonomic executive armchairs, high-back leather silhouettes, and active mesh task chairs for commanding work spaces.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#23211d] flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#d4cdbf] group-hover:text-[#c89d5c] transition-colors">
                <span>Explore the collection</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* 02 — OFFICE DESKS PANEL */}
          <div
            onClick={() => onSelectCategory('office-desks')}
            className="group relative cursor-pointer overflow-hidden border border-[#272420] bg-[#141311] transition-all duration-700 hover:border-[#524b42]"
          >
            {/* Image Container with subtle slow zoom */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#100f0d]">
              <img
                src={desksCoverUrl}
                alt="Almex Office Desks Collection"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            </div>

            {/* Editorial Panel Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#12110e]">
              <div>
                <div className="flex items-center justify-between text-xs font-medium tracking-[0.25em] text-[#c89d5c] uppercase mb-3">
                  <span>02</span>
                  <span>{desksCount} Curated Models</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#f7f4ed] font-light tracking-[0.06em] uppercase group-hover:text-white transition-colors">
                  OFFICE DESKS
                </h3>
                <p className="mt-3 text-sm text-[#9e9688] leading-relaxed max-w-md">
                  Presidential executive workstations, linear minimalist desks, and architectural studio tables for modern interiors.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#23211d] flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#d4cdbf] group-hover:text-[#c89d5c] transition-colors">
                <span>Explore the collection</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
