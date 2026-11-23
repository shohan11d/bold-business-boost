# Website typography, motion, and service pages

## What will change
- Use Arial as the site-wide font, remove unused hosted font loading, and tune the home banner’s heading scale and line breaks for desktop and mobile.
- Replace the home services symbols with a consistent set of minimal, formal line icons.
- Add restrained, CSS-only reveal and globe motion, with reduced-motion support and no continuous page-wide effects.
- Give About, Events, and Contact more useful content sections that match the existing brand and avoid inventing contact details or new company claims.
- Add four dedicated service pages—Testing, Inspection, Certification, and Training—with clear scope, example work, and links to contact; link them from the Services page.
- Give every new page unique search and social metadata and test the pages at desktop and mobile sizes.

## Implementation notes
- Keep the existing TanStack Start routing, brand colors, and shared page styling. Use four leaf routes under `/services/` and one shared, data-driven page template.
- Use browser-only CSS transitions/animations, avoid new dependencies, and honor `prefers-reduced-motion`.
- Preserve the current contact form behavior; no backend, contact details, or external service changes are included.
