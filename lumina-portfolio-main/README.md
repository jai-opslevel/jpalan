# Personal Portfolio

A single-page personal portfolio built with a modern, polished stack. Features a glass-morphism UI, smooth animations, and responsive layout.



## Tech Stack

| Layer        | Tech |
|-------------|------|
| Build       | [Vite](https://vitejs.dev/) 5, [SWC](https://swc.rs/) |
| UI          | [React](https://react.dev/) 18, [TypeScript](https://www.typescriptlang.org/) 5 |
| Routing     | [React Router](https://reactrouter.com/) 6 |
| Styling     | [Tailwind CSS](https://tailwindcss.com/) 3, [Radix UI](https://www.radix-ui.com/) / shadcn-style components |
| Animation   | [Framer Motion](https://www.framer.com/motion/) |
| Icons       | [Lucide React](https://lucide.dev/) |

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun)

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Runs the app at `http://localhost:5173` (or the port shown in the terminal).

### Build

```bash
npm run build
```

Output is in `dist/`. Preview the production build:

```bash
npm run preview
```

### Lint & Test

```bash
npm run lint
npm run test
```

## Project Structure

```
src/
├── components/     # Sections and shared UI (Hero, GlassNavbar, etc.)
├── pages/         # Route-level pages (Index, NotFound)
├── config/        # Centralized configuration with env var support
├── lib/           # Utilities (e.g. cn)
├── hooks/         # Custom React hooks
├── index.css      # Global styles and design tokens
└── main.tsx       # Entry point
```

## Configuration

All configurable values are centralized in `src/config/index.ts` and can be overridden via environment variables:

```bash
# Copy the example file to get started
cp .env.example .env

# Edit .env to override any default values
# All variables are prefixed with VITE_
```

**Key configuration categories:**
- **UI Settings** - Toast limits, breakpoints, animation timings
- **Dev Server** - Host and port configuration
- **Personal Info** - Name, email, phone, social links
- **URLs** - Company websites, project demos, GitHub repos

See [CONFIG.md](./CONFIG.md) for detailed documentation on all available environment variables and configuration options.

**Default behavior:** With no environment variables set, the application uses sensible defaults and behaves identically to the original implementation.

## Customization

- **Content** — Update copy and links in the section components under `src/components/`.
- **Configuration** — Override any settings via environment variables (see [CONFIG.md](./CONFIG.md)).
- **Theme** — Colors and spacing are driven by CSS variables in `src/index.css`; adjust `:root` for light/dark or brand colors.
- **Sections** — Add, remove, or reorder sections in `src/pages/Index.tsx`.

## License

Private — all rights reserved.
