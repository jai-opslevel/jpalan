# Jai Palan's Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

A modern, single-page personal portfolio website showcasing professional experience, projects, and skills. Built with cutting-edge web technologies and featuring a polished glass-morphism UI design, smooth animations powered by Framer Motion, and a fully responsive layout optimized for all devices.

## 🌟 Features

- **Glass-morphism Design** - Modern, elegant UI with translucent glass effects
- **Smooth Animations** - Powered by Framer Motion for seamless user experience
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Custom Cursor** - Interactive custom cursor for enhanced engagement
- **Dark/Light Mode Support** - Theme switching with next-themes
- **Performance Optimized** - Built with Vite and React 18 for lightning-fast performance
- **Type-Safe** - Written in TypeScript for robust code quality
- **Analytics Integration** - Vercel Analytics for visitor insights

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🛠 Tech Stack

### Core Technologies

| Layer        | Technology |
|-------------|-----------|
| Build Tool  | [Vite](https://vitejs.dev/) 5 with [SWC](https://swc.rs/) for ultra-fast compilation |
| Framework   | [React](https://react.dev/) 18 with [TypeScript](https://www.typescriptlang.org/) 5 |
| Routing     | [React Router](https://reactrouter.com/) 6 |
| Styling     | [Tailwind CSS](https://tailwindcss.com/) 3 with custom design tokens |
| UI Components | [Radix UI](https://www.radix-ui.com/) / shadcn-style accessible components |
| Animation   | [Framer Motion](https://www.framer.com/motion/) for smooth, professional animations |
| Icons       | [Lucide React](https://lucide.dev/) for beautiful, consistent iconography |
| Forms       | [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation |
| State Management | [TanStack Query](https://tanstack.com/query) for server state management |
| Theme       | [next-themes](https://github.com/pacocoursey/next-themes) for dark mode support |
| Analytics   | [Vercel Analytics](https://vercel.com/analytics) for visitor tracking |

### Development Tools

- **Linting**: ESLint 9 with TypeScript support
- **Testing**: Vitest with React Testing Library
- **Type Checking**: TypeScript 5.8
- **Package Manager**: npm (with optional Bun support)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))

**Optional:**
- **Bun**: Alternative JavaScript runtime and package manager ([Download](https://bun.sh/))

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jai-opslevel/jpalan.git
cd jpalan/lumina-portfolio-main
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun (faster alternative):
```bash
bun install
```

This will install all required dependencies including React, TypeScript, Tailwind CSS, and all UI component libraries.

## 💻 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use - check the terminal output).

### Production Build

Create an optimized production build:

```bash
npm run build
```

The built files will be output to the `dist/` directory, ready for deployment.

### Preview Production Build

Preview the production build locally before deployment:

```bash
npm run preview
```

### Development Build

Create a development build (useful for debugging):

```bash
npm run build:dev
```

## 📁 Project Structure

```
lumina-portfolio-main/
├── public/                 # Static assets (fonts, images, favicon)
│   └── fonts/             # Custom web fonts
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn-style base UI components
│   │   ├── ContactSection.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GlassCard.tsx
│   │   ├── GlassNavbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── pages/            # Route-level page components
│   │   ├── Index.tsx     # Main landing page
│   │   └── NotFound.tsx  # 404 page
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions (e.g., cn for className merging)
│   ├── test/             # Test utilities and setup
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and CSS variables
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
├── vitest.config.ts      # Vitest test configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── components.json       # shadcn component configuration
└── README.md             # Project documentation
```

## ⚙️ Configuration

### Content Customization

**Personal Information & Links:**
- Edit content in section components under `src/components/`:
  - `HeroSection.tsx` - Name, tagline, social links
  - `ExperienceSection.tsx` - Work history and achievements
  - `ProjectsSection.tsx` - Portfolio projects
  - `SkillsSection.tsx` - Technical skills and expertise
  - `ContactSection.tsx` - Contact form and information

**Page Title & Meta:**
- Update `index.html` for page title, description, and Open Graph tags

### Theme Customization

**Colors & Design Tokens:**
All colors and spacing are driven by CSS variables in `src/index.css`. Customize the `:root` variables to match your brand:

```css
:root {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  --secondary: ...;
  /* ... more design tokens */
}
```

**Dark Mode:**
Dark mode variables are defined in the `.dark` class selector. Modify these to customize the dark theme appearance.

**Tailwind Configuration:**
Advanced styling customization can be done in `tailwind.config.ts` for:
- Custom color schemes
- Spacing scale
- Typography settings
- Animation configurations

### Section Management

Add, remove, or reorder portfolio sections by editing `src/pages/Index.tsx`:

```tsx
<main>
  <HeroSection />
  <ExperienceSection />
  <ProjectsSection />
  <SkillsSection />
  <ContactSection />
</main>
```

### Component Configuration

The `components.json` file contains configuration for shadcn UI components:
- Component style variants
- Default import paths
- Tailwind configuration

### Environment Variables

Currently, the project does not require environment variables for basic operation. If you need to add API keys or configuration:

1. Create a `.env` file in the root directory
2. Add variables with the `VITE_` prefix:
   ```
   VITE_API_KEY=your_api_key_here
   ```
3. Access in code: `import.meta.env.VITE_API_KEY`

## 🔧 Development

### Code Quality

**Linting:**
Run ESLint to check code quality:
```bash
npm run lint
```

ESLint is configured with TypeScript support and React-specific rules for consistent code style.

**Type Checking:**
TypeScript provides compile-time type checking. The build process will fail if there are type errors.

### Testing

**Run Tests:**
```bash
npm run test
```

**Watch Mode (for TDD):**
```bash
npm run test:watch
```

Tests are configured with Vitest and React Testing Library for fast, modern testing.

### Adding New Components

1. Create component in `src/components/`
2. Use TypeScript for props typing
3. Follow the existing component patterns (Glass effects, Framer Motion animations)
4. Import and use in pages as needed

### Adding UI Components

The project uses shadcn-style components. To add new UI components:

```bash
# Note: If using shadcn CLI, install it first
npx shadcn-ui@latest add [component-name]
```

Components will be added to `src/components/ui/`.

## 🚢 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in [Vercel Dashboard](https://vercel.com)
3. Vercel will auto-detect Vite and configure build settings
4. Deploy with one click

**Manual Deployment:**
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Other Platforms

The built `dist/` folder is a static site that can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Node Version:** 18+

## 🤝 Contributing

Contributions are welcome! This is a personal portfolio project, but suggestions and improvements are appreciated.

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation as needed

4. **Commit Your Changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Link any related issues
   - Wait for review

### Development Guidelines

- Write clean, readable TypeScript code
- Follow React best practices and hooks patterns
- Maintain accessibility standards (WCAG 2.1)
- Test your changes thoroughly
- Keep dependencies up to date
- Document complex logic with comments

### Reporting Issues

Found a bug or have a suggestion? Please open an issue on GitHub:

1. Check if the issue already exists
2. Provide a clear description
3. Include steps to reproduce (for bugs)
4. Add screenshots if relevant

## 📄 License

**Private - All Rights Reserved**

This project is private and proprietary. All rights are reserved by the owner. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit permission.

For licensing inquiries, please contact the repository owner.

## 📧 Contact

**Jai Palan**

- **GitHub**: [@jai-opslevel](https://github.com/jai-opslevel)
- **Repository**: [jpalan](https://github.com/jai-opslevel/jpalan)
- **Issues**: [Report an issue](https://github.com/jai-opslevel/jpalan/issues)

For general inquiries or collaboration opportunities, please reach out through the contact form on the portfolio website or open an issue on GitHub.

---

## 🙏 Acknowledgments

Built with amazing open-source technologies:
- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [shadcn/ui](https://ui.shadcn.com/) - Component patterns

---

<div align="center">
Made with ❤️ by Jai Palan
</div>

---

knicks in 5
