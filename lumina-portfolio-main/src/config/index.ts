/**
 * Centralized configuration module
 * All values can be overridden via environment variables
 */

// Helper to get environment variable with fallback
function getEnvNumber(key: string, defaultValue: number): number {
  const value = import.meta.env[key];
  if (value === undefined || value === '') return defaultValue;
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

function getEnvString(key: string, defaultValue: string): string {
  const value = import.meta.env[key];
  return value !== undefined && value !== '' ? value : defaultValue;
}

function getEnvBoolean(key: string, defaultValue: boolean): boolean {
  const value = import.meta.env[key];
  if (value === undefined || value === '') return defaultValue;
  return value === 'true' || value === '1';
}

// Toast Configuration
export const TOAST_CONFIG = {
  limit: getEnvNumber('VITE_TOAST_LIMIT', 1),
  removeDelay: getEnvNumber('VITE_TOAST_REMOVE_DELAY', 1000000),
} as const;

// Mobile Breakpoint (pixels)
export const MOBILE_BREAKPOINT = getEnvNumber('VITE_MOBILE_BREAKPOINT', 768);

// Sidebar Configuration
export const SIDEBAR_CONFIG = {
  cookieName: getEnvString('VITE_SIDEBAR_COOKIE_NAME', 'sidebar:state'),
  cookieMaxAge: getEnvNumber('VITE_SIDEBAR_COOKIE_MAX_AGE', 60 * 60 * 24 * 7), // 7 days in seconds
  width: getEnvString('VITE_SIDEBAR_WIDTH', '16rem'),
  widthMobile: getEnvString('VITE_SIDEBAR_WIDTH_MOBILE', '18rem'),
  widthIcon: getEnvString('VITE_SIDEBAR_WIDTH_ICON', '3rem'),
  keyboardShortcut: getEnvString('VITE_SIDEBAR_KEYBOARD_SHORTCUT', 'b'),
} as const;

// Tooltip Configuration
export const TOOLTIP_CONFIG = {
  delayDuration: getEnvNumber('VITE_TOOLTIP_DELAY_DURATION', 0),
} as const;

// Custom Cursor Configuration
export const CURSOR_CONFIG = {
  // Main cursor spring animation
  cursorSpring: {
    damping: getEnvNumber('VITE_CURSOR_DAMPING', 25),
    stiffness: getEnvNumber('VITE_CURSOR_STIFFNESS', 400),
  },
  // Glow effect spring animation
  glowSpring: {
    damping: getEnvNumber('VITE_CURSOR_GLOW_DAMPING', 50),
    stiffness: getEnvNumber('VITE_CURSOR_GLOW_STIFFNESS', 200),
  },
  // Size configuration
  size: {
    default: getEnvNumber('VITE_CURSOR_SIZE_DEFAULT', 12),
    clicking: getEnvNumber('VITE_CURSOR_SIZE_CLICKING', 8),
    hovering: getEnvNumber('VITE_CURSOR_SIZE_HOVERING', 48),
  },
  // Glow size configuration
  glowSize: {
    default: getEnvNumber('VITE_CURSOR_GLOW_SIZE_DEFAULT', 120),
    hovering: getEnvNumber('VITE_CURSOR_GLOW_SIZE_HOVERING', 200),
  },
  // Opacity configuration
  opacity: {
    default: getEnvNumber('VITE_CURSOR_OPACITY_DEFAULT', 1),
    hovering: getEnvNumber('VITE_CURSOR_OPACITY_HOVERING', 0.8),
    glowDefault: getEnvNumber('VITE_CURSOR_GLOW_OPACITY_DEFAULT', 0.4),
    glowHovering: getEnvNumber('VITE_CURSOR_GLOW_OPACITY_HOVERING', 0.8),
  },
  // Transition configuration
  transition: {
    damping: getEnvNumber('VITE_CURSOR_TRANSITION_DAMPING', 20),
    stiffness: getEnvNumber('VITE_CURSOR_TRANSITION_STIFFNESS', 300),
  },
  // Glow transition configuration
  glowTransition: {
    damping: getEnvNumber('VITE_CURSOR_GLOW_TRANSITION_DAMPING', 30),
    stiffness: getEnvNumber('VITE_CURSOR_GLOW_TRANSITION_STIFFNESS', 150),
  },
} as const;

// Magnetic Button Configuration
export const MAGNETIC_BUTTON_CONFIG = {
  magnetStrength: getEnvNumber('VITE_MAGNETIC_BUTTON_STRENGTH', 0.3),
  spring: {
    stiffness: getEnvNumber('VITE_MAGNETIC_BUTTON_STIFFNESS', 350),
    damping: getEnvNumber('VITE_MAGNETIC_BUTTON_DAMPING', 15),
  },
} as const;

// Animation Configuration (for framer-motion transitions)
export const ANIMATION_CONFIG = {
  // Default animation durations (seconds)
  duration: {
    short: getEnvNumber('VITE_ANIMATION_DURATION_SHORT', 0.4),
    medium: getEnvNumber('VITE_ANIMATION_DURATION_MEDIUM', 0.6),
    long: getEnvNumber('VITE_ANIMATION_DURATION_LONG', 0.8),
    veryLong: getEnvNumber('VITE_ANIMATION_DURATION_VERY_LONG', 10),
  },
  // Default animation delays (seconds)
  delay: {
    none: getEnvNumber('VITE_ANIMATION_DELAY_NONE', 0),
    short: getEnvNumber('VITE_ANIMATION_DELAY_SHORT', 0.1),
    medium: getEnvNumber('VITE_ANIMATION_DELAY_MEDIUM', 0.2),
    long: getEnvNumber('VITE_ANIMATION_DELAY_LONG', 0.3),
  },
  // Stagger delays for lists
  stagger: {
    fast: getEnvNumber('VITE_ANIMATION_STAGGER_FAST', 0.03),
    medium: getEnvNumber('VITE_ANIMATION_STAGGER_MEDIUM', 0.1),
    slow: getEnvNumber('VITE_ANIMATION_STAGGER_SLOW', 0.15),
  },
  // Standard easing curve
  ease: [0.16, 1, 0.3, 1] as const,
} as const;

// Server Configuration (mainly for Vite dev server)
export const SERVER_CONFIG = {
  host: getEnvString('VITE_SERVER_HOST', '::'),
  port: getEnvNumber('VITE_SERVER_PORT', 8080),
  hmrOverlay: getEnvBoolean('VITE_HMR_OVERLAY', false),
} as const;

// Export all config as a single object for convenience
export const config = {
  toast: TOAST_CONFIG,
  mobile: { breakpoint: MOBILE_BREAKPOINT },
  sidebar: SIDEBAR_CONFIG,
  tooltip: TOOLTIP_CONFIG,
  cursor: CURSOR_CONFIG,
  magneticButton: MAGNETIC_BUTTON_CONFIG,
  animation: ANIMATION_CONFIG,
  server: SERVER_CONFIG,
} as const;

export default config;
