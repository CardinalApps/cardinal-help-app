import fs from 'fs'
import path from 'path'
import glob from 'glob'

const PATH_PREFIX = process.env.NODE_ENV === 'production' ? '' : 'pages/'

/**
 * Page structure for the app.
 *
 * @returns {Array} - Returns a single dimensional array of pages. Pages are
 * sorted by section, then by priority. If no priority is set in the page's
 * config, the sort order is undefined.
 */
export async function getPages() {
  console.log('Reading pages on disk')

  // Only get the pages that are meant to be part of the Help app.
  // The order here will be the order shown in the frontend.
  let sections = await Promise.all([
    doGlob(`${PATH_PREFIX}/cardinal-server/**/*.js`),
    doGlob(`${PATH_PREFIX}/cardinal-music/**/*.js`),
    doGlob(`${PATH_PREFIX}/general/**/*.js`),
    doGlob(`${PATH_PREFIX}/privacy/**/*.js`),
    doGlob(`${PATH_PREFIX}/developer/**/*.js`),
  ])

  // Convert all pages in all section to PageObject instances
  for (let i in sections) {
    sections[i] = await Promise.all(sections[i].map(page => PageObject(page)))
  }

  // sections = sections.map((sectionPages) => {
  //   // Remove all the dinctinct directory paths, they are the same as the
  //   // `/index.js` path for that dir.
  //   return sectionPages.filter(page => page.includes('.js'))
  // })

  // Sort each section by priority
  for (let i in sections) {
    sections[i] = sections[i].sort((a, b) => a.config.priority > b.config.priority ? 1 : -1)
  }

  console.log(sections)
  



  // Merge all glob arrays
  const pages = [].concat(...sections)

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