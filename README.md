# GRACE Dental and Aesthetic Clinic Website

A premium, modern dental clinic website built with Next.js, featuring advanced animations, dark/light mode theming, and SEO optimization.

## Features

- 🎨 Modern, premium UI with calm medical aesthetic
- 🌓 Dark/Light mode with smooth transitions
- ✨ Advanced Framer Motion animations
- 📱 Fully responsive design
- 🚀 Optimized for performance (Lighthouse 95+ target)
- 🔍 SEO-friendly with structured data
- ♿ Accessible and WCAG-compliant

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── sections/        # Page sections
│   ├── ui/              # Reusable UI components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── animation-variants.ts
│   └── utils.ts
└── public/              # Static assets

```

## Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme.

### Content

Update the content in each section component in `components/sections/`.

### Contact Information

Replace placeholder contact details:

- Phone: +91 98765 43210
- Email: info@gracedental.com
- Location: Update Google Maps embed in `components/sections/contact.tsx`

## SEO

The website includes:

- Optimized meta tags
- Structured data (MedicalBusiness schema)
- Open Graph tags
- Local SEO keywords
- Sitemap and robots.txt

## Performance

Built with performance in mind:

- Image optimization
- Code splitting
- Lazy loading
- Minimal CLS
- Fast initial paint

## License

© 2026 GRACE Dental and Aesthetic Clinic. All rights reserved.
