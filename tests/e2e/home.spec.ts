import { expect, test } from "@playwright/test";

test("renders the portfolio and switches language", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.clear();
  });
  await page.goto("/");

  await expect(page.locator("h1").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /daniel martinez/i }).first()).toBeVisible();

  const languageToggle = page.getByRole("button", { name: /toggle language/i });
  await expect(languageToggle).toContainText("EN");
  await languageToggle.click();
  await expect(languageToggle).toContainText("ES");

  await page.getByRole("link", { name: /ver proyectos/i }).click();
  await expect(page).toHaveURL(/\/portfolio$/);
  await expect(page.getByRole("heading", { name: /proyectos con interfaz real/i })).toBeVisible();
  await expect(page.getByText("TTC - Time & Task Control")).toBeVisible();
});
