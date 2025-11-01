# JelantahGO Design System

## Color Palette

### Primary Colors
- **Primary Dark Green**: `#0F3D2E`
  - Digunakan untuk: Header, footer, CTA buttons, headings
  - Memberikan kesan: Terpercaya, ramah lingkungan, premium
  
- **Primary Light**: `#134E3A`
  - Digunakan untuk: Hover states, gradients
  
### Secondary Colors
- **Mint Green**: `#D9E3D3`
  - Digunakan untuk: Badges, accents, decorative elements
  - Memberikan kesan: Segar, ramah lingkungan, lembut

- **Mint Light**: `#E8F0E3`
  - Digunakan untuk: Background cards, highlights

### Background Colors
- **Beige Soft**: `#F9F8F6`
  - Background utama website
  - Memberikan kesan hangat dan nyaman

- **White**: `#FFFFFF`
  - Background sections alternatif
  - Background cards premium

### Neutral Colors
- **Gray 600**: Text secondary
- **Gray 100-200**: Borders

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Headings
- **H1**: `text-4xl lg:text-5xl xl:text-6xl font-bold` (56-72px)
- **H2**: `text-3xl lg:text-4xl font-bold` (36-48px)
- **H3**: `text-xl lg:text-2xl font-bold` (24-32px)
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)

## Spacing & Layout

### Container
- Max width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`

### Sections
- Padding vertical: `py-20` (80px)
- Padding vertical small: `py-16` (64px)

### Cards
- Padding: `p-6` (24px) or `p-8` (32px)
- Gap between cards: `gap-6` or `gap-8`

## Border Radius

### Defined Values
- **Card**: `16px` (rounded-card)
- **Card Large**: `20px` (rounded-card-lg)
- **Full**: `rounded-full` untuk badges dan buttons kecil

## Shadows

### Layered System
```css
shadow-soft: 0 2px 8px rgba(15, 61, 46, 0.08)
shadow-soft-lg: 0 4px 16px rgba(15, 61, 46, 0.10)
shadow-soft-xl: 0 8px 24px rgba(15, 61, 46, 0.12)
shadow-layered: 0 2px 4px rgba(15, 61, 46, 0.06), 0 8px 16px rgba(15, 61, 46, 0.08)
```

### Usage
- Cards: `shadow-layered` atau `shadow-soft`
- Hover state: `hover:shadow-soft-lg` atau `hover:shadow-soft-xl`
- Floating elements: `shadow-soft-xl`


## Component Classes

### Cards

#### Premium Card
```css
.card-premium {
  @apply bg-white rounded-card-lg p-6 shadow-layered border border-gray-100 
         hover:shadow-soft-xl transition-all duration-300;
}
```
Untuk: Pricing cards, feature cards, benefit cards

#### Soft Card
```css
.card-soft {
  @apply bg-white rounded-card p-6 shadow-soft border border-gray-50;
}
```
Untuk: Simple content cards

#### Mint Card
```css
.card-mint {
  @apply bg-[#E8F0E3] rounded-card p-6 border border-[#D9E3D3];
}
```
Untuk: Highlighted content, special sections

### Buttons

#### Primary Button
```css
.btn-primary {
  @apply bg-[#0F3D2E] hover:bg-[#134E3A] text-white font-semibold 
         px-6 py-3 rounded-card transition-all duration-300 hover:shadow-soft-lg;
}
```

#### Secondary Button
```css
.btn-secondary {
  @apply bg-white text-[#0F3D2E] border-2 border-[#D9E3D3] 
         hover:bg-[#F9F8F6] hover:border-[#0F3D2E] font-semibold 
         px-6 py-3 rounded-card transition-all duration-300 hover:shadow-soft;
}
```


### Sections

#### Hero Background with Dots (Reusable)
```css
.hero-bg-dots {
  @apply relative bg-[#0F3D2E] text-white overflow-hidden;
}

.hero-bg-dots::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.3) 2.5px, transparent 2.5px);
  background-size: 8px 8px;
  pointer-events: none;
}
```
**Usage**: Untuk semua hero sections di seluruh website. Memberikan tekstur dot pattern hitam yang elegan.

#### Beige Section
```css
.section-beige {
  @apply bg-[#F9F8F6];
}
```

#### White Section
```css
.section-white {
  @apply bg-white;
}
```

#### Cream Section
```css
.section-cream {
  @apply bg-[#FCFBFA];
}
```

## Transitions & Animations

### Standard Transition
```css
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Hover Lift Effect
```css
.hover-lift {
  @apply hover:-translate-y-1 transition-smooth;
}
```

### Usage
- Semua elemen interaktif harus menggunakan `transition-smooth`
- Cards dan buttons menggunakan `hover-lift` untuk feedback visual
- Icon dapat menggunakan `group-hover:scale-110` atau `group-hover:rotate-12`

## Design Principles

### 1. Spacing Consistency
- Gunakan jarak yang konsisten (4px, 8px, 12px, 16px, 24px, 32px)
- Spacing antar section: 80px (py-20) atau 64px (py-16)
- Spacing dalam cards: 24px (p-6) atau 32px (p-8)


### 2. Visual Hierarchy
- Headlines bold dengan warna `#0F3D2E`
- Body text dengan gray-600 untuk readability
- Gunakan badges/pills untuk highlight informasi penting
- Gradients untuk CTA sections dan premium elements

### 3. Premium Feel
- Layered shadows untuk depth
- Smooth transitions dan hover effects
- Rounded corners yang konsisten
- White space yang cukup untuk breathing room

### 4. Eco-Friendly Theme
- Warna hijau gelap (#0F3D2E) sebagai primary
- Mint green (#D9E3D3) sebagai accent
- Beige background (#F9F8F6) untuk warmth
- Icon dan imagery yang mendukung tema lingkungan

### 5. Trust & Credibility
- Clean typography dengan font modern
- Professional spacing dan alignment
- Consistent border styling
- Soft shadows untuk subtle depth

## Implementation Guidelines

### Untuk Halaman Baru
1. Gunakan section alternatif: white → beige → white → beige
2. Setiap section memiliki padding `py-20`
3. Gunakan `container-custom` untuk content wrapper
4. Headlines menggunakan badge + h2 + description pattern
5. Cards menggunakan `card-premium` dengan `hover-lift`

### Untuk Components Baru
1. Semua interactive elements menggunakan `transition-smooth`
2. Buttons menggunakan shadow on hover
3. Cards memiliki border dan shadow yang subtle
4. Icons dalam gradient backgrounds untuk premium feel


### Best Practices
- **Consistency**: Gunakan utility classes yang sudah didefinisikan
- **Performance**: Avoid inline styles, gunakan Tailwind utilities
- **Accessibility**: Pastikan contrast ratio memenuhi WCAG standards
- **Mobile First**: Design untuk mobile terlebih dahulu
- **Progressive Enhancement**: Tambahkan effects untuk larger screens

## Quick Reference

### Common Patterns

#### Hero Section with Dots
```jsx
<section className="hero-bg-dots py-20">
  <div className="container-custom relative z-10">
    <div className="text-center">
      <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
        BADGE TEXT
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Hero Title
      </h1>
      <p className="text-xl max-w-3xl mx-auto text-white/90">
        Hero description
      </p>
    </div>
  </div>
</section>
```

#### Section Header
```jsx
<div className="text-center mb-16">
  <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
    BADGE TEXT
  </div>
  <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
    Section Title
  </h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Section description
  </p>
</div>
```

#### Feature Card
```jsx
<div className="card-premium hover-lift group">
  <div className="w-14 h-14 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-card flex items-center justify-center text-2xl font-bold mb-4 shadow-soft group-hover:shadow-soft-lg transition-smooth">
    1
  </div>
  <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Feature Title</h3>
  <p className="text-gray-600 text-sm leading-relaxed">Description</p>
</div>
```

#### CTA Button
```jsx
<a
  href="#"
  className="bg-[#0F3D2E] hover:bg-[#134E3A] text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft hover:shadow-soft-lg"
>
  Button Text
</a>
```

---

**Last Updated**: October 2025
**Version**: 2.0 - Premium Eco-Friendly Theme
