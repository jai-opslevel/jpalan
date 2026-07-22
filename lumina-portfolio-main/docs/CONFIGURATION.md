# Configuration Guide

This document describes the centralized configuration system for the Lumina Portfolio application.

## Overview

All configurable values (timeouts, animation settings, URLs, etc.) are centralized in `src/config/index.ts` and can be overridden via environment variables with the `VITE_JPALAN_` prefix.

## Configuration Categories

### Animation Configuration

Controls all animation timing and behavior throughout the application.

#### Durations
- `VITE_JPALAN_ANIMATION_DEFAULT_DURATION` (default: 0.6) - Standard animation duration
- `VITE_JPALAN_ANIMATION_SHORT_DURATION` (default: 0.25) - Quick transitions
- `VITE_JPALAN_ANIMATION_MEDIUM_DURATION` (default: 0.5) - Medium-length animations
- `VITE_JPALAN_ANIMATION_LONG_DURATION` (default: 0.8) - Longer animations
- `VITE_JPALAN_ANIMATION_VERY_LONG_DURATION` (default: 10) - Background ambient animations
- `VITE_JPALAN_ANIMATION_EXTRA_LONG_DURATION` (default: 12) - Very slow ambient animations
- `VITE_JPALAN_ANIMATION_SKILLS_DURATION` (default: 0.4) - Skills section animation duration

#### Delays
- `VITE_JPALAN_ANIMATION_SHORT_DELAY` (default: 0.1) - Minimal delay between elements
- `VITE_JPALAN_ANIMATION_DEFAULT_DELAY` (default: 0.2) - Standard stagger delay
- `VITE_JPALAN_ANIMATION_MEDIUM_DELAY` (default: 0.3) - Medium delay
- `VITE_JPALAN_ANIMATION_LONG_DELAY` (default: 0.5) - Longer delay
- `VITE_JPALAN_ANIMATION_EXTRA_LONG_DELAY` (default: 0.6) - Extra long delay
- `VITE_JPALAN_ANIMATION_HERO_DELAY_1` through `5` - Specific delays for hero section elements
- `VITE_JPALAN_ANIMATION_PROJECTS_DELAY` (default: 0.15) - Delay between project cards

#### Spring Physics
Spring animation physics for smooth, natural motion:

- **Cursor Spring**
  - `VITE_JPALAN_ANIMATION_SPRING_CURSOR_DAMPING` (default: 25)
  - `VITE_JPALAN_ANIMATION_SPRING_CURSOR_STIFFNESS` (default: 400)
  
- **Glow Effect Spring**
  - `VITE_JPALAN_ANIMATION_SPRING_GLOW_DAMPING` (default: 50)
  - `VITE_JPALAN_ANIMATION_SPRING_GLOW_STIFFNESS` (default: 200)
  
- **Transition Spring**
  - `VITE_JPALAN_ANIMATION_SPRING_TRANSITION_DAMPING` (default: 20)
  - `VITE_JPALAN_ANIMATION_SPRING_TRANSITION_STIFFNESS` (default: 300)
  
- **Magnetic Button Spring**
  - `VITE_JPALAN_ANIMATION_SPRING_MAGNETIC_DAMPING` (default: 15)
  - `VITE_JPALAN_ANIMATION_SPRING_MAGNETIC_STIFFNESS` (default: 350)
  
- **Glow Effect Spring**
  - `VITE_JPALAN_ANIMATION_SPRING_GLOW_EFFECT_DAMPING` (default: 30)
  - `VITE_JPALAN_ANIMATION_SPRING_GLOW_EFFECT_STIFFNESS` (default: 150)

### UI Configuration

#### Custom Cursor
- `VITE_JPALAN_UI_CURSOR_DEFAULT_SIZE` (default: 12) - Default cursor size in pixels
- `VITE_JPALAN_UI_CURSOR_HOVER_SIZE` (default: 48) - Cursor size when hovering
- `VITE_JPALAN_UI_CURSOR_CLICK_SIZE` (default: 8) - Cursor size when clicking
- `VITE_JPALAN_UI_CURSOR_GLOW_DEFAULT_SIZE` (default: 120) - Default glow effect size
- `VITE_JPALAN_UI_CURSOR_GLOW_HOVER_SIZE` (default: 200) - Glow size when hovering
- `VITE_JPALAN_UI_CURSOR_DEFAULT_OPACITY` (default: 1) - Default cursor opacity
- `VITE_JPALAN_UI_CURSOR_HOVER_OPACITY` (default: 0.8) - Cursor opacity when hovering
- `VITE_JPALAN_UI_CURSOR_GLOW_DEFAULT_OPACITY` (default: 0.4) - Default glow opacity
- `VITE_JPALAN_UI_CURSOR_GLOW_HOVER_OPACITY` (default: 0.8) - Glow opacity when hovering

#### Viewport
- `VITE_JPALAN_UI_VIEWPORT_MARGIN` (default: "-100px") - Intersection observer margin for triggering animations

#### Magnetic Button
- `VITE_JPALAN_UI_MAGNETIC_STRENGTH` (default: 0.3) - Strength of magnetic effect (0-1)

### Toast Configuration

- `VITE_JPALAN_TOAST_LIMIT` (default: 1) - Maximum number of toasts shown simultaneously
- `VITE_JPALAN_TOAST_REMOVE_DELAY` (default: 1000000) - Delay before removing toast (ms)

### External Links Configuration

#### Social Links
- `VITE_JPALAN_SOCIAL_EMAIL` (default: "j2palan@uwaterloo.ca")
- `VITE_JPALAN_SOCIAL_LINKEDIN` (default: "https://www.linkedin.com/in/jai-palan")
- `VITE_JPALAN_SOCIAL_GITHUB` (default: "https://github.com/j-palan")
- `VITE_JPALAN_SOCIAL_PHONE` (default: "416-986-3487")

#### Company URLs
- `VITE_JPALAN_COMPANY_VITALL_URL` (default: "https://www.vitall.com/")
- `VITE_JPALAN_COMPANY_LTIMINDTREE_URL` (default: "https://www.ltimindtree.com/")
- `VITE_JPALAN_COMPANY_INDUSTRY40_URL` (default: "https://www.uwindustry4.ca/")
- `VITE_JPALAN_COMPANY_UWATERLOO_URL` (default: "https://uwaterloo.ca/")

#### Project URLs
- `VITE_JPALAN_PROJECT_INCIDENT_MANAGER_DEMO` - Demo video URL
- `VITE_JPALAN_PROJECT_INCIDENT_MANAGER_GITHUB` - GitHub repository URL
- `VITE_JPALAN_PROJECT_RUNZ_DEMO` - Demo video URL
- `VITE_JPALAN_PROJECT_RUNZ_GITHUB` - GitHub repository URL

### Server Configuration

- `VITE_JPALAN_SERVER_HOST` (default: "::") - Development server host
- `VITE_JPALAN_SERVER_PORT` (default: 8080) - Development server port

## Usage

### In TypeScript/React Components

Import the config and use the values:

```typescript
import { animationConfig, linksConfig } from "@/config";

// Use in component
<motion.div
  transition={{ duration: animationConfig.defaultDuration }}
>
  {/* ... */}
</motion.div>

<a href={linksConfig.social.linkedin}>LinkedIn</a>
```

### Setting Environment Variables

#### Development

Create a `.env` file in the project root (use `.env.example` as a template):

```bash
# Override animation duration
VITE_JPALAN_ANIMATION_DEFAULT_DURATION=0.8

# Override social links
VITE_JPALAN_SOCIAL_EMAIL=custom@example.com
```

#### Production

Set environment variables in your deployment platform (Vercel, Netlify, etc.):

```bash
VITE_JPALAN_ANIMATION_DEFAULT_DURATION=0.8
VITE_JPALAN_SERVER_PORT=3000
```

### Vite Configuration

The `vite.config.ts` file reads server configuration from environment variables:

```typescript
const getServerConfig = () => ({
  host: process.env.VITE_JPALAN_SERVER_HOST || "::",
  port: parseInt(process.env.VITE_JPALAN_SERVER_PORT || "8080", 10),
});
```

## Testing

Tests for the configuration module are located in `src/config/index.test.ts`. Run tests with:

```bash
npm run test
```

## Migration Notes

All previously hardcoded configuration values have been migrated to the centralized config system:

- ✅ Animation durations and delays
- ✅ Spring physics parameters
- ✅ UI dimensions (cursor, viewport)
- ✅ Toast settings
- ✅ External URLs (social, company, projects)
- ✅ Server configuration

The migration preserves all default values, ensuring identical runtime behavior when no environment variables are set.

## Best Practices

1. **Use semantic names**: When adding new configuration, use descriptive names that clearly indicate the purpose
2. **Document defaults**: Always document the default value in comments and this guide
3. **Type safety**: Keep configuration values strongly typed
4. **No runtime changes**: Configuration is loaded at build/startup time; changes require rebuild/restart
5. **Sensitive data**: Never commit actual `.env` files; use `.env.example` for documentation

## Troubleshooting

### Configuration not updating

- Ensure you've restarted the development server after changing `.env`
- Vite caches environment variables; try clearing cache: `rm -rf node_modules/.vite`

### Type errors

- Run `npm run lint` to check for TypeScript issues
- Ensure all imports use `@/config` alias correctly

### Default values not working

- Check that the config module exports are properly typed with `as const`
- Verify that the helper functions (`getEnvNumber`, `getEnvString`) are working correctly
