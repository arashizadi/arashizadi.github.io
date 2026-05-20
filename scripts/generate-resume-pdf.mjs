import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const sourcePath = path.resolve("resume-print.html");
const pdfPath = path.resolve("Arash_Izadi_Resume.pdf");

await page.goto(pathToFileURL(sourcePath).href, { waitUntil: "load" });
await page.pdf({
  path: pdfPath,
  format: "Letter",
  displayHeaderFooter: false,
  printBackground: true,
  preferCSSPageSize: true
});

await browser.close();
