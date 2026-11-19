import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage introduces the developer without promoting a project in the hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Kenneth Bitun" }).first()).toHaveAttribute("href", "#home");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Kenneth Bitun");
  const shellWidth = await page.locator(".hero .page-shell").evaluate((node) => node.getBoundingClientRect().width);
  expect(shellWidth).toBeLessThanOrEqual(1060);
  await expect(page.getByRole("link", { name: /Selected projects/ })).toHaveAttribute("href", "#work");
});

test("home shows a portrait slot and real project artwork below the identity intro", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator(".hero");
  await expect(hero.getByRole("heading", { level: 1 })).toHaveText("Kenneth Bitun");
  await expect(hero.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", "https://github.com/Kendot1");
  await expect(hero.getByRole("link", { name: /Selected projects/ })).toHaveAttribute("href", "#work");
  await expect(hero.getByRole("heading", { name: /Foodcast|Forecast/ })).toHaveCount(0);
  await expect(page.locator(".project-row")).toHaveCount(2);
  await expect(page.locator(".project-art-foodcast img")).toHaveAttribute("src", /foodcast-cover\.webp/);
  await expect(page.locator(".portrait-placeholder")).toBeVisible();
  await expect(page.getByRole("link", { name: "Live project" })).toHaveAttribute("href", "https://foodcastt.vercel.app/");
});

test("engineering console works as an optional project index by click and keyboard", async ({ page }) => {
  await page.goto("/");
  const console = page.locator("#explore");
  await console.getByRole("button", { name: "trace foodcast" }).click();
  await expect(console.getByText(/PyTorch LSTM and LightGBM/)).toBeVisible();
  await expect(console.getByRole("link", { name: "Read the Foodcast case study" })).toHaveAttribute("href", "/work/foodcast");
  const input = console.getByRole("textbox", { name: "Command" });
  await input.fill("trace barber");
  await input.press("Enter");
  await expect(console.getByText(/Hono Edge API verifies identity/)).toBeVisible();
  await input.fill("rm -rf");
  await input.press("Enter");
  await expect(console.getByText(/is not in this index/)).toBeVisible();
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

test("project category filters select one case study at a time", async ({ page }) => {
  await page.goto("/");
  const filters = page.getByRole("group", { name: "Filter projects by category" });
  const buttons = filters.getByRole("button");
  for (let i = 1; i < await buttons.count(); i++) {
    await buttons.nth(i).click();
    await expect(buttons.nth(i)).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".project-row")).toHaveCount(1);
  }
  await expect(buttons.first()).toHaveAttribute("aria-pressed", "false");
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

test("mobile navigation reaches each linked section", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  for (const label of ["Work", "Stack", "About", "Contact"]) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: label, exact: true }).click();
    await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  }
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#contact$/);
});

test("featured case-study routes and their return links resolve without page errors", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const slug of ["foodcast", "supremo-barber"]) {
    const response = await page.goto(`/work/${slug}`);
    expect(response.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to selected work" })).toHaveAttribute("href", "/#work");
  }
  expect(errors).toEqual([]);
  const response = await page.goto("/work/lucent");
  expect(response.status()).toBe(404);
});

test("keyboard users can skip navigation and reduced motion disables smooth scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
});

