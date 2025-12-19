# YOUWARE.md

## Project Overview
This is a professional athlete landing page for a rhythmic gymnast (Maria Magdalena Zelenina), built with React, TypeScript, Vite, and Tailwind CSS. The content is in English.

## Architecture
- **Entry Point**: `src/main.tsx` mounts `App.tsx`.
- **Components**: Located in `src/components/`.
  - `Navbar`: Sticky navigation with mobile menu.
  - `Hero`: Main landing section with arched image and animations.
  - `AboutMe`: Section describing the gymnast.
  - `VideoShowcase`: Grid of video highlights (currently placeholders).
  - `PhotoGallery`: Masonry-style image gallery.
  - `Achievements`: Grid of awards and titles.
  - `Contact`: Contact form and social links.
  - `Footer`: Copyright and links.
- **Styling**: Tailwind CSS with custom configuration in `tailwind.config.js`.
  - **Colors**: Custom `cream`, `lavender`, `pink`, `gold`, `blue-pastel`.
  - **Fonts**: `Cinzel` (serif) for headings, `Lato` (sans) for body.
  - **Border Radius**: Extended `3xl` (2rem) for soft, elegant shapes.
- **Animations**: `framer-motion` used for Hero entrance animations. CSS transitions for hover effects.
- **Icons**: `lucide-react`.

## Development Commands
- **Install Dependencies**: `npm install`
- **Start Dev Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Build**: `npm run preview`

## Key Features
- **Responsive Design**: Mobile-first approach using Tailwind's responsive prefixes (`md:`, `lg:`).
- **Smooth Scrolling**: Implemented via CSS `scroll-behavior: smooth` (if added to html) or standard anchor links.
- **Interactive Elements**: Hover effects on cards, buttons, and links.

## Future Improvements
- **Video Integration**: Replace placeholder video cards with actual `iframe` embeds or a video player modal.
- **Dynamic Content**: Move data (videos, images, awards) to a separate data file or CMS.
- **Form Handling**: Connect the contact form to a backend service (e.g., Youbase or EmailJS).
