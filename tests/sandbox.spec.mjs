import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Foodcast lab computes shifted features without reading the target observation", async ({ page }) => {
  await page.goto("/");
  const lab = page.getByRole("region", { name: "Foodcast feature lab" });
  await expect(lab).toBeVisible();
  await expect(lab.getByText(/not a trained model or a forecast/)).toBeVisible();
  await expect(lab.getByLabel("Previous observation result")).toHaveText("106.00");
  await expect(lab.getByLabel("Shifted rolling mean result")).toHaveText("102.67");
  await lab.getByRole("spinbutton", { name: "Target observation" }).fill("999");
  await expect(lab.getByLabel("Shifted rolling mean result")).toHaveText("102.67");
  await expect(lab.getByLabel("Previous observation result")).toHaveText("106.00");
  await lab.getByLabel("Target day", { exact: true }).selectOption("5");
  await expect(lab.getByLabel("Previous observation result")).toHaveText("999.00");
});

test("lab handles partial history, invalid input, reset and keyboard day selection", async ({ page }) => {
  await page.goto("/");
  const lab = page.getByRole("region", { name: "Foodcast feature lab" });
  await lab.getByLabel("Target day", { exact: true }).selectOption("0");
  await expect(lab.getByLabel("Shifted rolling mean result")).toHaveText("Unavailable");
  await lab.getByLabel("Target day", { exact: true }).focus();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(lab.getByLabel("Shifted rolling mean result")).toHaveText("100.00");
  await lab.getByRole("spinbutton", { name: "Target observation" }).fill("-1");
  await expect(lab.getByRole("spinbutton")).toHaveAttribute("aria-invalid", "true");
  await lab.getByRole("button", { name: "Reset sample" }).click();
  await expect(lab.getByRole("spinbutton")).toHaveValue("104");
  await expect(lab.getByLabel("Shifted rolling mean result")).toHaveText("102.67");
  await lab.getByLabel("Rolling window", { exact: true }).selectOption("2");
  await expect(lab.getByLabel("Shifted rolling mean result")).toHaveText("103.00");
});

test("console documents and resolves local commands by keyboard and click", async ({ page }) => {
  await page.goto("/");
  const console = page.locator("#explore");
  await expect(console.getByText(/Local deterministic guide/)).toBeVisible();
  const input = console.getByRole("textbox", { name: "Command", exact: true });
  for (const command of ["help", "projects", "stack", "about", "contact", "demo foodcast"]) {
    await console.getByRole("button", { name: command, exact: true }).click();
    await expect(input).toHaveValue(command);
    await expect(console.locator(".console-output")).not.toContainText("is not in this index");
  }
  await input.fill("   STACK  ");
  await input.press("Enter");
  await expect(console.locator(".console-output")).toContainText("PyTorch");
  await input.fill("rm -rf");
  await input.press("Enter");
  await expect(console.locator(".console-output")).toContainText("is not in this index");
  await expect(console.getByRole("status")).toHaveText("Ready");
});

test("lab remains accessible on a reduced-motion phone viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("region", { name: "Foodcast feature lab" }).scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const results = await new AxeBuilder({ page }).include("#explore").withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});
