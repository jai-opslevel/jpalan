/**
 * Centralized configuration module for the portfolio application.
 * All configuration values can be overridden via environment variables.
 * Default values preserve existing behavior.
 */

// Type helpers for parsing environment variables
const parseNumber = (value: string | undefined, defaultValue: number): number => {
  if (!value) return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

const parseString = (value: string | undefined, defaultValue: string): string => {
  return value || defaultValue;
};

// ============================================================================
// UI & Animation Configuration
// ============================================================================

export const uiConfig = {
  // Toast notifications
  toastLimit: parseNumber(import.meta.env.VITE_TOAST_LIMIT, 1),
  toastRemoveDelay: parseNumber(import.meta.env.VITE_TOAST_REMOVE_DELAY, 1000000),

  // Mobile breakpoint (pixels)
  mobileBreakpoint: parseNumber(import.meta.env.VITE_MOBILE_BREAKPOINT, 768),

  // Sidebar dimensions and settings
  sidebar: {
    cookieName: parseString(import.meta.env.VITE_SIDEBAR_COOKIE_NAME, "sidebar:state"),
    cookieMaxAge: parseNumber(import.meta.env.VITE_SIDEBAR_COOKIE_MAX_AGE, 60 * 60 * 24 * 7), // 7 days
    width: parseString(import.meta.env.VITE_SIDEBAR_WIDTH, "16rem"),
    widthMobile: parseString(import.meta.env.VITE_SIDEBAR_WIDTH_MOBILE, "18rem"),
    widthIcon: parseString(import.meta.env.VITE_SIDEBAR_WIDTH_ICON, "3rem"),
    keyboardShortcut: parseString(import.meta.env.VITE_SIDEBAR_KEYBOARD_SHORTCUT, "b"),
  },

  // Animation settings
  animation: {
    // Custom cursor spring physics
    cursorDamping: parseNumber(import.meta.env.VITE_CURSOR_DAMPING, 25),
    cursorStiffness: parseNumber(import.meta.env.VITE_CURSOR_STIFFNESS, 400),
    glowDamping: parseNumber(import.meta.env.VITE_GLOW_DAMPING, 50),
    glowStiffness: parseNumber(import.meta.env.VITE_GLOW_STIFFNESS, 200),

    // Scroll hash delay (milliseconds)
    scrollHashDelay: parseNumber(import.meta.env.VITE_SCROLL_HASH_DELAY, 100),
  },
};

// ============================================================================
// Development Server Configuration
// ============================================================================

export const devServerConfig = {
  host: parseString(import.meta.env.VITE_DEV_SERVER_HOST, "::"),
  port: parseNumber(import.meta.env.VITE_DEV_SERVER_PORT, 8080),
};

// ============================================================================
// Personal & Contact Information
// ============================================================================

export const personalInfo = {
  name: parseString(import.meta.env.VITE_PERSONAL_NAME, "Jai Palan"),
  email: parseString(import.meta.env.VITE_PERSONAL_EMAIL, "j2palan@uwaterloo.ca"),
  phone: parseString(import.meta.env.VITE_PERSONAL_PHONE, "416-986-3487"),
  
  // Social media
  social: {
    linkedin: parseString(import.meta.env.VITE_SOCIAL_LINKEDIN, "https://www.linkedin.com/in/jai-palan"),
    github: parseString(import.meta.env.VITE_SOCIAL_GITHUB, "https://github.com/j-palan"),
  },

  // University
  university: {
    name: parseString(import.meta.env.VITE_UNIVERSITY_NAME, "University of Waterloo"),
    url: parseString(import.meta.env.VITE_UNIVERSITY_URL, "https://uwaterloo.ca/"),
    logo: parseString(import.meta.env.VITE_UNIVERSITY_LOGO, "/wloologo.png"),
  },
};

// ============================================================================
// External Company URLs
// ============================================================================

export const companyUrls = {
  vitall: parseString(import.meta.env.VITE_COMPANY_VITALL_URL, "https://www.vitall.com/"),
  ltimindtree: parseString(import.meta.env.VITE_COMPANY_LTIMINDTREE_URL, "https://www.ltimindtree.com/"),
  industry40: parseString(import.meta.env.VITE_COMPANY_INDUSTRY40_URL, "https://www.uwindustry4.ca/"),
};

// ============================================================================
// Project URLs
// ============================================================================

export const projectUrls = {
  incidentManager: {
    demo: parseString(import.meta.env.VITE_PROJECT_INCIDENT_DEMO, "https://www.loom.com/share/3457d014a0d84388a72048c7a0eee908"),
    github: parseString(import.meta.env.VITE_PROJECT_INCIDENT_GITHUB, "https://github.com/j-palan/Rootly-Incident-Manager"),
  },
  runz: {
    demo: parseString(import.meta.env.VITE_PROJECT_RUNZ_DEMO, "https://drive.google.com/file/d/1sAkf7PRO2Ba7KHXL_TQkOKR11Z3xXUcF/view?usp=sharing"),
    github: parseString(import.meta.env.VITE_PROJECT_RUNZ_GITHUB, "https://github.com/j-palan/Runz"),
  },
};

// ============================================================================
// Export convenience object with all config
// ============================================================================

export const config = {
  ui: uiConfig,
  devServer: devServerConfig,
  personal: personalInfo,
  companies: companyUrls,
  projects: projectUrls,
};

export default config;
