---
name: Azlan Heritage Tech
colors:
  surface: '#fcf8ff'
  surface-dim: '#dad7f3'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#efecff'
  surface-container-high: '#e8e5ff'
  surface-container-highest: '#e2e0fc'
  on-surface: '#1a1a2e'
  on-surface-variant: '#434750'
  inverse-surface: '#2f2e43'
  inverse-on-surface: '#f2efff'
  outline: '#737781'
  outline-variant: '#c3c6d2'
  surface-tint: '#335f9d'
  primary: '#00376f'
  on-primary: '#ffffff'
  primary-container: '#1f4e8c'
  on-primary-container: '#9ec1ff'
  inverse-primary: '#a9c7ff'
  secondary: '#0b61a1'
  on-secondary: '#ffffff'
  secondary-container: '#7cbaff'
  on-secondary-container: '#004a7d'
  tertiary: '#582c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#793f00'
  on-tertiary-container: '#ffae6b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#144684'
  secondary-fixed: '#d1e4ff'
  secondary-fixed-dim: '#9ecaff'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#00497c'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77e'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fcf8ff'
  on-background: '#1a1a2e'
  surface-variant: '#e2e0fc'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 32px
  unit-xl: 64px
---

## Brand & Style

The brand identity centers on "Built in Freetown. Built for Africa." It balances high-performance technology with deep-rooted cultural pride. The aesthetic is **Corporate Modern with subtle Brutalist accents**, emphasizing structural integrity and confidence. 

The visual narrative uses a "Lion’s Pride" motif—representing leadership, strength, and community. Design elements should feel world-class yet locally resonant. This is achieved through the use of clean lines, purposeful white space, and the strategic application of geometric African patterns (specifically inspired by Sierra Leonean textile weaving) used as subtle overlays or border accents. A stylized lion silhouette is utilized as a low-opacity watermark for background depth or as a decorative graphic element in hero sections.

The emotional response should be one of **unshakeable trust, local empowerment, and sophisticated innovation.**

## Colors

The palette is anchored by **Deep Navy Blue**, signifying stability and corporate authority. **Mid Blue** provides depth and tonal variation for UI layering. **Gold Yellow** is the "Hero" color, used exclusively for calls to action, highlights, and status indicators, symbolizing the wealth of African potential and the bright sun of Freetown.

- **Primary:** #1F4E8C (Actionable items, Brand identity)
- **Secondary:** #2E75B6 (Secondary buttons, icon fills)
- **Accent:** #F5C842 (Primary CTAs, decorative dividers, highlights)
- **Neutral/Dark:** #1A1A2E (Text, footers, dark-mode surfaces)
- **Dividers:** Use 1px #F5C842 at 30% opacity for a sophisticated, subtle "gold thread" effect.

## Typography

The typography system uses **Plus Jakarta Sans** for headlines to convey a soft yet modern and assertive personality. Its geometric nature complements the African-inspired patterns used in the brand. **Inter** is used for body and functional text to ensure maximum readability and a systematic, tech-forward feel.

Large display headings should use tighter letter spacing (-0.02em) to create a high-impact, editorial look. Labels and small metadata should be set in uppercase Inter with increased tracking to maintain a clean, professional hierarchy.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. Spacing follows an 8px base unit. 

- **Sectioning:** Use large vertical padding (unit-xl) to allow the "Built for Africa" narrative space to breathe. 
- **Dividers:** Horizontal sections should be separated by thin gold lines (#F5C842) or very subtle "wave" masks at the bottom of hero sections to reference Freetown’s coastline.
- **Alignment:** Headlines should be left-aligned for a strong, professional "anchor" effect, while feature cards should use a structured, symmetrical grid.

## Elevation & Depth

Depth is established through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface 0:** White (#FFFFFF) - Main background.
- **Surface 1:** Off-white/Grey (#F8F9FB) - Used for background sections to distinguish content blocks.
- **Surface 2:** Navy (#1A1A2E) - Used for high-impact sections like the Footer or Hero highlights.
- **Elevation:** For cards, use a very soft, diffused shadow (0px 4px 20px rgba(26, 26, 46, 0.05)) combined with a 1px border in #2E75B6 at 10% opacity. This creates a "glass-like" professional crispness without the clutter of traditional shadows.

## Shapes

The shape language is **Structured and Softened**. A "Soft" roundedness (0.25rem - 0.75rem) is used to ensure the UI feels modern and accessible, while maintaining the "corporate" professional edge.

- **Primary Buttons:** Use `rounded-lg` (0.5rem) for a modern, approachable feel.
- **Feature Cards:** Use `rounded-xl` (0.75rem) to differentiate them from smaller UI elements.
- **Patterns:** Decorative African geometric patterns should be contained within rectangular or circular masks to maintain grid discipline.

## Components

### Navbar
Sticky top-bar with a blur effect (backdrop-filter: blur(10px)). Background is 90% white. The Primary CTA is a **Gold Yellow** button with navy text for maximum visibility.

### Feature Cards (JULA POS, Tardem, etc.)
Cards feature a 1px subtle border. On hover, the border transitions to Gold Yellow (#F5C842) and a small "lion silhouette" watermark becomes slightly more visible in the corner of the card. Icons should be in Mid Blue.

### Buttons
- **Primary:** Gold Yellow background, Deep Navy text. Bold weight.
- **Secondary:** Deep Navy background, White text.
- **Ghost:** Transparent background, 1px Mid Blue border.

### Team Cards
Clean vertical layout. Circular image masks for headshots. Role labels in "label-caps" typography using Mid Blue to distinguish from the name.

### Footer
Deep Navy (#1A1A2E) background. All link hover states should transition to Gold Yellow. Include a subtle "Built with pride in Freetown" micro-copy at the bottom with a small Sierra Leone flag or heart icon.