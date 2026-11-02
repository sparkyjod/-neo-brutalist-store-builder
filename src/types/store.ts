export type SectionType = 'announcement'|'hero'|'featured-products'|'promo'|'image-text'|'categories'|'brand-story'|'testimonials'|'gallery'|'newsletter'|'rich-text'|'video'|'faq'|'logos'|'custom';
export interface Section { id: string; type: SectionType; visible: boolean; settings: Record<string, unknown>; }
export interface Theme { primary: string; secondary: string; accent: string; bg: string; text: string; borderWidth: number; headingFont: string; bodyFont: string; }
export interface Product { id: string; title: string; price: number; salePrice: number|null; stock: number; category: string; description: string; images: string[]; colors: string[]; sizes: string[]; available: boolean; rating: number; }
export interface Order { id: string; customer: string; email: string; total: number; status: 'pending'|'paid'|'shipped'|'delivered'|'cancelled'; items: {productId: string; qty: number; price: number}[]; date: string; }
export interface StoreState { theme: Theme; draft: { sections: Section[] }; published: { sections: Section[] } | null; products: Product[]; orders: Order[]; }
