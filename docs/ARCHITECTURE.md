# Architecture
- Storefront renders `published` config only.
- Editor mutates `draft`; Publish copies draft -> published; Unpublish clears published flag.
- Autosave: debounced save of draft + products + orders to DB, with Saved / Saving indicator.
- Undo/Redo: snapshot stack of draft JSON (max 50).
- Sections are rendered dynamically: `renderSection(section, theme, products)` switch on `section.type`.
- All editor controls write to the same draft object — no decorative controls.
