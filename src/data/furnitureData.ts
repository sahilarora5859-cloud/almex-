import { FurnitureItem, ShowroomConfig } from '../types/furniture';

// Default showroom imagery generated for Almex Furniture
export const DEFAULT_CONFIG: ShowroomConfig = {
  introBackgroundUrl: '/src/assets/images/almex_exact_facade_kirti_nagar_1790331316270.jpg',
  heroBackgroundUrl: '/src/assets/images/almex_hero_suite_1790330628827.jpg',
  showroomBackgroundUrl: '/src/assets/images/almex_exact_facade_kirti_nagar_1790331316270.jpg',
  chairsCoverUrl: '/src/assets/images/almex_cognac_executive_chair_1790331615043.jpg',
  desksCoverUrl: '/src/assets/images/almex_desks_collection_1790330673247.jpg',
};

// 22 Curated ready-made office furniture pieces (11 Office Chairs + 11 Office Desks)
// Each item preserves its original image ratio without distortion, stretching, or modification.
export const INITIAL_FURNITURE_ITEMS: FurnitureItem[] = [
  // ==================== 01 — OFFICE CHAIRS (11 Items) ====================
  {
    id: 'chair-01',
    name: 'ALMEX COGNAC EXECUTIVE',
    subtitle: 'High-Back Executive Chair',
    category: 'office-chairs',
    categoryLabel: 'Executive Office Seating',
    shortDescription: 'A premium high-back chair featuring soft cushioned seating, warm cognac upholstery and elegant chrome detailing. Designed for a sophisticated and comfortable executive workspace.',
    imageUrl: '/src/assets/images/almex_cognac_executive_chair_1790331615043.jpg',
    dimensions: 'W: 68 cm · D: 72 cm · H: 118–128 cm',
    finish: 'Cognac Upholstery · Chrome Accents · Contrast Stitching',
    layout: 'featured-full',
    isHeroSpotlight: true,
  },
  {
    id: 'chair-03',
    name: 'ALMEX SOLIS',
    subtitle: 'Low-Back Conference Chair',
    category: 'office-chairs',
    categoryLabel: 'Conference / Office Chair',
    shortDescription: 'A sophisticated cushioned chair featuring a warm tan finish, button-tufted detailing and polished chrome accents. Its refined design makes it ideal for modern conference rooms and executive workspaces.',
    imageUrl: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80',
    finish: 'Warm Tan Upholstery · Button-Tufted Detailing · Polished Chrome',
    layout: 'split-duo',
  },
  {
    id: 'chair-04',
    name: 'Almex Linea Mid-Century Swivel Chair',
    category: 'office-chairs',
    categoryLabel: 'Office Chair',
    shortDescription: 'Sculpted silhouette with contoured cushioning for executive corner offices.',
    imageUrl: 'https://images.unsplash.com/photo-1589384267710-7a25bc2f211e?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 64 cm · D: 66 cm · H: 108–116 cm',
    finish: 'Caramel Tan Leatherette with Black Powder-Coated Pedestal',
    layout: 'asymmetric-left',
  },
  {
    id: 'chair-05',
    name: 'Almex Zenith Synchronous Task Armchair',
    category: 'office-chairs',
    categoryLabel: 'Office Chair',
    shortDescription: 'Multi-axis adjustable armrests with synchronous tilt mechanism for modern workstations.',
    imageUrl: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 67 cm · D: 64 cm · H: 110–120 cm',
    finish: 'Graphite Mesh with Reinforced Nylon Core',
    layout: 'asymmetric-right',
  },
  {
    id: 'chair-06',
    name: 'Almex Modus Ribbed Leather Executive',
    category: 'office-chairs',
    categoryLabel: 'Office Chair',
    shortDescription: 'Horizontal channeled cushioning with refined chrome structural arms.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 62 cm · D: 65 cm · H: 114–122 cm',
    finish: 'Rich Espresso Leatherette & High-Gloss Chrome Trim',
    layout: 'vertical-editorial',
  },
  {
    id: 'chair-07',
    name: 'Almex Velo Minimalist Mesh Swivel',
    category: 'office-chairs',
    categoryLabel: 'Office Chair',
    shortDescription: 'Featherlight aesthetic with high-durability elastomeric weave for open-plan offices.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 61 cm · D: 59 cm · H: 98–108 cm',
    finish: 'Chalk White Frame with Platinum Grey Mesh',
    layout: 'standard-pair',
  },
  {
    id: 'chair-09',
    name: 'Almex Grandeur Presidential High-Back',
    category: 'office-chairs',
    categoryLabel: 'Office Chair',
    shortDescription: 'Deep padded headrest and multi-point lumbar support for primary executive suites.',
    imageUrl: 'https://images.unsplash.com/photo-1580481077195-c9a915b497b7?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 72 cm · D: 75 cm · H: 125–135 cm',
    finish: 'Midnight Onyx Leatherette with Solid Metallic Accents',
    layout: 'featured-full',
  },

  // ==================== 02 — OFFICE DESKS (9 Items) ====================
  {
    id: 'desk-01',
    name: 'Almex Monolith Executive Presidential Suite Desk',
    category: 'office-desks',
    categoryLabel: 'Office Desk',
    shortDescription: 'Monumental architectural proportions with integrated modesty panel and concealed cable raceways.',
    imageUrl: '/src/assets/images/almex_desks_collection_1790330673247.jpg',
    dimensions: 'W: 240 cm · D: 105 cm · H: 76 cm',
    finish: 'Deep Smoked Oak Veneer with Brushed Bronze Inlay',
    layout: 'featured-full',
    isHeroSpotlight: true,
  },
  {
    id: 'desk-03',
    name: 'Almex Aero L-Shaped Executive Workstation',
    category: 'office-desks',
    categoryLabel: 'Office Desk',
    shortDescription: 'Expansive dual-surface configuration designed for commanding corner spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 220 cm × 180 cm · H: 75 cm',
    finish: 'Warm Natural Ash Top with Architectural Steel Base',
    layout: 'split-duo',
  },
  {
    id: 'desk-04',
    name: 'Almex Element Pure Studio Desk',
    category: 'office-desks',
    categoryLabel: 'Office Desk',
    shortDescription: 'Unencumbered surface with chamfered edge details for creative design studios.',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 160 cm · D: 80 cm · H: 75 cm',
    finish: 'Matte Hard-Waxed Nordic Birch with Powder-Coated White Trestles',
    layout: 'asymmetric-left',
  },
  {
    id: 'desk-05',
    name: 'Almex Caldera Dark Marble Executive Island',
    category: 'office-desks',
    categoryLabel: 'Office Desk',
    shortDescription: 'Sublime reconstituted Nero Marquina top with recessed leather writing blotter.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 210 cm · D: 95 cm · H: 76 cm',
    finish: 'Nero Marquina Matte Composite & Champagne Gold Feet',
    layout: 'asymmetric-right',
  },
  {
    id: 'desk-06',
    name: 'Almex Vantage Dual-Pedestal Director Desk',
    category: 'office-desks',
    categoryLabel: 'Office Desk',
    shortDescription: 'Classic executive massing refined with contemporary shadow gaps and soft-close storage.',
    imageUrl: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 220 cm · D: 100 cm · H: 76 cm',
    finish: 'Rift-Cut Ebony Oak with Brushed Gunmetal Hardware',
    layout: 'vertical-editorial',
  },
  {
    id: 'desk-07',
    name: 'Almex Nova Linear Executive Table Desk',
    category: 'office-desks',
    categoryLabel: 'Office Desk',
    shortDescription: 'Open-frame architecture allowing natural light passage across modern workspace floors.',
    imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
    dimensions: 'W: 180 cm · D: 85 cm · H: 75 cm',
    finish: 'Warm Hazelnut Laminate with Sandblasted Aluminum Legs',
    layout: 'standard-pair',
  },
  {
    id: 'desk-09',
    name: 'Almex Apex Corporate Boardroom Console Desk',
    category: 'office-desks',
    categoryLabel: 'Office Desk',
    shortDescription: 'Curated for primary executive retreats and signature corporate presentations.',
    imageUrl: '/src/assets/images/almex_hero_suite_1790330628827.jpg',
    dimensions: 'W: 260 cm · D: 110 cm · H: 76 cm',
    finish: 'Dark Walnut Burl with Solid Milled Brass Plinth',
    layout: 'featured-full',
  },
];

import { idbSet, safeLocalStorageSet } from '../utils/storageUtils';

// Storage keys
export const STORAGE_KEY_ITEMS = 'almex_furniture_items_v1';
export const STORAGE_KEY_CONFIG = 'almex_furniture_config_v1';

export function loadSavedFurnitureItems(): FurnitureItem[] {
  if (typeof window === 'undefined') return INITIAL_FURNITURE_ITEMS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ITEMS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
          .filter(
            (item: FurnitureItem) =>
              ![
                'chair-02',
                'chair-08',
                'chair-10',
                'chair-11',
                'desk-02',
                'desk-08',
                'desk-10',
                'desk-11',
              ].includes(item.id)
          )
          .map((item) => {
            if (item.id === 'chair-01') {
              return {
                ...item,
                name: 'ALMEX COGNAC EXECUTIVE',
                subtitle: 'High-Back Executive Chair',
                categoryLabel: 'Executive Office Seating',
                shortDescription:
                  'A premium high-back chair featuring soft cushioned seating, warm cognac upholstery and elegant chrome detailing. Designed for a sophisticated and comfortable executive workspace.',
                finish: 'Cognac Upholstery · Chrome Accents · Contrast Stitching',
                dimensions: 'W: 68 cm · D: 72 cm · H: 118–128 cm',
                imageUrl: item.imageUrl.includes('almex_chairs_collection')
                  ? '/src/assets/images/almex_cognac_executive_chair_1790331615043.jpg'
                  : item.imageUrl,
              };
            }
            if (item.id === 'chair-03') {
              return {
                ...item,
                name: 'ALMEX SOLIS',
                subtitle: 'Low-Back Conference Chair',
                categoryLabel: 'Conference / Office Chair',
                shortDescription:
                  'A sophisticated cushioned chair featuring a warm tan finish, button-tufted detailing and polished chrome accents. Its refined design makes it ideal for modern conference rooms and executive workspaces.',
                finish: 'Warm Tan Upholstery · Button-Tufted Detailing · Polished Chrome',
                dimensions: undefined,
              };
            }
            return item;
          });
      }
    }
  } catch (e) {
    console.warn('Failed to parse saved furniture items from localStorage:', e);
  }
  return INITIAL_FURNITURE_ITEMS;
}

export function saveFurnitureItems(items: FurnitureItem[]): void {
  if (typeof window === 'undefined') return;

  // 1. Always persist to IndexedDB (asynchronous, multi-gigabyte capacity, no quota crash)
  idbSet(STORAGE_KEY_ITEMS, items).catch(() => {});

  // 2. Safely attempt localStorage persistence
  const serialized = JSON.stringify(items);
  const success = safeLocalStorageSet(STORAGE_KEY_ITEMS, serialized);

  // 3. If quota exceeded due to large data URLs, store lightweight metadata version in localStorage
  if (!success) {
    try {
      const lightweightItems = items.map((it) => {
        // If image is a massive data URL, avoid bloat in localStorage
        if (typeof it.imageUrl === 'string' && it.imageUrl.startsWith('data:') && it.imageUrl.length > 50000) {
          const fallback = INITIAL_FURNITURE_ITEMS.find((init) => init.id === it.id);
          return {
            ...it,
            imageUrl: fallback ? fallback.imageUrl : '',
          };
        }
        return it;
      });
      safeLocalStorageSet(STORAGE_KEY_ITEMS, JSON.stringify(lightweightItems));
    } catch {
      // Non-blocking
    }
  }
}

export function loadSavedConfig(): ShowroomConfig {
  if (typeof window === 'undefined') return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (raw) {
      return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.warn('Failed to parse saved config from localStorage:', e);
  }
  return DEFAULT_CONFIG;
}

export function saveShowroomConfig(config: ShowroomConfig): void {
  if (typeof window === 'undefined') return;

  // 1. Always persist to IndexedDB
  idbSet(STORAGE_KEY_CONFIG, config).catch(() => {});

  // 2. Safely attempt localStorage persistence
  const serialized = JSON.stringify(config);
  const success = safeLocalStorageSet(STORAGE_KEY_CONFIG, serialized);

  // 3. If quota exceeded, strip massive data URLs for localStorage copy
  if (!success) {
    try {
      const lightweightConfig: ShowroomConfig = { ...config };
      (['introBackgroundUrl', 'heroBackgroundUrl', 'showroomBackgroundUrl', 'chairsCoverUrl', 'desksCoverUrl'] as const).forEach((key) => {
        const val = lightweightConfig[key];
        if (typeof val === 'string' && val.startsWith('data:') && val.length > 50000) {
          lightweightConfig[key] = DEFAULT_CONFIG[key];
        }
      });
      safeLocalStorageSet(STORAGE_KEY_CONFIG, JSON.stringify(lightweightConfig));
    } catch {
      // Non-blocking
    }
  }
}
