import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage has an identity-led introduction in a compact editorial column", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Kenneth Bitun");
  const shellWidth = await page.locator(".hero .page-shell").evaluate((node) => node.getBoundingClientRect().width);
  expect(shellWidth).toBeLessThanOrEqual(820);
  await expect(page.getByRole("link", { name: /Explore my work/ })).toHaveAttribute("href", "#work");
});

test("portfolio sections use concise numbered headings and project-specific illustrations", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 2, name: "01 — Selected work" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "02 — Expertise" })).toBeAttached();
  await expect(page.getByRole("heading", { level: 2, name: "03 — About" })).toBeAttached();
  await expect(page.getByRole("heading", { level: 2, name: "05 — Contact" })).toBeAttached();
  const drawings = await page.locator(".project-art svg").evaluateAll((nodes) => nodes.map((node) => node.innerHTML));
  expect(new Set(drawings).size).toBe(4);
});

test("mobile navigation restores focus on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Work", exact: true }).focus();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
});

test("case studies show the matching project illustration", async ({ page }) => {
  await page.goto("/work/foodcast");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Foodcast");
  await expect(page.locator(".case-artwork .project-art")).toBeVisible();
  await page.getByRole("link", { name: "Back to selected work" }).click();
  await expect(page).toHaveURL(/\/#work$/);
});

test("verified case studies expose architecture and implementation evidence", async ({ page }) => {
  await page.goto("/work/foodcast");
  await expect(page.getByRole("heading", { name: "Architecture", exact: true })).toBeVisible();
  await expect(page.locator(".case-tags")).toContainText("PyTorch");
  await expect(page.getByRole("list", { name: "System data flow" })).toBeVisible();
  await page.goto("/work/supremo-barber");
  await expect(page.getByRole("heading", { name: "Engineering decisions", exact: true })).toBeVisible();
  await expect(page.locator(".case-tags")).toContainText("Hono");
});

test("project filtering keeps every category and resets to all four projects", async ({ page }) => {
  await page.goto("/");
  const filters = page.getByRole("group", { name: "Filter projects by category" });
  const buttons = filters.getByRole("button");
  for (let i = 1; i < await buttons.count(); i++) {
    await buttons.nth(i).click();
    await expect(buttons.nth(i)).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".project-card")).toHaveCount(1);
  }
  await buttons.first().click();
  await expect(page.locator(".project-card")).toHaveCount(4);
});

for (const width of [320, 390, 768, 1440]) {
  test(`layout has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/work/foodcast");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test("theme persists across reloads and remains accessible in both palettes", async ({ page }) => {
  await page.goto("/");
  let results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("mobile navigation reaches each section and the last section becomes active", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  for (const label of ["Home", "Work", "Expertise", "About", "Process", "Contact"]) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: label, exact: true }).click();
    await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  }
  await expect(page.locator('.primary-nav a[href="#contact"]')).toHaveAttribute("aria-current", "location");
});

test("all four case-study routes and their return links resolve without page errors", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const slug of ["foodcast", "supremo-barber", "daddy-bons-kitchen", "lucent"]) {
    const response = await page.goto(`/work/${slug}`);
    expect(response.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to selected work" })).toHaveAttribute("href", "/#work");
  }
  expect(errors).toEqual([]);
  const response = await page.goto("/work/not-a-project");
  expect(response.status()).toBe(404);
});

test("keyboard users can skip navigation and reduced motion disables smooth scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
});

