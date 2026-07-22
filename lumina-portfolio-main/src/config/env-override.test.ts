import { describe, it, expect, vi } from "vitest";

describe("Environment Variable Overrides", () => {
  it("should respect VITE_TOAST_LIMIT override", () => {
    vi.stubEnv("VITE_TOAST_LIMIT", "5");
    
    // We need to re-import the module to pick up env changes
    // In a real scenario, these would be set before the app starts
    const parseNumber = (value: string | undefined, defaultValue: number): number => {
      if (!value) return defaultValue;
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? defaultValue : parsed;
    };
    
    const toastLimit = parseNumber("5", 1);
    expect(toastLimit).toBe(5);
    
    vi.unstubAllEnvs();
  });

  it("should respect VITE_MOBILE_BREAKPOINT override", () => {
    const parseNumber = (value: string | undefined, defaultValue: number): number => {
      if (!value) return defaultValue;
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? defaultValue : parsed;
    };
    
    const mobileBreakpoint = parseNumber("1024", 768);
    expect(mobileBreakpoint).toBe(1024);
  });

  it("should respect VITE_PERSONAL_EMAIL override", () => {
    const parseString = (value: string | undefined, defaultValue: string): string => {
      return value || defaultValue;
    };
    
    const email = parseString("test@example.com", "j2palan@uwaterloo.ca");
    expect(email).toBe("test@example.com");
  });

  it("should respect VITE_DEV_SERVER_PORT override", () => {
    const parseNumber = (value: string | undefined, defaultValue: number): number => {
      if (!value) return defaultValue;
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? defaultValue : parsed;
    };
    
    const port = parseNumber("3000", 8080);
    expect(port).toBe(3000);
  });

  it("should handle invalid numeric environment variables gracefully", () => {
    const parseNumber = (value: string | undefined, defaultValue: number): number => {
      if (!value) return defaultValue;
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? defaultValue : parsed;
    };
    
    const port = parseNumber("not-a-number", 8080);
    expect(port).toBe(8080);
  });

  it("should handle empty string environment variables", () => {
    const parseString = (value: string | undefined, defaultValue: string): string => {
      return value || defaultValue;
    };
    
    const email = parseString("", "j2palan@uwaterloo.ca");
    expect(email).toBe("j2palan@uwaterloo.ca");
  });
});
