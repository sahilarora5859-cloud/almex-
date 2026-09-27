import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

interface ShowroomSectionProps {
  showroomImageUrl: string;
  onOpenInquiry: () => void;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({
  showroomImageUrl,
  onOpenInquiry,
}) => {
  return (
    <section id="showroom-section" className="py-24 sm:py-36 bg-[#0c0b0a] border-t border-[#1d1b18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c89d5c] mb-3">
            <span aria-hidden="true" className="w-6 h-[1px] bg-[#c89d5c]/60" />
            <span>SHOWROOM</span>
            <span aria-hidden="true" className="w-6 h-[1px] bg-[#c89d5c]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-[0.08em] text-[#faf7f2] uppercase">
            VISIT ALMEX
          </h2>
          <p className="mt-4 text-sm sm:text-base font-sans text-[#a39b8c] leading-relaxed">
            Experience our curated collections of ready-made executive desks and ergonomic seating in person at our flagship destination.
          </p>
        </div>

        {/* Showroom Panoramic Showcase */}
        <div className="relative border border-[#27231f] overflow-hidden bg-[#12110f] mb-12">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <img
              src={showroomImageUrl}
              alt="Almex Showroom Kirti Nagar New Delhi"
              className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-1000 ease-out hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-serif italic text-lg sm:text-xl text-[#f2efe9] block">
                  Kirti Nagar, New Delhi
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#b0a89a]">
                  Almex by Nitin Furniture
                </span>
              </div>
              <button
                onClick={onOpenInquiry}
                type="button"
                className="self-start sm:self-auto px-6 py-2.5 bg-[#c89d5c] hover:bg-[#d6ac6e] text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Schedule Private Viewing
              </button>
            </div>
          </div>
        </div>

        {/* Location & Visiting Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#221f1b]">
          {/* Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c89d5c]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location</span>
            </div>
            <p className="text-sm text-[#ded8cb] leading-relaxed">
              Main Furniture Block, Kirti Nagar, New Delhi, Delhi 110015, India
            </p>
            <a
              href="https://maps.google.com/?q=Kirti+Nagar+Furniture+Market+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#a69e90] hover:text-[#c89d5c] transition-colors pt-1"
            >
              <span>View on Google Maps</span>
              <Navigation className="w-3 h-3" />
            </a>
          </div>

          {/* Showroom Hours */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c89d5c]">
              <Clock className="w-3.5 h-3.5" />
              <span>Showroom Hours</span>
            </div>
            <p className="text-sm text-[#ded8cb] leading-relaxed">
              Monday – Sunday: 10:30 AM – 8:30 PM
            </p>
            <p className="text-xs text-[#80776b]">
              Corporate consultations available by advance reservation.
            </p>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c89d5c]">
              <Phone className="w-3.5 h-3.5" />
              <span>Showroom Desk</span>
            </div>
            <p className="text-xs text-[#80776b]">
              Email: info@almexfurniture.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
