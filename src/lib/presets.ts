import type { Theme } from '../types/store';
export const THEME_PRESETS: Record<string, Theme> = {
  electric: { primary:'#FFD02F', secondary:'#2B4EFF', accent:'#FF6B00', bg:'#FFF6E5', text:'#111111', borderWidth:3, headingFont:'Archivo Black', bodyFont:'DM Sans' },
  cobalt:   { primary:'#2B4EFF', secondary:'#FFD02F', accent:'#00C853', bg:'#FFFFFF', text:'#0A0A0A', borderWidth:3, headingFont:'Space Grotesk', bodyFont:'DM Sans' },
  lime:     { primary:'#B6FF00', secondary:'#FF6B00', accent:'#2B4EFF', bg:'#F4FFD6', text:'#111111', borderWidth:2, headingFont:'Archivo Black', bodyFont:'Space Grotesk' },
};
export const SECTION_LIBRARY = ['hero','featured-products','promo','image-text','categories','brand-story','testimonials','gallery','newsletter','rich-text','video','faq','logos','announcement','custom'] as const;
