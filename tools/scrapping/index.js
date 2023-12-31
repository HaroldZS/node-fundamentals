const puppeteer = require("puppeteer");

(async () => {
  console.log("Open browser!");
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  var title1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.textContent);

    return h1.textContent;
  });

  console.log(title1);

  console.log("Closing browser...");
  //   browser.close();
  console.log("Browser closed");
})();
