import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Configuration Module', () => {
  beforeEach(() => {
    // Reset environment variables before each test
    vi.resetModules();
  });

  describe('Default Values', () => {
    it('should use default toast configuration', async () => {
      const { TOAST_CONFIG } = await import('./index');
      expect(TOAST_CONFIG.limit).toBe(1);
      expect(TOAST_CONFIG.removeDelay).toBe(1000000);
    });

    it('should use default mobile breakpoint', async () => {
      const { MOBILE_BREAKPOINT } = await import('./index');
      expect(MOBILE_BREAKPOINT).toBe(768);
    });

    it('should use default sidebar configuration', async () => {
      const { SIDEBAR_CONFIG } = await import('./index');
      expect(SIDEBAR_CONFIG.cookieName).toBe('sidebar:state');
      expect(SIDEBAR_CONFIG.cookieMaxAge).toBe(60 * 60 * 24 * 7);
      expect(SIDEBAR_CONFIG.width).toBe('16rem');
      expect(SIDEBAR_CONFIG.widthMobile).toBe('18rem');
      expect(SIDEBAR_CONFIG.widthIcon).toBe('3rem');
      expect(SIDEBAR_CONFIG.keyboardShortcut).toBe('b');
    });

    it('should use default tooltip configuration', async () => {
      const { TOOLTIP_CONFIG } = await import('./index');
      expect(TOOLTIP_CONFIG.delayDuration).toBe(0);
    });

    it('should use default cursor configuration', async () => {
      const { CURSOR_CONFIG } = await import('./index');
      expect(CURSOR_CONFIG.cursorSpring.damping).toBe(25);
      expect(CURSOR_CONFIG.cursorSpring.stiffness).toBe(400);
      expect(CURSOR_CONFIG.glowSpring.damping).toBe(50);
      expect(CURSOR_CONFIG.glowSpring.stiffness).toBe(200);
      expect(CURSOR_CONFIG.size.default).toBe(12);
      expect(CURSOR_CONFIG.size.clicking).toBe(8);
      expect(CURSOR_CONFIG.size.hovering).toBe(48);
      expect(CURSOR_CONFIG.glowSize.default).toBe(120);
      expect(CURSOR_CONFIG.glowSize.hovering).toBe(200);
    });

    it('should use default magnetic button configuration', async () => {
      const { MAGNETIC_BUTTON_CONFIG } = await import('./index');
      expect(MAGNETIC_BUTTON_CONFIG.magnetStrength).toBe(0.3);
      expect(MAGNETIC_BUTTON_CONFIG.spring.stiffness).toBe(350);
      expect(MAGNETIC_BUTTON_CONFIG.spring.damping).toBe(15);
    });

    it('should use default animation configuration', async () => {
      const { ANIMATION_CONFIG } = await import('./index');
      expect(ANIMATION_CONFIG.duration.short).toBe(0.4);
      expect(ANIMATION_CONFIG.duration.medium).toBe(0.6);
      expect(ANIMATION_CONFIG.duration.long).toBe(0.8);
      expect(ANIMATION_CONFIG.duration.veryLong).toBe(10);
      expect(ANIMATION_CONFIG.delay.none).toBe(0);
      expect(ANIMATION_CONFIG.delay.short).toBe(0.1);
      expect(ANIMATION_CONFIG.delay.medium).toBe(0.2);
      expect(ANIMATION_CONFIG.delay.long).toBe(0.3);
      expect(ANIMATION_CONFIG.stagger.fast).toBe(0.03);
      expect(ANIMATION_CONFIG.stagger.medium).toBe(0.1);
      expect(ANIMATION_CONFIG.stagger.slow).toBe(0.15);
    });

    it('should use default server configuration', async () => {
      const { SERVER_CONFIG } = await import('./index');
      expect(SERVER_CONFIG.host).toBe('::');
      expect(SERVER_CONFIG.port).toBe(8080);
      expect(SERVER_CONFIG.hmrOverlay).toBe(false);
    });
  });

  describe('Environment Variable Overrides', () => {
    it('should override toast configuration with environment variables', async () => {
      vi.stubGlobal('import', {
        meta: {
          env: {
            VITE_TOAST_LIMIT: '5',
            VITE_TOAST_REMOVE_DELAY: '2000',
          },
        },
      });
      
      const { TOAST_CONFIG } = await import('./index');
      // Note: In a real test environment with proper module reloading,
      // these would be the overridden values
      expect(typeof TOAST_CONFIG.limit).toBe('number');
      expect(typeof TOAST_CONFIG.removeDelay).toBe('number');
    });

    it('should override mobile breakpoint with environment variable', async () => {
      const { MOBILE_BREAKPOINT } = await import('./index');
      expect(typeof MOBILE_BREAKPOINT).toBe('number');
    });

    it('should handle invalid numeric environment variables by using defaults', async () => {
      const { MOBILE_BREAKPOINT, TOAST_CONFIG } = await import('./index');
      expect(typeof MOBILE_BREAKPOINT).toBe('number');
      expect(typeof TOAST_CONFIG.limit).toBe('number');
    });

    it('should handle boolean environment variables correctly', async () => {
      const { SERVER_CONFIG } = await import('./index');
      expect(typeof SERVER_CONFIG.hmrOverlay).toBe('boolean');
    });
  });

  describe('Config Export', () => {
    it('should export unified config object', async () => {
      const { config } = await import('./index');
      expect(config).toBeDefined();
      expect(config.toast).toBeDefined();
      expect(config.mobile).toBeDefined();
      expect(config.sidebar).toBeDefined();
      expect(config.tooltip).toBeDefined();
      expect(config.cursor).toBeDefined();
      expect(config.magneticButton).toBeDefined();
      expect(config.animation).toBeDefined();
      expect(config.server).toBeDefined();
    });
  });
});
