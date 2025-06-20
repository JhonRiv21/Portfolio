import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { downloadImage } from './downloadImages.js'

const LINKEDIN_LOGIN = 'https://www.linkedin.com/login'
const LINKEDIN_RECOMMENDATIONS = 'https://www.linkedin.com/in/jhonrivero/details/recommendations/'
const COOKIES_PATH = 'cookies.json'
const IMAGES_DIR = path.join('public', 'photos')

if (fs.existsSync(IMAGES_DIR)) {
  fs.readdirSync(IMAGES_DIR).forEach(file => {
    const filePath = path.join(IMAGES_DIR, file)
    if (fs.lstatSync(filePath).isFile()) {
      fs.unlinkSync(filePath)
    }
  })
} else {
  fs.mkdirSync(IMAGES_DIR, { recursive: true })
}

;(async () => {
  try {
    console.log('Iniciando Puppeteer...')
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled']
    })

    const page = await browser.newPage()
    const context = browser.defaultBrowserContext()
    await page.setViewport({ width: 1280, height: 800 })

    if (fs.existsSync(COOKIES_PATH)) {
      const cookies = JSON.parse(fs.readFileSync(COOKIES_PATH))
      await context.setCookie(...cookies)
    }

    console.log('Iniciando sesión en LinkedIn...')
    await page.goto(LINKEDIN_LOGIN, { waitUntil: 'domcontentloaded' })

    if (page.url().includes('login')) {
      await page.type('#username', 'pruebalinkedin363@gmail.com', { delay: 100 })
      await page.type('#password', 'A123456*abc#', { delay: 100 })
      await page.click('[type="submit"]')

      try {
        await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 })
      } catch {
        console.warn('No hubo redirección después del login, verificando manualmente...')
      }

      if (page.url().includes('/checkpoint') || page.url().includes('/login-submit')) {
        throw new Error('LinkedIn detectó la sesión como inválida.')
      }

      fs.writeFileSync(COOKIES_PATH, JSON.stringify(await context.cookies()))
    }

    if (!page.url().includes('/in/jhonrivero')) {
      await page.goto(LINKEDIN_RECOMMENDATIONS, { waitUntil: 'domcontentloaded' })
    }

    console.log('Seleccionando pestaña de recomendaciones recibidas...')
    await page.waitForSelector('button[role="tab"]', { timeout: 10000 })

    await page.evaluate(() => {
      const receivedTab = Array.from(document.querySelectorAll('button[role="tab"]'))
        .find(tab => tab.innerText.includes('Recibidas'))
      if (receivedTab) receivedTab.click()
    })

    await new Promise(resolve => setTimeout(resolve, 6000))

    console.log('Extrayendo datos...')

    const recommendations = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.pvs-list__paged-list-item')).map(rec => {
        const photo = rec.querySelector('.ivm-view-attr__img--centered')?.getAttribute('src') || ''
        const author = rec.querySelector('.t-bold')?.innerText.split('\n')[0].trim() || 'Desconocido'

        const positionElement = rec.querySelector('.t-14.t-normal span[aria-hidden="true"]')
        const position = positionElement ? positionElement.innerText.trim() : 'Sin cargo'

        const textElement = rec.querySelector('.t-14.t-normal.t-black span:not([aria-hidden])')
        const text = textElement ? textElement.innerText.trim() : 'Sin contenido'

        const dateElement = Array.from(rec.querySelectorAll('.t-14.t-normal.t-black--light'))
          .find(el => el.innerText.includes('supervisaba directamente') || el.innerText.includes('trabajó con'))

        const date = dateElement ? dateElement.innerText.split(',')[0].replace('El ', '').trim() : 'Fecha no disponible'

        return { photo, author, position, date, text }
      })
    })

    if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true })

    for (const rec of recommendations) {
      if (rec.photo && rec.photo.startsWith('http')) {
        const fileName = rec.author.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg'
        const filePath = path.join(IMAGES_DIR, fileName)

        try {
          await downloadImage(rec.photo, filePath)
          console.log(`Imagen descargada para ${rec.author}`)
          rec.photo = `/photos/${fileName}`
        } catch (err) {
          console.error(`No se pudo descargar imagen para ${rec.author}: ${err.message}`)
        }
      } else {
        rec.photo = '/photos/default.jpg'
      }
    }

    fs.writeFileSync(path.join('public', 'recommendations.json'), JSON.stringify(recommendations, null, 2))

    console.log('Datos guardados en public/recommendations.json')
    await browser.close()
  } catch (error) {
    console.error('Error en el script:', error)
  }
})()
