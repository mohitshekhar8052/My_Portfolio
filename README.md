# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a sleek design with hire me functionality and integrated payment system.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Components**: Engaging user experience with Framer Motion animations
- **Contact Forms**: Professional contact and hire me forms
- **Payment Integration**: Built-in payment system for project payments
- **Skills Showcase**: Animated skill bars and technology displays
- **Project Gallery**: Showcase of development projects
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### UI Components
- **Radix UI** - Accessible, unstyled UI primitives
- **Shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Modern icon library
- **React Hook Form** - Form handling with validation

### Additional Libraries
- **React Router DOM** - Client-side routing
- **EmailJS** - Contact form email integration
- **Zod** - Schema validation
- **Class Variance Authority** - Component variant styling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohitshekhar8052/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🏗️ Build & Deploy

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
My_Portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Navbar.tsx      # Navigation
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Skills.tsx      # Skills display
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   │   ├── Hire.tsx        # Hire me page
│   │   ├── Payment.tsx     # Payment page
│   │   └── Index.tsx       # Main page
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── docs/                   # Documentation files
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Theme Configuration
The theme can be customized in `tailwind.config.ts`:
- Colors, fonts, spacing
- Dark/light mode variants
- Custom animations

### Component Styling
Components use Tailwind CSS classes and can be easily customized:
- Update color schemes
- Modify animations
- Adjust responsive breakpoints

### Content Updates
Update personal information in:
- `src/components/Hero.tsx` - Personal intro
- `src/components/About.tsx` - About section
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Projects.tsx` - Project showcase

## 🚀 Deployment

### GitHub Pages
```bash
npm install gh-pages --save-dev
npm run build
npx gh-pages -d dist
```

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📧 Contact Setup

To enable contact forms:
1. Sign up for EmailJS
2. Create email service and template
3. Update environment variables:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 Documentation

Additional documentation available in the `docs/` folder:
- `DEPLOYMENT-CHECKLIST.md` - Deployment guide
- `EMAIL_SETUP.md` - Email configuration
- `PAYMENT_SYSTEM.md` - Payment integration

## 🐛 Issues

If you encounter any issues, please:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 🚀 Performance

- **Lighthouse Score**: 95+ performance
- **First Contentful Paint**: < 1.5s
- **Bundle Size**: Optimized with Vite
- **Image Optimization**: WebP format support

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] PWA capabilities
- [ ] Analytics integration
- [ ] SEO optimization

## 📄 License

This project is licensed under a Custom License - see the [LICENSE](LICENSE) file for details.

**Copyright (c) 2025 Mohit Kumar Shekhar. All rights reserved.**

For commercial use or licensing inquiries, please contact: mohit8052231582@gmail.com

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ using React, TypeScript, and modern web technologies.