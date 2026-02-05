# Rahil Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Smooth Animations**: Beautiful micro-interactions using Framer Motion
- **GitHub Integration**: Automatically fetches and displays all repositories
- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Mode**: Theme switching with next-themes
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Performance Focused**: Built with Next.js App Router for optimal loading

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **Validation**: Zod for form validation

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
│   ├── ui/               # Basic UI components (Button, Card, etc.)
│   ├── motion/           # Animation components
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── sections/         # Page sections
├── lib/                   # Utility functions and data
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- Uses CSS custom properties for theming
- Supports both light and dark modes
- Accessible color combinations

### Typography
- Inter font for clean, modern look
- Consistent scale and spacing

### Components
- Consistent hover states and transitions
- Card-based layout with subtle shadows
- Smooth animations with reduced motion support

## ⚡ Performance

- Optimized images with next/image
- Server-side rendering for fast initial loads
- Efficient GitHub API caching
- Minimal JavaScript bundle size

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env.local
   # Add your GitHub token for higher API limits
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management

### Experience & Education
Edit the data in `lib/data.ts` to update:
- Professional experience
- Education details
- Featured projects
- Skills and technologies

### Resume
Replace `public/Rahil_Resume_1.pdf` with your resume file.

### GitHub Integration
The site automatically fetches repositories from the GitHub username defined in `lib/github.ts`.

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

### Other Platforms
The project works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify

## 🔧 Environment Variables

```bash
# Optional: GitHub token for higher API rate limits
GITHUB_TOKEN=your_github_token

# Contact form (if implementing email functionality)
CONTACT_EMAIL_TO=your.email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
```

## 📊 Analytics & SEO

- Structured data for search engines
- Open Graph meta tags
- Twitter Card support
- Sitemap generation ready
- Performance monitoring ready

## 🎯 Customization

### Colors & Theme
Edit the CSS custom properties in `app/globals.css` and the Tailwind config in `tailwind.config.ts`.

### Animations
Modify animation variants in `components/motion/MotionProvider.tsx` or create new ones.

### Content
Update personal information, experience, and projects in `lib/data.ts`.

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly navigation
- Optimized images and fonts
- Fast loading on mobile networks

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

## 🔗 Links

- **Live Site**: [Your deployed URL]
- **GitHub**: [Your repository URL]

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!