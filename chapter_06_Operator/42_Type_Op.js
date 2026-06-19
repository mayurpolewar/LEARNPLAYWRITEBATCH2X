const { chromium } = require('playwright'); // You can also use 'firefox' or 'webkit'

(async () => {
  // 1. Launch the browser window (headed mode makes it visible)
  const browser = await chromium.launch({ headless: false });

  // 2. Open a new isolated browser context (like an incognito window)
  const context = await browser.newContext();

  // 3. Open a new page/tab inside that context
  const page = await context.newPage();

  // 4. Navigate to a URL
  await page.goto('https://example.com');

  // Keep browser open for 5 seconds before closing
  await page.waitForTimeout(5000);

  // 5. Clean up and close connections
  await browser.close();
})();