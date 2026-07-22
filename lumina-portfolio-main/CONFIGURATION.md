# Configuration Guide

This project uses a centralized configuration system that allows all configurable values to be overridden via environment variables.

## Quick Start

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` to customize values for your environment

3. Restart the development server to apply changes:
   ```bash
   npm run dev
   ```

## Available Configuration

All configuration values have sensible defaults that preserve the original behavior. You only need to set environment variables when you want to override the defaults.

### Toast Configuration

Control the behavior of toast notifications:

- `VITE_TOAST_LIMIT` - Maximum number of toasts shown simultaneously (default: `1`)
- `VITE_TOAST_REMOVE_DELAY` - Time in milliseconds before a toast is removed (default: `1000000`)

### Responsive Breakpoints

- `VITE_MOBILE_BREAKPOINT` - Screen width in pixels for mobile layout (default: `768`)

### Sidebar Configuration

Customize the sidebar behavior:

- `VITE_SIDEBAR_COOKIE_NAME` - Cookie name for sidebar state (default: `sidebar:state`)
- `VITE_SIDEBAR_COOKIE_MAX_AGE` - Cookie expiration in seconds (default: `604800` - 7 days)
- `VITE_SIDEBAR_WIDTH` - Sidebar width when expanded (default: `16rem`)
- `VITE_SIDEBAR_WIDTH_MOBILE` - Sidebar width on mobile (default: `18rem`)
- `VITE_SIDEBAR_WIDTH_ICON` - Sidebar width when collapsed (default: `3rem`)
- `VITE_SIDEBAR_KEYBOARD_SHORTCUT` - Key to toggle sidebar (default: `b`)

### Custom Cursor Animation

Fine-tune the custom cursor appearance and behavior:

**Spring Physics:**
- `VITE_CURSOR_DAMPING` - Cursor spring damping (default: `25`)
- `VITE_CURSOR_STIFFNESS` - Cursor spring stiffness (default: `400`)
- `VITE_CURSOR_GLOW_DAMPING` - Glow effect damping (default: `50`)
- `VITE_CURSOR_GLOW_STIFFNESS` - Glow effect stiffness (default: `200`)

**Sizes:**
- `VITE_CURSOR_SIZE_DEFAULT` - Default cursor size in pixels (default: `12`)
- `VITE_CURSOR_SIZE_CLICKING` - Cursor size when clicking (default: `8`)
- `VITE_CURSOR_SIZE_HOVERING` - Cursor size when hovering (default: `48`)
- `VITE_CURSOR_GLOW_SIZE_DEFAULT` - Default glow size (default: `120`)
- `VITE_CURSOR_GLOW_SIZE_HOVERING` - Glow size when hovering (default: `200`)

**Opacity:**
- `VITE_CURSOR_OPACITY_DEFAULT` - Default cursor opacity (default: `1`)
- `VITE_CURSOR_OPACITY_HOVERING` - Cursor opacity when hovering (default: `0.8`)
- `VITE_CURSOR_GLOW_OPACITY_DEFAULT` - Default glow opacity (default: `0.4`)
- `VITE_CURSOR_GLOW_OPACITY_HOVERING` - Glow opacity when hovering (default: `0.8`)

### Magnetic Button Effect

- `VITE_MAGNETIC_BUTTON_STRENGTH` - Magnetic pull strength multiplier (default: `0.3`)
- `VITE_MAGNETIC_BUTTON_STIFFNESS` - Spring stiffness (default: `350`)
- `VITE_MAGNETIC_BUTTON_DAMPING` - Spring damping (default: `15`)

### Animation Timing

Global animation configuration for Framer Motion:

**Durations (in seconds):**
- `VITE_ANIMATION_DURATION_SHORT` (default: `0.4`)
- `VITE_ANIMATION_DURATION_MEDIUM` (default: `0.6`)
- `VITE_ANIMATION_DURATION_LONG` (default: `0.8`)
- `VITE_ANIMATION_DURATION_VERY_LONG` (default: `10`)

**Delays (in seconds):**
- `VITE_ANIMATION_DELAY_NONE` (default: `0`)
- `VITE_ANIMATION_DELAY_SHORT` (default: `0.1`)
- `VITE_ANIMATION_DELAY_MEDIUM` (default: `0.2`)
- `VITE_ANIMATION_DELAY_LONG` (default: `0.3`)

**Stagger Effects (in seconds):**
- `VITE_ANIMATION_STAGGER_FAST` (default: `0.03`)
- `VITE_ANIMATION_STAGGER_MEDIUM` (default: `0.1`)
- `VITE_ANIMATION_STAGGER_SLOW` (default: `0.15`)

### Development Server

- `VITE_SERVER_HOST` - Dev server host (default: `::`)
- `VITE_SERVER_PORT` - Dev server port (default: `8080`)
- `VITE_HMR_OVERLAY` - Show HMR error overlay (default: `false`)

## Usage in Code

To use configuration values in your code:

```typescript
import { config } from '@/config';

// Access nested configuration
const cursorSize = config.cursor.size.default;
const mobileBreakpoint = config.mobile.breakpoint;

// Or import specific exports
import { CURSOR_CONFIG, MOBILE_BREAKPOINT } from '@/config';
```

## Environment-Specific Configuration

Create different configuration files for different environments:

- `.env.local` - Local development (gitignored)
- `.env.development` - Development environment
- `.env.production` - Production environment

Vite automatically loads the appropriate file based on the `mode` parameter.

## Best Practices

1. **Never commit `.env.local`** - This file contains local overrides and should be gitignored
2. **Keep `.env.example` updated** - Document all available configuration options
3. **Use sensible defaults** - The application should work without any environment variables set
4. **Document new config values** - Update this file and the config module README when adding new configuration

## Troubleshooting

### Changes not taking effect

1. Make sure you've restarted the dev server after changing `.env.local`
2. Verify the environment variable name starts with `VITE_` prefix
3. Check that the value is in the correct format (number, string, boolean)

### Invalid values

The configuration module validates environment variables and falls back to defaults for invalid values:
- Non-numeric strings for number configs → uses default
- Empty strings → uses default
- For booleans, only `"true"` or `"1"` are treated as true

## More Information

For technical details about the configuration system, see [src/config/README.md](src/config/README.md).
