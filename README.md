# Neo-Brutalist Store Builder

A fully editable Neo-Brutalist e-commerce website & store builder — storefront, admin dashboard, and a Shopify-style 3-panel visual editor in one app.

## What it does
- **Storefront:** Home (hero, featured, new arrivals, best sellers, categories, brand story, testimonials, newsletter), Shop with search / category / price filters + sorting, Product detail with gallery, variants, quantity, reviews & related products, Cart with quantities, discount codes, Checkout, About / Contact / FAQ / Shipping & Returns / Privacy / Terms
- **Visual Editor (core):** Left = section list with real drag-and-drop reorder, add / duplicate / delete / hide; Center = live preview (desktop / tablet / mobile, click-to-select with outline); Right = contextual settings for the selected section + global theme settings. Every control updates the preview instantly.
- **Section Library:** Hero, Image+Text, Featured Products, Collections, Promo Banner, Announcement Bar, Testimonials, Brand Story, Gallery, Newsletter, Rich Text, Video, FAQ, Logo Showcase, Custom Block — multiple instances, independently editable.
- **Admin:** Dashboard analytics (sales, orders, AOV, best sellers, chart), Products CRUD with images, price/sale, stock, variants, categories, availability, Orders with status updates + search/filter, Customers with order history, Collections, Settings.
- **Themes:** 3+ Neo-Brutalist presets (Electric Yellow, Cobalt, Lime/Orange) — apply, customize, save, duplicate, reset.
- **Saving / Publishing:** Autosave with indicator, manual Save, Undo / Redo, draft vs published separation — storefront renders the *published* config, editor works on *draft*. All data persists in the app database (fullstack artifact storage) and survives refresh.

## Design
Neo-Brutalism: 2–3px black borders, hard offset shadows (no blur), solid vibrant colors, Space Grotesk / Archivo Black / DM Sans, bold buttons with hover translate + shadow shift.

## Tech (hosted build)
React + TypeScript + Tailwind-style utility styling, JSON schema for theme / pages / sections / blocks / products, database-backed persistence via the Muse fullstack artifact runtime. Drag-and-drop uses native HTML5 DnD + pointer handling in the hosted build (dnd-kit-compatible data model: sections are ordered arrays with stable ids).

## Data model
```json
{
  "theme": { "primary": "#FFD02F", "secondary": "#2B4EFF", "bg": "#FFF6E5", "text": "#111111", "borderWidth": 3, "headingFont": "Archivo Black", "bodyFont": "DM Sans" },
  "draft": { "sections": [{ "id": "sec_...", "type": "hero", "visible": true, "settings": {} }] },
  "published": { "sections": [] },
  "products": [{ "id": "prod_...", "title": "", "price": 0, "salePrice": null, "stock": 0, "category": "", "variants": [], "images": [] }],
  "orders": [], "customers": []
}
```

## Local project in this workspace
The live, usable app is the Muse fullstack artifact **"Neo-Brutalist Store Builder"** (slug: `neo-brutalist-store-builder`). This repository mirrors its architecture, schema, and documentation for version control / handoff to a Next.js codebase.

## Verified live (2026-11-03)
- Bootstrap loads draft + published configs (8 sections), 3 presets, 12 products, 3 orders, 3 customers; store is Published.
- Product create/delete, order placement (stock decrements + sales counters), and publish round-trip were tested through the app actions and read back.
- Known quirk: two orders placed in the same parallel batch shared code RF-1050 (distinct order ids). Sequential checkout from the UI generates codes normally.

## Generated editor prompt
- `docs/SHOPIFY_EDITOR_PROMPT.md` — the self-generated prompt used to upgrade the editor to a Shopify-style customizer (templates, blocks, inline editing) and add the in-app Core page explaining Frontend vs Backend with live store data.
