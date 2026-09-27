import React, { useEffect, useRef } from 'react';
import { X, MapPin, MessageSquare, Phone, Upload, Trash2 } from 'lucide-react';
import { FurnitureItem } from '../types/furniture';
import { compressImage } from '../utils/storageUtils';

interface ProductDetailModalProps {
  item: FurnitureItem | null;
  onClose: () => void;
  onDeleteItem?: (itemId: string) => void;
  onOpenInquiryForProduct?: (productName: string) => void;
  onUpdateItemImage?: (itemId: string, newImageUrl: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onDeleteItem,
  onOpenInquiryForProduct,
  onUpdateItemImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateItemImage && item) {
      try {
        const compressed = await compressImage(file);
        if (compressed) {
          onUpdateItemImage(item.id, compressed);
        }
      } catch {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const result = ev.target?.result as string;
          if (result) onUpdateItemImage(item.id, result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && onUpdateItemImage && item) {
      try {
        const compressed = await compressImage(file);
        if (compressed) {
          onUpdateItemImage(item.id, compressed);
        }
      } catch {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const result = ev.target?.result as string;
          if (result) onUpdateItemImage(item.id, result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const inquiryText = encodeURIComponent(
    `Hello Almex Furniture, I would like to inquire about the ${item.name} (${item.categoryLabel}) at your Kirti Nagar showroom.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080706]/95 backdrop-blur-md p-3 sm:p-6 lg:p-8 overflow-y-auto animate-fade-in-scale select-none"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-[94vh] bg-[#12110f] border border-[#2d2a25] shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 bg-[#171512]/90 text-xs font-sans uppercase tracking-[0.2em] text-[#c4bdae] hover:text-white border border-[#302c26] hover:border-[#575044] transition-all"
          aria-label="Close presentation"
        >
          <span>CLOSE</span>
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Left Side: Original Image Presentation Frame Fixed In Place */}
        <div
          className="lg:w-3/5 bg-[#0a0908] flex items-center justify-center p-4 sm:p-8 lg:p-10 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] lg:max-h-[82vh] overflow-hidden select-none border-b lg:border-b-0 border-[#26231e]"
          style={{
            background: 'radial-gradient(ellipse at center, #161410 0%, #0a0908 70%, #050504 100%)',
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-auto h-auto max-w-full max-h-[62vh] lg:max-h-[70vh] object-contain object-center filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] select-none block mx-auto pointer-events-none cursor-default transition-none"
            style={{
              transform: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              pointerEvents: 'none',
              imageRendering: 'auto',
              maxWidth: '100%',
            }}
            draggable={false}
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />

          {/* Top replace affordance */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-wider text-[#d4cdbf] bg-[#171512]/85 hover:bg-[#c89d5c] hover:text-black transition-colors px-2.5 py-1 border border-[#332f29]"
            >
              <Upload className="w-3 h-3" />
              <span>Replace Photo</span>
            </button>
          </div>

          <div className="absolute bottom-4 left-6 text-[10px] uppercase tracking-[0.25em] text-[#696257] pointer-events-none">
            ALMEX ORIGINAL FURNITURE PHOTOGRAPH · NATURAL ASPECT RATIO
          </div>
        </div>

        {/* Right Side: Editorial Information */}
        <div className="lg:w-2/5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#141311] border-t lg:border-t-0 lg:border-l border-[#26231e] overflow-y-auto">
          <div className="space-y-6">
            {/* Category Indicator */}
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-[#c89d5c]">
              <span>ALMEX SELECTION</span>
              <span aria-hidden="true">·</span>
              <span>{item.categoryLabel}</span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f5ef] font-light leading-snug tracking-wide uppercase">
                {item.name}
              </h2>
              <span className="block text-xs uppercase tracking-[0.25em] text-[#c89d5c] font-medium mt-1.5">
                {item.subtitle || 'High-Back Executive Chair'}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#a8a192] leading-relaxed font-sans">
              {item.shortDescription}
            </p>

            {/* Specifications */}
            <div className="pt-6 border-t border-[#23201b] space-y-4">
              {item.finish && (
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#736c62]">
                    MATERIAL &amp; FINISH
                  </span>
                  <span className="text-sm text-[#ded8cb] mt-0.5 block">
                    {item.finish}
                  </span>
                </div>
              )}

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#736c62]">
                  CATEGORY
                </span>
                <span className="text-sm text-[#ded8cb] mt-0.5 block">
                  {item.categoryLabel}
                </span>
              </div>

              {item.dimensions && (
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#736c62]">
                    Dimensions
                  </span>
                  <span className="text-sm font-mono text-[#ded8cb] mt-0.5 block">
                    {item.dimensions}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs text-[#8c8475] pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#c89d5c] shrink-0" />
                <span>Available for inspection at Kirti Nagar showroom</span>
              </div>
            </div>
          </div>

          {/* Action Area: Showroom Inquiries (NO E-COMMERCE / NO BUY NOW / NO CART) */}
          <div className="mt-8 pt-6 border-t border-[#23201b] space-y-3">
            <a
              href={`https://api.whatsapp.com/send?text=${inquiryText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#c89d5c] hover:bg-[#d6ac6e] text-[#0c0b0a] font-medium text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                if (onOpenInquiryForProduct) onOpenInquiryForProduct(item.name);
              }}
              type="button"
              className="w-full py-3 px-4 border border-[#332f29] hover:border-[#524b41] text-[#ded8cb] hover:text-white font-medium text-xs uppercase tracking-[0.2em] bg-[#171512] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#c89d5c]" />
              <span>Book Showroom Viewing</span>
            </button>

            {onDeleteItem && (
              <button
                onClick={() => {
                  if (item) {
                    onDeleteItem(item.id);
                    onClose();
                  }
                }}
                type="button"
                className="w-full py-2.5 px-4 text-xs tracking-wider text-[#8a8174] hover:text-red-400 transition-colors flex items-center justify-center gap-1.5 pt-2"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove this piece from showcase</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

