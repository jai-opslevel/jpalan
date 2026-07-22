# Configuration Guide

This document describes the centralized configuration system for the portfolio application.

## Overview

All configurable values (timeouts, retries, page sizes, URLs, personal information, etc.) are centralized in `/src/config/index.ts`. This makes it easy to:

- Override values via environment variables
- Maintain consistent configuration across the application
- Deploy to different environments without code changes
- Test with different configurations

## Default Behavior

**With no environment variables set, the application behaves exactly as before.** All default values preserve the original hardcoded behavior.

## Configuration Categories

### UI & Animation Configuration

Configure UI behavior and animation parameters:

```bash
# Toast notifications
VITE_TOAST_LIMIT=1
VITE_TOAST_REMOVE_DELAY=1000000

# Responsive breakpoint (pixels)
VITE_MOBILE_BREAKPOINT=768

# Sidebar configuration
VITE_SIDEBAR_COOKIE_NAME=sidebar:state
VITE_SIDEBAR_COOKIE_MAX_AGE=604800  # 7 days in seconds
VITE_SIDEBAR_WIDTH=16rem
VITE_SIDEBAR_WIDTH_MOBILE=18rem
VITE_SIDEBAR_WIDTH_ICON=3rem
VITE_SIDEBAR_KEYBOARD_SHORTCUT=b

# Animation physics (cursor & effects)
VITE_CURSOR_DAMPING=25
VITE_CURSOR_STIFFNESS=400
VITE_GLOW_DAMPING=50
VITE_GLOW_STIFFNESS=200

# Scroll behavior (milliseconds)
VITE_SCROLL_HASH_DELAY=100
```

### Development Server

Configure the local development server:

```bash
VITE_DEV_SERVER_HOST=::
VITE_DEV_SERVER_PORT=8080
```

### Personal & Contact Information

Customize personal information displayed throughout the site:

```bash
# Basic info
VITE_PERSONAL_NAME="Jai Palan"
VITE_PERSONAL_EMAIL=j2palan@uwaterloo.ca
VITE_PERSONAL_PHONE=416-986-3487

# Social media profiles
VITE_SOCIAL_LINKEDIN=https://www.linkedin.com/in/jai-palan
VITE_SOCIAL_GITHUB=https://github.com/j-palan

# University information
VITE_UNIVERSITY_NAME="University of Waterloo"
VITE_UNIVERSITY_URL=https://uwaterloo.ca/
VITE_UNIVERSITY_LOGO=/wloologo.png
```

### External Company URLs

Configure links to company websites:

```bash
VITE_COMPANY_VITALL_URL=https://www.vitall.com/
VITE_COMPANY_LTIMINDTREE_URL=https://www.ltimindtree.com/
VITE_COMPANY_INDUSTRY40_URL=https://www.uwindustry4.ca/
```

### Project URLs

Configure demo and repository links for projects:

```bash
# Incident Manager project
VITE_PROJECT_INCIDENT_DEMO=https://www.loom.com/share/3457d014a0d84388a72048c7a0eee908
VITE_PROJECT_INCIDENT_GITHUB=https://github.com/j-palan/Rootly-Incident-Manager

# Runz project
VITE_PROJECT_RUNZ_DEMO=https://drive.google.com/file/d/1sAkf7PRO2Ba7KHXL_TQkOKR11Z3xXUcF/view?usp=sharing
VITE_PROJECT_RUNZ_GITHUB=https://github.com/j-palan/Runz
```

## Usage

### For Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Uncomment and modify values you want to override:
   ```bash
   # .env
   VITE_DEV_SERVER_PORT=3000
   VITE_PERSONAL_EMAIL=custom@email.com
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

### For Production

Set environment variables in your deployment platform (Vercel, Netlify, etc.):

```bash
# Vercel
vercel env add VITE_PERSONAL_EMAIL production

# Netlify
netlify env:set VITE_PERSONAL_EMAIL custom@email.com
```

### In Code

Import from the config module instead of using hardcoded values:

```typescript
import { config } from '@/config';

// Use configuration values
const email = config.personal.email;
const port = config.devServer.port;
const toastLimit = config.ui.toastLimit;
```

## Testing

Tests are included to verify:

1. **Default values** match the original hardcoded values
2. **Environment variable overrides** work correctly
3. **Type safety** is maintained throughout the configuration

Run tests:
```bash
npm test
```

## Type Safety

All configuration values are typed in TypeScript. The config module provides:

- **Type checking** at compile time
- **IntelliSense** support in your IDE
- **Autocomplete** for all configuration keys

## Migration Notes

The following files were updated to use centralized configuration:

- `src/hooks/use-toast.ts` - Toast configuration
- `src/hooks/use-mobile.tsx` - Mobile breakpoint
- `src/components/ui/sidebar.tsx` - Sidebar configuration
- `src/components/CustomCursor.tsx` - Animation physics
- `src/pages/Work.tsx` - Scroll timing
- `src/components/HeroSection.tsx` - Personal info & company URLs
- `src/components/ContactSection.tsx` - Contact information
- `src/components/GlassNavbar.tsx` - Email CTA
- `src/components/ExperienceSection.tsx` - Company URLs
- `src/components/ProjectsSection.tsx` - Project URLs
- `vite.config.ts` - Dev server configuration

## Best Practices

1. **Never commit `.env` files** - They contain environment-specific values
2. **Keep `.env.example` up to date** - Document all available options
3. **Use meaningful variable names** - Follow the `VITE_CATEGORY_ITEM` pattern
4. **Add tests** for new configuration values
5. **Document** new configuration options in this file

## Troubleshooting

### Configuration not updating

1. Restart the dev server after changing `.env`
2. Vite only loads `.env` files at startup
3. Clear your browser cache if values seem stale

### Environment variables not working in production

1. Ensure variables are prefixed with `VITE_`
2. Check that variables are set in your deployment platform
3. Verify the build uses the correct environment

### Type errors

1. Run `npm run build` to check for TypeScript errors
2. Ensure imports use `@/config` (not relative paths)
3. Check that you're accessing config properties correctly

## Future Enhancements

Consider adding configuration for:

- API endpoints and keys
- Feature flags
- Analytics/tracking IDs
- Third-party service URLs
- Content management settings
- A/B testing parameters
