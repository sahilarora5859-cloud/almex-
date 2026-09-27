import React, { useRef } from 'react';
import { MapPin, Building2, Upload } from 'lucide-react';
import { compressImage } from '../utils/storageUtils';

interface AboutSectionProps {
  showroomImageUrl: string;
  onUpdateShowroomImage?: (newUrl: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  showroomImageUrl,
  onUpdateShowroomImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateShowroomImage) {
      try {
        const compressed = await compressImage(file);
        if (compressed) onUpdateShowroomImage(compressed);
      } catch {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const result = ev.target?.result as string;
          if (result) onUpdateShowroomImage(result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && onUpdateShowroomImage) {
      try {
        const compressed = await compressImage(file);
        if (compressed) onUpdateShowroomImage(compressed);
      } catch {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const result = ev.target?.result as string;
          if (result) onUpdateShowroomImage(result);
        };
        reader.readAsDataURL(file);
      }
    }
  };
  return (
    <section id="about-section" className="py-24 sm:py-32 bg-[#0c0b0a] border-t border-[#1c1a17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section Tag */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c89d5c]">
              <span>ABOUT ALMEX</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#c89d5c]/60" />
            </div>

            {/* Large Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-[0.06em] text-[#f5f2eb] leading-tight text-balance">
              FURNITURE FOR REFINED SPACES
            </h2>

            {/* Body Prose exactly matching user brief */}
            <div className="space-y-6 text-[#b5ada0] font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                Almex Furniture is a premium furniture house based in Kirti Nagar, New Delhi,
                offering a curated range of contemporary furniture for residential and corporate
                interiors.
              </p>
              <p>
                With a focus on modern design, comfort and refined aesthetics, Almex brings together
                furniture collections suited to sophisticated workspaces and interiors.
              </p>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-6 border-t border-[#22201d] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#8f8678]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c89d5c] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium uppercase tracking-wider text-[#d4cdbf]">
                    Kirti Nagar, New Delhi
                  </span>
                  <span className="text-[13px] text-[#787165]">
                    Almex by Nitin Furniture
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#c89d5c] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium uppercase tracking-wider text-[#d4cdbf]">
                    Ready-Made Collections
                  </span>
                  <span className="text-[13px] text-[#787165]">
                    Corporate & Executive Spaces
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame (5 columns) */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[4/5] overflow-hidden border border-[#2e2a24] bg-[#141311] shadow-2xl group cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              title="Click or drop your exact WhatsApp image here to replace instantly"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <img
                src={showroomImageUrl}
                alt="Almex by Nitin Furniture Showroom Building, Kirti Nagar"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/30 to-transparent pointer-events-none" />
              
              {/* Top badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#c89d5c] bg-[#11100e]/85 backdrop-blur-xs px-2.5 py-1 border border-[#2b2721]">
                  Flagship Destination
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-wider text-[#eae7e1] bg-[#1a1815]/90 hover:bg-[#c89d5c] hover:text-black transition-colors px-2.5 py-1 border border-[#3d3830]"
                >
                  <Upload className="w-3 h-3" />
                  <span>Replace Image</span>
                </button>
              </div>

              {/* Bottom information banner */}
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <p className="font-serif italic text-base text-[#f2efe9] leading-snug">
                  ALMEX by Nitin Furniture
                </p>
                <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#a39b8c] mt-1">
                  2/1, Furniture Block, Industrial Area, Kirti Nagar
                </p>
                <p className="text-[10px] text-[#787165] mt-0.5">
                  New Delhi 110015
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
