import { chromium } from "@playwright/test";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.screenshot({ path: process.argv[2], fullPage: true });
console.log(JSON.stringify({ title: await page.title(), headings: await page.locator("h1,h2").allTextContents(), width: await page.locator(".page-shell").first().evaluate((el) => el.getBoundingClientRect().width) }));
await browser.close();
