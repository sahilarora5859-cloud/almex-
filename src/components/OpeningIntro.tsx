import React, { useEffect, useState } from 'react';

interface OpeningIntroProps {
  onComplete: () => void;
  introImageUrl?: string;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete, introImageUrl }) => {
  const [step, setStep] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Stage 1: "ALMEX" appears softly
    const t1 = setTimeout(() => setStep(1), 300);
    // Stage 2: "FURNITURE" appears underneath
    const t2 = setTimeout(() => setStep(2), 900);
    // Stage 3: Thin elegant line expands
    const t3 = setTimeout(() => setStep(3), 1400);
    // Stage 4: Tagline "Where Contemporary Design Meets Refined Spaces"
    const t4 = setTimeout(() => setStep(4), 1800);
    // Stage 5: Initiate graceful transition into hero
    const t5 = setTimeout(() => setIsExiting(true), 3200);
    // Stage 6: Complete transition
    const t6 = setTimeout(() => onComplete(), 3900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => onComplete(), 400);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0c0b0a] cursor-pointer transition-all duration-500 ease-out select-none ${
        isExiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      aria-label="Almex Furniture Introduction"
    >
      {/* Background with subtle warmth & optional user intro image */}
      {introImageUrl ? (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={introImageUrl}
            alt="Almex Showroom Atmosphere"
            className="w-full h-full object-cover opacity-20 filter blur-xs scale-105 transition-transform duration-3000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,11,10,0.7)_60%,rgba(12,11,10,1)_100%)]" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,36,30,0.45)_0%,rgba(12,11,10,1)_85%)]" />
      )}

      {/* Intro Content Container */}
      <div className="relative z-10 max-w-2xl px-6 text-center flex flex-col items-center">
        {/* Brand Name Part 1: ALMEX */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            step >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
          }`}
        >
          <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.25em] text-[#f4efe6] block uppercase">
            ALMEX
          </span>
        </div>

        {/* Brand Name Part 2: FURNITURE */}
        <div
          className={`transition-all duration-700 ease-out transform mt-1 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="font-sans text-xs sm:text-sm font-medium tracking-[0.45em] text-[#a89f91] uppercase">
            FURNITURE
          </span>
        </div>

        {/* Thin elegant line expanding */}
        <div className="w-48 sm:w-64 h-[1px] my-6 relative overflow-hidden flex items-center justify-center">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#c89d5c] to-transparent transition-all duration-1000 ease-out ${
              step >= 3 ? 'w-full opacity-90' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-800 ease-out transform ${
            step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#d4cdbf] font-normal tracking-wide max-w-md mx-auto text-balance">
            &ldquo;Where Contemporary Design Meets Refined Spaces&rdquo;
          </p>
          <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#736c62] mt-3">
            Kirti Nagar · New Delhi
          </p>
        </div>
      </div>

      {/* Skip affordance */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute bottom-8 right-8 text-xs font-sans uppercase tracking-widest text-[#736c62] hover:text-[#d4cdbf] transition-colors py-2 px-3 focus:outline-none"
      >
        Enter Showroom →
      </button>
    </div>
  );
};
