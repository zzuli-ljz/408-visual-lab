const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('file:///C:/Users/75098/WorkBuddy/2026-11-02-14-14-32/repo/data-structure/sorting-algorithms.html');
  await page.click('#btnStart');
  for (let i = 0; i < 25; i++) await page.click('#btnNext');
  await page.screenshot({ path: '_shot1.png' });
  // 切换到基数排序再走几步，验证桶面板
  await page.click('.algo-btn[data-algo="radix"]');
  await page.click('#btnStart');
  for (let i = 0; i < 14; i++) await page.click('#btnNext');
  await page.screenshot({ path: '_shot2.png' });
  // 英文切换
  await page.click('#langEn');
  await page.screenshot({ path: '_shot3.png' });
  console.log('JS errors:', errors.length ? errors : 'none');
  await browser.close();
})();
