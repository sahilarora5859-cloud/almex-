/**
 * Types for Almex Furniture Digital Showroom
 */

export type PrimaryCategory = 'office-chairs' | 'office-desks';

// Architecture prepared for future expansion
export type FutureCategory = 
  | 'sofas' 
  | 'dining' 
  | 'beds' 
  | 'tables' 
  | 'cabinets' 
  | 'lounge-chairs';

export type FurnitureCategory = PrimaryCategory | FutureCategory;

export type DisplayLayout = 
  | 'featured-full'
  | 'split-duo'
  | 'asymmetric-left'
  | 'asymmetric-right'
  | 'vertical-editorial'
  | 'standard-pair';

export interface FurnitureItem {
  id: string;
  name: string;
  subtitle?: string;
  category: PrimaryCategory;
  categoryLabel: string;
  shortDescription: string;
  imageUrl: string;
  dimensions?: string;
  finish?: string;
  layout?: DisplayLayout;
  isHeroSpotlight?: boolean;
}

export interface ShowroomConfig {
  introBackgroundUrl?: string;
  heroBackgroundUrl?: string;
  showroomBackgroundUrl?: string;
  chairsCoverUrl?: string;
  desksCoverUrl?: string;
}
