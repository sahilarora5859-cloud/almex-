import React, { useState } from 'react';
import { X, Upload, Trash2, Check, RefreshCw, Image as ImageIcon, Sparkles, Plus, Download, Edit3 } from 'lucide-react';
import { FurnitureItem, PrimaryCategory, ShowroomConfig } from '../types/furniture';
import { INITIAL_FURNITURE_ITEMS, DEFAULT_CONFIG } from '../data/furnitureData';
import { compressImage } from '../utils/storageUtils';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: FurnitureItem[];
  onSaveItems: (items: FurnitureItem[]) => void;
  config: ShowroomConfig;
  onSaveConfig: (config: ShowroomConfig) => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  items,
  onSaveItems,
  config,
  onSaveConfig,
}) => {
  const [activeTab, setActiveTab] = useState<'items' | 'branding'>('items');
  const [categoryFilter, setCategoryFilter] = useState<'all' | PrimaryCategory>('all');
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // New item form state
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<PrimaryCategory>('office-chairs');
  const [newItemDesc, setNewItemDesc] = useState('');
  const [newItemImage, setNewItemImage] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Branding states
  const [introBg, setIntroBg] = useState(config.introBackgroundUrl || '');
  const [heroBg, setHeroBg] = useState(config.heroBackgroundUrl || '');
  const [showroomBg, setShowroomBg] = useState(config.showroomBackgroundUrl || '');
  const [chairsCover, setChairsCover] = useState(config.chairsCoverUrl || '');
  const [desksCover, setDesksCover] = useState(config.desksCoverUrl || '');

  if (!isOpen) return null;

  // Handle uploading multiple original images with compression
  const handleBulkImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(async (file, index) => {
      try {
        const resultUrl = await compressImage(file);
        if (resultUrl) {
          const isDeskFile = file.name.toLowerCase().includes('desk') || file.name.toLowerCase().includes('table');
          const category: PrimaryCategory = isDeskFile ? 'office-desks' : 'office-chairs';
          const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');

          const newItem: FurnitureItem = {
            id: `original-${Date.now()}-${index}`,
            name: cleanName || `Almex Original Model ${items.length + index + 1}`,
            category,
            categoryLabel: category === 'office-chairs' ? 'Office Chair' : 'Office Desk',
            shortDescription: 'Original Almex piece curated for contemporary workspaces.',
            imageUrl: resultUrl,
            layout: 'standard-pair',
          };

          onSaveItems([newItem, ...items]);
        }
      } catch {
        // non-blocking
      }
    });
  };

  // Replace single image for an existing item
  const handleReplaceItemImage = async (itemId: string, file: File) => {
    try {
      const resultUrl = await compressImage(file);
      if (resultUrl) {
        const updated = items.map((it) => (it.id === itemId ? { ...it, imageUrl: resultUrl } : it));
        onSaveItems(updated);
      }
    } catch {
      // non-blocking
    }
  };

  // Toggle category between Office Chairs and Office Desks
  const handleToggleCategory = (itemId: string) => {
    const updated = items.map((it) => {
      if (it.id === itemId) {
        const newCat: PrimaryCategory = it.category === 'office-chairs' ? 'office-desks' : 'office-chairs';
        return {
          ...it,
          category: newCat,
          categoryLabel: newCat === 'office-chairs' ? 'Office Chair' : 'Office Desk',
        };
      }
      return it;
    });
    onSaveItems(updated);
  };

  // Delete item
  const handleDeleteItem = (itemId: string) => {
    const updated = items.filter((it) => it.id !== itemId);
    onSaveItems(updated);
  };

  // Save new individual item
  const handleCreateNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemImage) return;

    const newItem: FurnitureItem = {
      id: `original-${Date.now()}`,
      name: newItemName || `Almex Contemporary Item`,
      category: newItemCategory,
      categoryLabel: newItemCategory === 'office-chairs' ? 'Office Chair' : 'Office Desk',
      shortDescription: newItemDesc || 'Curated contemporary ready-made furniture.',
      imageUrl: newItemImage,
      layout: 'standard-pair',
    };

    onSaveItems([newItem, ...items]);
    setNewItemName('');
    setNewItemDesc('');
    setNewItemImage('');
    setShowAddForm(false);
  };

  // Reset to default 22 items
  const handleResetToDefault = () => {
    if (window.confirm('Reset catalog to the default 22 items and original configuration?')) {
      onSaveItems(INITIAL_FURNITURE_ITEMS);
      onSaveConfig(DEFAULT_CONFIG);
      setIntroBg(DEFAULT_CONFIG.introBackgroundUrl || '');
      setHeroBg(DEFAULT_CONFIG.heroBackgroundUrl || '');
      setShowroomBg(DEFAULT_CONFIG.showroomBackgroundUrl || '');
      setChairsCover(DEFAULT_CONFIG.chairsCoverUrl || '');
      setDesksCover(DEFAULT_CONFIG.desksCoverUrl || '');
    }
  };

  // Save branding config
  const handleSaveBranding = () => {
    const updated: ShowroomConfig = {
      ...config,
      introBackgroundUrl: introBg,
      heroBackgroundUrl: heroBg,
      showroomBackgroundUrl: showroomBg,
      chairsCoverUrl: chairsCover,
      desksCoverUrl: desksCover,
    };
    onSaveConfig(updated);
    alert('Showroom branding images saved successfully!');
  };

  // Filter items
  const filteredItems = items.filter((it) => {
    if (categoryFilter === 'all') return true;
    return it.category === categoryFilter;
  });

  const chairCount = items.filter((it) => it.category === 'office-chairs').length;
  const deskCount = items.filter((it) => it.category === 'office-desks').length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070605]/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-fade-in-scale select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#12110f] border border-[#2b2723] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-[#eae7e1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#22201d] flex items-center justify-between bg-[#151412]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-[#c89d5c]">
              <span>ALMEX CURATOR SUITE</span>
              <span aria-hidden="true">·</span>
              <span>{items.length} Products Active</span>
            </div>
            <h3 className="font-serif text-2xl text-[#f7f5ef] font-light">
              Showroom Asset & Original Image Manager
            </h3>
            <p className="text-xs text-[#8e867a] mt-0.5">
              Upload your 20–22 original product images, assign categories, or update the intro image.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[#8e867a] hover:text-white p-2 border border-[#292622] hover:border-[#47423b]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between px-6 border-b border-[#22201d] bg-[#141311]">
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
            <button
              onClick={() => setActiveTab('items')}
              className={`py-3.5 border-b-2 transition-colors ${
                activeTab === 'items'
                  ? 'border-[#c89d5c] text-white font-medium'
                  : 'border-transparent text-[#8a8274] hover:text-white'
              }`}
            >
              Furniture Catalog ({items.length})
            </button>
            <button
              onClick={() => setActiveTab('branding')}
              className={`py-3.5 border-b-2 transition-colors ${
                activeTab === 'branding'
                  ? 'border-[#c89d5c] text-white font-medium'
                  : 'border-transparent text-[#8a8274] hover:text-white'
              }`}
            >
              Intro & Showroom Atmosphere
            </button>
          </div>

          <button
            onClick={handleResetToDefault}
            type="button"
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#8a8274] hover:text-[#d4cdbf]"
            title="Reset to default items"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'items' ? (
            <>
              {/* Top Action Bar: Upload Original Photos & Filters */}
              <div className="bg-[#171512] border border-[#26231f] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Bulk Uploader for 20-22 Original Photos */}
                <div className="flex flex-wrap items-center gap-3">
                  <label className="cursor-pointer px-4 py-2.5 bg-[#c89d5c] hover:bg-[#d6ac6e] text-black text-xs uppercase tracking-widest font-medium transition-colors flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    <span>Upload 20–22 Original Images</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleBulkImageUpload}
                      className="hidden"
                    />
                  </label>

                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    type="button"
                    className="px-3.5 py-2.5 border border-[#332f29] hover:border-[#4d473e] text-xs uppercase tracking-wider text-[#ded8cb] hover:text-white flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{showAddForm ? 'Cancel Add' : 'Add Item via URL'}</span>
                  </button>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#736c61] uppercase tracking-wider">Filter:</span>
                  <button
                    onClick={() => setCategoryFilter('all')}
                    className={`px-2.5 py-1 text-xs border ${
                      categoryFilter === 'all'
                        ? 'border-[#c89d5c] text-[#c89d5c] bg-[#1d1a16]'
                        : 'border-[#26231f] text-[#8e867a]'
                    }`}
                  >
                    All ({items.length})
                  </button>
                  <button
                    onClick={() => setCategoryFilter('office-chairs')}
                    className={`px-2.5 py-1 text-xs border ${
                      categoryFilter === 'office-chairs'
                        ? 'border-[#c89d5c] text-[#c89d5c] bg-[#1d1a16]'
                        : 'border-[#26231f] text-[#8e867a]'
                    }`}
                  >
                    Chairs ({chairCount})
                  </button>
                  <button
                    onClick={() => setCategoryFilter('office-desks')}
                    className={`px-2.5 py-1 text-xs border ${
                      categoryFilter === 'office-desks'
                        ? 'border-[#c89d5c] text-[#c89d5c] bg-[#1d1a16]'
                        : 'border-[#26231f] text-[#8e867a]'
                    }`}
                  >
                    Desks ({deskCount})
                  </button>
                </div>
              </div>

              {/* Add Single Item Form */}
              {showAddForm && (
                <form
                  onSubmit={handleCreateNewItem}
                  className="bg-[#151310] border border-[#2d2923] p-5 space-y-4 animate-fade-in-scale"
                >
                  <h4 className="font-serif text-lg text-[#faf8f5]">Add New Furniture Piece</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                        Furniture Model Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        placeholder="e.g. Almex Aero Task Chair"
                        className="w-full bg-[#1b1916] border border-[#2b2723] px-3 py-2 text-xs text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                        Category
                      </label>
                      <select
                        value={newItemCategory}
                        onChange={(e) => setNewItemCategory(e.target.value as PrimaryCategory)}
                        className="w-full bg-[#1b1916] border border-[#2b2723] px-3 py-2 text-xs text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                      >
                        <option value="office-chairs">01 · Office Chairs</option>
                        <option value="office-desks">02 · Office Desks</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                        Image URL or Data URI
                      </label>
                      <input
                        type="text"
                        required
                        value={newItemImage}
                        onChange={(e) => setNewItemImage(e.target.value)}
                        placeholder="Paste image link..."
                        className="w-full bg-[#1b1916] border border-[#2b2723] px-3 py-2 text-xs text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8a8274] mb-1">
                      Short Description
                    </label>
                    <input
                      type="text"
                      value={newItemDesc}
                      onChange={(e) => setNewItemDesc(e.target.value)}
                      placeholder="Very brief description (e.g. Designed for modern executive workspaces)..."
                      className="w-full bg-[#1b1916] border border-[#2b2723] px-3 py-2 text-xs text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#c89d5c] text-black text-xs uppercase tracking-widest font-medium"
                  >
                    Save to Catalog
                  </button>
                </form>
              )}

              {/* Items List */}
              <div className="space-y-3">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3.5 bg-[#151412] border border-[#23201c] hover:border-[#38332c] transition-colors"
                  >
                    {/* Left: Thumbnail & Name */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="w-16 h-16 bg-[#0a0908] border border-[#22201d] flex items-center justify-center p-1 shrink-0 overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider font-mono text-[#736c61]">
                            #{index + 1}
                          </span>
                          <span className="text-sm font-serif text-[#faf8f5] truncate max-w-xs sm:max-w-md block">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-xs text-[#8c8476] truncate max-w-xs sm:max-w-md">
                          {item.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Right: Category Toggle & Actions */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-[#23201c] pt-2 sm:pt-0">
                      {/* 1-Click Category Toggle as requested */}
                      <button
                        onClick={() => handleToggleCategory(item.id)}
                        type="button"
                        className="px-3 py-1.5 text-xs uppercase tracking-wider border border-[#332f29] hover:border-[#c89d5c] bg-[#1a1815] text-[#ded8cb] transition-colors flex items-center gap-1.5"
                        title="Click to switch category between Office Chairs and Office Desks"
                      >
                        <span className="text-[#c89d5c]">Cat:</span>
                        <span>{item.category === 'office-chairs' ? 'Chair' : 'Desk'}</span>
                        <span className="text-[10px] text-[#736c61]">(Switch)</span>
                      </button>

                      {/* Replace Image Button */}
                      <label className="cursor-pointer p-2 border border-[#26231f] hover:border-[#423d34] text-[#8e867a] hover:text-white text-xs" title="Replace Image">
                        <Upload className="w-3.5 h-3.5" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleReplaceItemImage(item.id, e.target.files[0]);
                            }
                          }}
                        />
                      </label>

                      {/* Delete */}
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        type="button"
                        className="p-2 border border-[#26231f] hover:border-red-900/50 text-[#8e867a] hover:text-red-400 text-xs transition-colors"
                        title="Delete from showroom"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Branding & Intro Image Setting */
            <div className="space-y-6 max-w-2xl">
              <div className="bg-[#171512] border border-[#27231f] p-4 text-xs text-[#a69e90] space-y-1">
                <p className="font-medium text-[#c89d5c] uppercase tracking-wider">
                  Intro Image & Showroom Atmosphere
                </p>
                <p>
                  The user mentioned: &ldquo;स्टार्टिंग में जो उनका इंट्रो होगा, उसके लिए भी मैं एक इमेज तुम्हें शेयर कर रहा हूं। उस इमेज को भी रखना है।&rdquo;
                </p>
                <p>
                  You can set your shared intro image below. It will be showcased during the cinematic opening animation!
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8e867a] mb-1">
                    Opening Intro Background Image
                  </label>
                  <input
                    type="text"
                    value={introBg}
                    onChange={(e) => setIntroBg(e.target.value)}
                    placeholder="URL or base64 image..."
                    className="w-full bg-[#1b1916] border border-[#2d2924] px-3.5 py-2.5 text-xs text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                  />
                  <label className="inline-block mt-2 cursor-pointer text-xs text-[#c89d5c] hover:underline">
                    Browse image from computer for Intro →
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => setIntroBg(ev.target?.result as string);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8e867a] mb-1">
                    Hero Section Background Image
                  </label>
                  <input
                    type="text"
                    value={heroBg}
                    onChange={(e) => setHeroBg(e.target.value)}
                    placeholder="URL or base64 image..."
                    className="w-full bg-[#1b1916] border border-[#2d2924] px-3.5 py-2.5 text-xs text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8e867a] mb-1">
                    Showroom Interior Image (Kirti Nagar)
                  </label>
                  <input
                    type="text"
                    value={showroomBg}
                    onChange={(e) => setShowroomBg(e.target.value)}
                    placeholder="URL or base64 image..."
                    className="w-full bg-[#1b1916] border border-[#2d2924] px-3.5 py-2.5 text-xs text-[#eae7e1] focus:border-[#c89d5c] focus:outline-none"
                  />
                </div>

                <div className="pt-4 border-t border-[#23201c] flex items-center justify-between">
                  <button
                    onClick={handleSaveBranding}
                    type="button"
                    className="px-6 py-2.5 bg-[#c89d5c] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#d6ac6e] transition-colors"
                  >
                    Save Atmosphere Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#22201d] bg-[#141311] flex items-center justify-between text-xs text-[#736c61]">
          <span>Changes are automatically saved in local browser storage.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#211f1c] hover:bg-[#2b2723] text-[#eae7e1] text-xs uppercase tracking-wider transition-colors"
          >
            Done & Return to Showroom
          </button>
        </div>
      </div>
    </div>
  );
};
