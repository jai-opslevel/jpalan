# Configuration Module

This module provides centralized configuration management for the portfolio application. All configuration values have sensible defaults and can be overridden via environment variables.

## Usage

```typescript
import { config, MOBILE_BREAKPOINT, CURSOR_CONFIG } from '@/config';

// Use individual exports
const breakpoint = MOBILE_BREAKPOINT;

// Or use the unified config object
const cursorSize = config.cursor.size.default;
```

## Environment Variables

All configuration values can be overridden by setting the appropriate environment variable. For Vite applications, environment variables must be prefixed with `VITE_` to be exposed to the client.

See `.env.example` in the project root for a complete list of available environment variables and their default values.

## Configuration Sections

### Toast Configuration
- `VITE_TOAST_LIMIT`: Maximum number of toasts to display simultaneously
- `VITE_TOAST_REMOVE_DELAY`: Delay in milliseconds before removing a toast

### Mobile Breakpoint
- `VITE_MOBILE_BREAKPOINT`: Screen width in pixels below which mobile layout is used

### Sidebar Configuration
- `VITE_SIDEBAR_COOKIE_NAME`: Name of the cookie storing sidebar state
- `VITE_SIDEBAR_COOKIE_MAX_AGE`: Cookie expiration time in seconds
- `VITE_SIDEBAR_WIDTH`: Sidebar width when expanded
- `VITE_SIDEBAR_WIDTH_MOBILE`: Sidebar width on mobile devices
- `VITE_SIDEBAR_WIDTH_ICON`: Sidebar width when collapsed
- `VITE_SIDEBAR_KEYBOARD_SHORTCUT`: Keyboard key to toggle sidebar

### Cursor Configuration
Configuration for the custom cursor animation, including spring physics, sizes, and opacity values.

### Magnetic Button Configuration
- `VITE_MAGNETIC_BUTTON_STRENGTH`: Multiplier for magnetic effect distance
- Spring animation parameters for the magnetic effect

### Animation Configuration
Default durations, delays, and stagger values for Framer Motion animations throughout the application.

### Server Configuration
- `VITE_SERVER_HOST`: Vite dev server host
- `VITE_SERVER_PORT`: Vite dev server port
- `VITE_HMR_OVERLAY`: Whether to show HMR error overlay

## Adding New Configuration

To add a new configuration value:

1. Add a helper function call in `src/config/index.ts`:
   ```typescript
   export const MY_CONFIG = getEnvNumber('VITE_MY_CONFIG', defaultValue);
   ```

2. Add the environment variable to `.env.example`

3. Add test coverage in `src/config/index.test.ts`

4. Update this README with documentation
