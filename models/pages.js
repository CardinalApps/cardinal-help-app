import fs from 'fs'
import path from 'path'
import glob from 'glob'

/**
 * Page structure for the app.
 * 
 * @returns {Array}
 */
export async function getPages() {
  console.log('Reading pages on disk')

  // Only get the pages that are meant to be part of the Help app.
  // The order here will be the order shown in the frontend.
  let pages = await Promise.all([
    doGlob('pages/cardinal-server/**/*.js'),
    doGlob('pages/cardinal-music/**/*.js'),
    doGlob('pages/general/**/*.js'),
    doGlob('pages/privacy/**/*.js'),
    doGlob('pages/developer/**/*.js'),
  ])

  // Merge all glob arrays
  pages = [].concat(...pages)

  // Remove all the directory paths, they are the same as the `/index.js` path
  // for that dir.
  pages = pages.filter(page => page.includes('.js'))

  // Convert each route to a PageObject, which is what the frontend is expecting
  pages = await Promise.all(pages.map(page => PageObject(page) ))

  console.log('Built these routes from the pages on disk', pages)

  return pages
}

/**
 * Looks for files on the disk using glob patterns.
 * 
 * @returns {Promise}
 */
function doGlob(pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, (error, files) => {
      if (error) {
        console.error(error)
        return reject('Glob error')
      }

      return resolve(files)
    })
  })
}

/**
 * Converts a Next.js file path to a valid route that can be used in the
 * browser.
 *
 * @param {pages} - An array of Next.js page paths.
 * @returns {Array} - Returns a single dimensional array of all routes at all
 * depth levels. All routes begin with a leading slash and contain no file
 * extension.
 */
function pagePathToRoute(path) {
  // Replace the `/pages` prefix that comes with the Next.js structure with
  // simply a leading slash
  path = path.replace('pages/', '/')

  // Remove the .js from files
  path = path.replace('.js', '')

  // Remove `/index` from routes. Next.js handles the routing for them, and we
  // don't actually want the `/index` part to show in the URL
  path = path.replace('/index', '')
  
  return path
}

/**
 * Returns a new PageObject instance based on a route.
 *
 * @param {string} pageFile - The path to the file in the `/pages` dir, as
 * returned by the glob. Paths are relative to the project root.
 */
export async function PageObject(pageFile) {
  const route = pagePathToRoute(pageFile)
  const parts = route.split(path.sep).filter(part => !!part.length)
  const level = parts.length
  const titleI18nKey = `page.${parts.join('.')}.title`
  const configFile = getPageConfigFilePath()
  const config = getPageConfig()

  function getPageConfigFilePath() {
    // The root route of a directory will be handled by `index.js`
    if (pageFile.includes('index.js')) {
      return pageFile.replace('index.js', `index.config.json`)
    }
    // Non-root routes have unique file names
    else {
      return `${path.join('pages', ...parts)}.config.json`
    }
  }

  function getPageConfig() {
    if (!fs.existsSync(configFile)) return null
    return JSON.parse(fs.readFileSync(configFile, 'utf-8'))
  }
  
  return Object.freeze({
    route,
    pageFile,
    level,
    parts,
    titleI18nKey,
    config,
    configFile,
  })
}