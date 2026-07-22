/**
 * Centralized configuration for the Lumina Portfolio application.
 * All values can be overridden via environment variables with the VITE_JPALAN_ prefix.
 * 
 * Environment variables follow the pattern: VITE_JPALAN_<CATEGORY>_<NAME>
 * Example: VITE_JPALAN_ANIMATION_DEFAULT_DURATION
 */

// Helper function to get environment variable value or default
const getEnvNumber = (key: string, defaultValue: number): number => {
  const value = import.meta.env[key];
  return value !== undefined ? Number(value) : defaultValue;
};

const getEnvString = (key: string, defaultValue: string): string => {
  return import.meta.env[key] || defaultValue;
};

// Animation Configuration
export const animationConfig = {
  // Default animation durations (in seconds)
  defaultDuration: getEnvNumber('VITE_JPALAN_ANIMATION_DEFAULT_DURATION', 0.6),
  shortDuration: getEnvNumber('VITE_JPALAN_ANIMATION_SHORT_DURATION', 0.25),
  mediumDuration: getEnvNumber('VITE_JPALAN_ANIMATION_MEDIUM_DURATION', 0.5),
  longDuration: getEnvNumber('VITE_JPALAN_ANIMATION_LONG_DURATION', 0.8),
  veryLongDuration: getEnvNumber('VITE_JPALAN_ANIMATION_VERY_LONG_DURATION', 10),
  extraLongDuration: getEnvNumber('VITE_JPALAN_ANIMATION_EXTRA_LONG_DURATION', 12),
  skillsDuration: getEnvNumber('VITE_JPALAN_ANIMATION_SKILLS_DURATION', 0.4),
  
  // Default animation delays (in seconds)
  shortDelay: getEnvNumber('VITE_JPALAN_ANIMATION_SHORT_DELAY', 0.1),
  defaultDelay: getEnvNumber('VITE_JPALAN_ANIMATION_DEFAULT_DELAY', 0.2),
  mediumDelay: getEnvNumber('VITE_JPALAN_ANIMATION_MEDIUM_DELAY', 0.3),
  longDelay: getEnvNumber('VITE_JPALAN_ANIMATION_LONG_DELAY', 0.5),
  extraLongDelay: getEnvNumber('VITE_JPALAN_ANIMATION_EXTRA_LONG_DELAY', 0.6),
  heroDelay1: getEnvNumber('VITE_JPALAN_ANIMATION_HERO_DELAY_1', 0.7),
  heroDelay2: getEnvNumber('VITE_JPALAN_ANIMATION_HERO_DELAY_2', 0.8),
  heroDelay3: getEnvNumber('VITE_JPALAN_ANIMATION_HERO_DELAY_3', 0.9),
  heroDelay4: getEnvNumber('VITE_JPALAN_ANIMATION_HERO_DELAY_4', 1.0),
  heroDelay5: getEnvNumber('VITE_JPALAN_ANIMATION_HERO_DELAY_5', 1.2),
  projectsDelay: getEnvNumber('VITE_JPALAN_ANIMATION_PROJECTS_DELAY', 0.15),
  
  // Spring animation configs
  spring: {
    cursorDamping: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_CURSOR_DAMPING', 25),
    cursorStiffness: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_CURSOR_STIFFNESS', 400),
    glowDamping: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_GLOW_DAMPING', 50),
    glowStiffness: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_GLOW_STIFFNESS', 200),
    transitionDamping: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_TRANSITION_DAMPING', 20),
    transitionStiffness: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_TRANSITION_STIFFNESS', 300),
    magneticDamping: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_MAGNETIC_DAMPING', 15),
    magneticStiffness: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_MAGNETIC_STIFFNESS', 350),
    glowEffectDamping: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_GLOW_EFFECT_DAMPING', 30),
    glowEffectStiffness: getEnvNumber('VITE_JPALAN_ANIMATION_SPRING_GLOW_EFFECT_STIFFNESS', 150),
  },
} as const;

// UI Configuration
export const uiConfig = {
  // Custom cursor dimensions
  cursor: {
    defaultSize: getEnvNumber('VITE_JPALAN_UI_CURSOR_DEFAULT_SIZE', 12),
    hoverSize: getEnvNumber('VITE_JPALAN_UI_CURSOR_HOVER_SIZE', 48),
    clickSize: getEnvNumber('VITE_JPALAN_UI_CURSOR_CLICK_SIZE', 8),
    glowDefaultSize: getEnvNumber('VITE_JPALAN_UI_CURSOR_GLOW_DEFAULT_SIZE', 120),
    glowHoverSize: getEnvNumber('VITE_JPALAN_UI_CURSOR_GLOW_HOVER_SIZE', 200),
    defaultOpacity: getEnvNumber('VITE_JPALAN_UI_CURSOR_DEFAULT_OPACITY', 1),
    hoverOpacity: getEnvNumber('VITE_JPALAN_UI_CURSOR_HOVER_OPACITY', 0.8),
    glowDefaultOpacity: getEnvNumber('VITE_JPALAN_UI_CURSOR_GLOW_DEFAULT_OPACITY', 0.4),
    glowHoverOpacity: getEnvNumber('VITE_JPALAN_UI_CURSOR_GLOW_HOVER_OPACITY', 0.8),
  },
  
  // Viewport intersection settings
  viewport: {
    margin: getEnvString('VITE_JPALAN_UI_VIEWPORT_MARGIN', '-100px'),
  },
  
  // Magnetic button configuration
  magneticButton: {
    magneticStrength: getEnvNumber('VITE_JPALAN_UI_MAGNETIC_STRENGTH', 0.3),
  },
} as const;

// Toast Configuration
export const toastConfig = {
  limit: getEnvNumber('VITE_JPALAN_TOAST_LIMIT', 1),
  removeDelay: getEnvNumber('VITE_JPALAN_TOAST_REMOVE_DELAY', 1000000),
} as const;

// External Links Configuration
export const linksConfig = {
  // Social links
  social: {
    email: getEnvString('VITE_JPALAN_SOCIAL_EMAIL', 'j2palan@uwaterloo.ca'),
    linkedin: getEnvString('VITE_JPALAN_SOCIAL_LINKEDIN', 'https://www.linkedin.com/in/jai-palan'),
    github: getEnvString('VITE_JPALAN_SOCIAL_GITHUB', 'https://github.com/j-palan'),
    phone: getEnvString('VITE_JPALAN_SOCIAL_PHONE', '416-986-3487'),
  },
  
  // Company URLs
  companies: {
    vitall: getEnvString('VITE_JPALAN_COMPANY_VITALL_URL', 'https://www.vitall.com/'),
    ltimindtree: getEnvString('VITE_JPALAN_COMPANY_LTIMINDTREE_URL', 'https://www.ltimindtree.com/'),
    industry40: getEnvString('VITE_JPALAN_COMPANY_INDUSTRY40_URL', 'https://www.uwindustry4.ca/'),
    uwaterloo: getEnvString('VITE_JPALAN_COMPANY_UWATERLOO_URL', 'https://uwaterloo.ca/'),
  },
  
  // Project URLs
  projects: {
    incidentManagerDemo: getEnvString('VITE_JPALAN_PROJECT_INCIDENT_MANAGER_DEMO', 'https://www.loom.com/share/3457d014a0d84388a72048c7a0eee908'),
    incidentManagerGithub: getEnvString('VITE_JPALAN_PROJECT_INCIDENT_MANAGER_GITHUB', 'https://github.com/j-palan/Rootly-Incident-Manager'),
    runzDemo: getEnvString('VITE_JPALAN_PROJECT_RUNZ_DEMO', 'https://drive.google.com/file/d/1sAkf7PRO2Ba7KHXL_TQkOKR11Z3xXUcF/view?usp=sharing'),
    runzGithub: getEnvString('VITE_JPALAN_PROJECT_RUNZ_GITHUB', 'https://github.com/j-palan/Runz'),
  },
} as const;

// Server Configuration (for vite.config.ts)
export const serverConfig = {
  host: getEnvString('VITE_JPALAN_SERVER_HOST', '::'),
  port: getEnvNumber('VITE_JPALAN_SERVER_PORT', 8080),
} as const;

// Export all configs as a single object for convenience
export const config = {
  animation: animationConfig,
  ui: uiConfig,
  toast: toastConfig,
  links: linksConfig,
  server: serverConfig,
} as const;

export default config;
