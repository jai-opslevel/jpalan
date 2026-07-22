import { describe, it, expect, beforeEach, afterEach } from "vitest";

describe("Configuration Module", () => {
  let originalEnv: Record<string, string | undefined>;

  beforeEach(() => {
    // Save original environment
    originalEnv = { ...import.meta.env };
  });

  afterEach(() => {
    // Restore original environment
    Object.keys(import.meta.env).forEach((key) => {
      delete import.meta.env[key];
    });
    Object.assign(import.meta.env, originalEnv);
  });

  describe("UI Configuration", () => {
    it("should use default toast limit", async () => {
      const { uiConfig } = await import("./index");
      expect(uiConfig.toastLimit).toBe(1);
    });

    it("should use default toast remove delay", async () => {
      const { uiConfig } = await import("./index");
      expect(uiConfig.toastRemoveDelay).toBe(1000000);
    });

    it("should use default mobile breakpoint", async () => {
      const { uiConfig } = await import("./index");
      expect(uiConfig.mobileBreakpoint).toBe(768);
    });

    it("should use default sidebar configuration", async () => {
      const { uiConfig } = await import("./index");
      expect(uiConfig.sidebar.cookieName).toBe("sidebar:state");
      expect(uiConfig.sidebar.cookieMaxAge).toBe(60 * 60 * 24 * 7);
      expect(uiConfig.sidebar.width).toBe("16rem");
      expect(uiConfig.sidebar.widthMobile).toBe("18rem");
      expect(uiConfig.sidebar.widthIcon).toBe("3rem");
      expect(uiConfig.sidebar.keyboardShortcut).toBe("b");
    });

    it("should use default animation configuration", async () => {
      const { uiConfig } = await import("./index");
      expect(uiConfig.animation.cursorDamping).toBe(25);
      expect(uiConfig.animation.cursorStiffness).toBe(400);
      expect(uiConfig.animation.glowDamping).toBe(50);
      expect(uiConfig.animation.glowStiffness).toBe(200);
      expect(uiConfig.animation.scrollHashDelay).toBe(100);
    });
  });

  describe("Dev Server Configuration", () => {
    it("should use default dev server host", async () => {
      const { devServerConfig } = await import("./index");
      expect(devServerConfig.host).toBe("::");
    });

    it("should use default dev server port", async () => {
      const { devServerConfig } = await import("./index");
      expect(devServerConfig.port).toBe(8080);
    });
  });

  describe("Personal Information", () => {
    it("should use default personal name", async () => {
      const { personalInfo } = await import("./index");
      expect(personalInfo.name).toBe("Jai Palan");
    });

    it("should use default email", async () => {
      const { personalInfo } = await import("./index");
      expect(personalInfo.email).toBe("j2palan@uwaterloo.ca");
    });

    it("should use default phone", async () => {
      const { personalInfo } = await import("./index");
      expect(personalInfo.phone).toBe("416-986-3487");
    });

    it("should use default social media links", async () => {
      const { personalInfo } = await import("./index");
      expect(personalInfo.social.linkedin).toBe("https://www.linkedin.com/in/jai-palan");
      expect(personalInfo.social.github).toBe("https://github.com/j-palan");
    });

    it("should use default university information", async () => {
      const { personalInfo } = await import("./index");
      expect(personalInfo.university.name).toBe("University of Waterloo");
      expect(personalInfo.university.url).toBe("https://uwaterloo.ca/");
      expect(personalInfo.university.logo).toBe("/wloologo.png");
    });
  });

  describe("Company URLs", () => {
    it("should use default company URLs", async () => {
      const { companyUrls } = await import("./index");
      expect(companyUrls.vitall).toBe("https://www.vitall.com/");
      expect(companyUrls.ltimindtree).toBe("https://www.ltimindtree.com/");
      expect(companyUrls.industry40).toBe("https://www.uwindustry4.ca/");
    });
  });

  describe("Project URLs", () => {
    it("should use default project URLs", async () => {
      const { projectUrls } = await import("./index");
      expect(projectUrls.incidentManager.demo).toBe("https://www.loom.com/share/3457d014a0d84388a72048c7a0eee908");
      expect(projectUrls.incidentManager.github).toBe("https://github.com/j-palan/Rootly-Incident-Manager");
      expect(projectUrls.runz.demo).toBe("https://drive.google.com/file/d/1sAkf7PRO2Ba7KHXL_TQkOKR11Z3xXUcF/view?usp=sharing");
      expect(projectUrls.runz.github).toBe("https://github.com/j-palan/Runz");
    });
  });

  describe("Config Export", () => {
    it("should export a default config object with all sections", async () => {
      const { config } = await import("./index");
      expect(config).toBeDefined();
      expect(config.ui).toBeDefined();
      expect(config.devServer).toBeDefined();
      expect(config.personal).toBeDefined();
      expect(config.companies).toBeDefined();
      expect(config.projects).toBeDefined();
    });
  });
});
