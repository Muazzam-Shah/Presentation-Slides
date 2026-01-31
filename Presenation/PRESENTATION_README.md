# NEXUS Presentation System

A distinctive, production-grade presentation slide system built with React + TypeScript + Tailwind CSS.

## 🎨 Design Philosophy

This isn't a generic template—it's a **bold, editorial-style presentation system** with:

- **Brutalist Typography**: Large-scale display fonts with intentional hierarchy
- **Signature Visual Identity**: Custom color palette (neon accents on dark canvas)
- **Geometric Motifs**: Decorative frames, borders, and corner accents
- **Cinematic Animations**: Subtle slide transitions and reveals
- **Magazine-Grade Layouts**: Asymmetric grids and editorial composition

## 📦 Component Library

### Core Slides

- **`<Slide />`** - Base slide container with configurable backgrounds
- **`<TitleSlide />`** - Hero opening slide with large typography
- **`<ContentSlide />`** - Two-column content layout
- **`<DataSlide />`** - Three-column stats/metrics display
- **`<SplitSlide />`** - Flexible two-panel layout
- **`<QuoteSlide />`** - Centered testimonial/quote
- **`<ClosingSlide />`** - Final CTA with contact info

### Specialized Slides

- **`<ProblemSlide />`** - List problems with numbered timeline
- **`<SolutionSlide />`** - Feature grid with icons
- **`<TimelineSlide />`** - Vertical timeline with events
- **`<TechStackSlide />`** - Technology stack categories
- **`<TeamSlide />`** - Team member grid with avatars
- **`<AgendaSlide />`** - Numbered agenda items

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Navigate with:
- **Arrow Keys** (← →) or **Spacebar** to advance
- **Home/End** to jump to first/last slide
- Click navigation dots for direct access

## 🎯 Usage Example

```tsx
import { TitleSlide, DataSlide } from './components/Slides';

<TitleSlide 
  title="Your Product"
  subtitle="Revolutionary approach to solving X"
  meta="Series A Pitch • 2026"
/>

<DataSlide 
  title="Market Opportunity"
  stats={[
    { value: '$100B', label: 'TAM', change: '+45% YoY' },
    { value: '50M', label: 'Users', change: 'Projected 2027' }
  ]}
/>
```

## 🎨 Customization

### Color Theme

Edit `tailwind.config.js`:

```js
colors: {
  'deck-dark': '#0a0a0f',      // Main background
  'deck-accent': '#ff3366',     // Primary accent
  'deck-secondary': '#00d9ff',  // Secondary accent
  'deck-muted': '#6b7280',      // Muted text
  'deck-bg': '#0f0f17',         // Alternate background
}
```

### Typography

Custom font pairings in `tailwind.config.js`:

```js
fontFamily: {
  'display': ['Space Grotesk', 'system-ui'],  // Headlines
  'body': ['Inter', 'system-ui'],             // Body text
  'mono': ['JetBrains Mono', 'monospace'],    // Code/labels
}
```

## 📐 Slide Dimensions

All slides are **1280×720px** (16:9 aspect ratio) for:
- ✅ Projector compatibility
- ✅ PDF export readiness
- ✅ Screen recording optimization

## 🎬 Animation System

Built-in Tailwind animations:
- `animate-fade-in` - Gentle opacity fade
- `animate-slide-in` - Vertical slide entrance
- `animate-scale-in` - Subtle zoom effect

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Deck.tsx                # Main presentation wrapper
│   ├── Slides.tsx              # Core slide components
│   └── SpecializedSlides.tsx   # Business-specific slides
├── App.tsx                      # Root component
├── index.css                    # Tailwind + custom styles
└── main.tsx                     # Entry point
```

## 🎓 Best Practices

### Typography Hierarchy
- **Hero titles**: 8rem (128px) - Title slides only
- **Slide titles**: 6-7rem (96-112px)
- **Body headings**: 3-4rem (48-64px)
- **Paragraph text**: 1.5-2rem (24-32px)
- **Labels/metadata**: 0.875-1rem (14-16px)

### Content Density
- **Maximum 3 bullet points** per slide
- **40 words or less** for body text
- Use visuals/data over paragraphs
- Embrace white space

### Color Usage
- **Dark backgrounds** for projector readability
- **High contrast** (white text on dark)
- **Accent colors** for emphasis only
- Avoid low-contrast grays

## 🔧 Tech Stack

- **React 19** - Component framework
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Utility-first styling
- **Vite 7** - Build tooling
- **Framer Motion** - Animation library (optional)

## 📝 Customizing for Your Deck

1. **Edit `Deck.tsx`** - Replace content in slide components
2. **Adjust theme** - Modify colors in `tailwind.config.js`
3. **Add slides** - Import components and add to slides array
4. **Export** - Build for production or use screenshot tools

## 🎯 Use Cases

Perfect for:
- ✅ Investor pitch decks
- ✅ Product launches
- ✅ Conference talks
- ✅ Quarterly business reviews
- ✅ Technical architecture presentations
- ✅ Design portfolio showcases

## 📤 Export Options

### Development Preview
```bash
npm run dev  # Live preview at localhost
```

### Production Build
```bash
npm run build
npm run preview
```

### PDF Export
Use browser print (Cmd/Ctrl + P) with:
- Landscape orientation
- Remove headers/footers
- Background graphics enabled

## 🎨 Design Inspiration

This system draws from:
- **Swiss International Style** - Grid systems, typography
- **Brutalist Web Design** - Raw, bold aesthetics
- **Editorial Layouts** - Magazine-style composition
- **Cyberpunk Aesthetics** - Neon accents, dark themes

## 📜 License

MIT License - Feel free to customize and use for any presentation.

---

**Built with precision. Designed to impress.**
