import { portfolioContent } from "./portfolio-content";

describe("portfolioContent", () => {
  it("keeps English and Spanish project counts aligned", () => {
    expect(portfolioContent.en.projects).toHaveLength(portfolioContent.es.projects.length);
  });

  it("includes the AI automation positioning in both languages", () => {
    expect(portfolioContent.en.aiSystems.items.join(" ")).toContain("MCP");
    expect(portfolioContent.es.aiSystems.items.join(" ")).toContain("MCP");
  });

  it("keeps English as an international default", () => {
    expect(portfolioContent.en.hero.eyebrow).toContain("English-first");
  });
});
