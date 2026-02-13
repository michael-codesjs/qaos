# Qaos Layout & Structure

## General Layout

- **Philosophy:** "Organized Chaos." The UI must feel calm and structured, even when the underlying test logic is handling complex, chaotic scenarios.
- **Whitespace:** High usage of whitespace (padding `64px`+ between sections) to avoid data overload.
- **Grid:** A rigorous grid system for test result cards and analytic dashboards.

## Components

- **Buttons:**
  - **Radius:** `6px` (Consistent rounded corners).
  - **Primary:** Solid `#111111` background with white text (e.g., "Start New Run").
  - **Secondary:** Outline or light background (e.g., "View Logs").
- **Cards / Containers:**
  - **Radius:** Larger rounding, approx `12px` to `24px`.
  - **Style:** Clean white backgrounds on light beige sections (`#F6F5F3`), or dark grey cards on black sections.
  - **Shadows:** Soft, diffused shadows to lift the content (`box-shadow: 0 4px 20px rgba(0,0,0,0.05)`).

## Dashboard Specifics

- **Sidebar:** Left-aligned, collapsible, glassmorphism effect.
- **Timeline View:** A central component for visualizing the test run. Nodes should use the mapped Agent Colors.
- **Log Console:** A dark-themed panel (using `#111111` bg) often placed at the bottom or side, using the Monospace font.

## Routing & Organization

- **Route Groups:** Use Next.js route groups (e.g., `(marketing)`, `(auth)`) to isolate layout concerns.
  - `(marketing)`: Shared header/footer and landing page content with "Action" auras.
  - `(auth)`: Focused, centered card layouts with "Thinking" (Strategist) auras.
- **Co-location:** Section-specific components are kept in a local `_components` folder within the route group or page directory to keep the global `@/components` clean.
- **Aura Logic:** Each major layout must implement a specific "Aura" background effect corresponding to the brand state (Action vs. Logic).
