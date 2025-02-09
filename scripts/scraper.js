import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const LINKEDIN_LOGIN = 'https://www.linkedin.com/login';
const LINKEDIN_RECOMMENDATIONS = 'https://www.linkedin.com/in/jhonrivero/details/recommendations/';
const COOKIES_PATH = 'cookies.json';

(async () => {
    try {
        console.log('Iniciando Puppeteer...');
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled']
        });

        const page = await browser.newPage();
        const context = browser.defaultBrowserContext();
        await page.setViewport({ width: 1280, height: 800 });

        if (fs.existsSync(COOKIES_PATH)) {
            const cookies = JSON.parse(fs.readFileSync(COOKIES_PATH));
            await context.setCookie(...cookies);
        }

        console.log('Iniciando sesión en LinkedIn...');
        await page.goto(LINKEDIN_LOGIN, { waitUntil: 'domcontentloaded' });

        if (page.url().includes('login')) {
            await page.type('#username', 'pruebalinkedin363@gmail.com', { delay: 100 });
            await page.type('#password', 'A123456*abc#', { delay: 100 });
            await page.click('[type="submit"]');

            try {
                await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 });
            } catch {
                console.warn('No hubo redirección después del login, verificando manualmente...');
            }

            if (page.url().includes('/checkpoint') || page.url().includes('/login-submit')) {
                throw new Error('LinkedIn detectó la sesión como inválida.');
            }

            fs.writeFileSync(COOKIES_PATH, JSON.stringify(await context.cookies()));
        }

        if (!page.url().includes('/in/jhonrivero')) {
            await page.goto(LINKEDIN_RECOMMENDATIONS, { waitUntil: 'domcontentloaded' });
        }

        console.log('Seleccionando pestaña de recomendaciones recibidas...');
        await page.waitForSelector('button[role="tab"]', { timeout: 10000 });

        await page.evaluate(() => {
            const receivedTab = Array.from(document.querySelectorAll('button[role="tab"]'))
                .find(tab => tab.innerText.includes('Recibidas'));
            if (receivedTab) receivedTab.click();
        });

        await page.waitForSelector('.pvs-list__paged-list-item', { timeout: 10000 });

        console.log('Extrayendo datos...');
        const recommendations = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.pvs-list__paged-list-item')).map(rec => ({
                author: rec.querySelector('.t-bold')?.innerText.split('\n')[0].trim() || 'Desconocido',
                position: rec.querySelector('.t-14.t-normal.t-black span')?.innerText.trim() || 'Sin cargo',
                date: rec.querySelector('.t-14.t-normal.t-black:not(:first-child)')?.innerText.trim() || 'Fecha no disponible',
                text: rec.querySelector('.t-14.t-normal.t-black span')?.innerText.trim() || 'Sin contenido'
            }));
        });

        console.log(`Recomendaciones recibidas obtenidas: ${recommendations.length}`);
        fs.writeFileSync(path.join('public', 'recommendations.json'), JSON.stringify(recommendations, null, 2));

        console.log('Datos guardados en public/recommendations.json');
        await browser.close();
    } catch (error) {
        console.error('Error en el script:', error);
    }
})();
