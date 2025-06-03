import https from 'https'
import fs from 'fs'

export function downloadImage (url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath)
    https.get(url, response => {
      if (response.statusCode === 200) {
        response.pipe(file)
        file.on('finish', () => file.close(resolve))
      } else {
        file.close()
        fs.unlink(filepath, () => {})
        reject(new Error(`Error al descargar imagen: ${response.statusCode}`))
      }
    }).on('error', err => {
      fs.unlink(filepath, () => {})
      reject(new Error(err.message))
    })
  })
}
