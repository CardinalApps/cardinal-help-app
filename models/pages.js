/**
 * @file - models/pages.js
 *
 * Reads the Next.js page structure on the disk and returns an array of pages
 * ordered by their level in the menu then their page priority.
 *
 * Use `npm run models/pages` to run and cache this model dev-side before
 * pushing to staging and prod.
 */
const fs = require('fs')
const path = require('path')
const glob = require('glob')

/**
 * Get all public pages.
 *
 * @returns {Array} - Returns a single dimensional array of pages. Pages are
 * sorted by level, then by priority. If no priority is set in the page's
 * config, the sort order is undefined.
 */
exports.getPages = async () => {
  // Only get the pages that are meant to be part of the Help app.
  // The order here will be the order shown in the frontend.
  let sections = await Promise.all([
    doGlob(`pages/index.js`), // special case for the home page
    doGlob(`pages/cardinal-server/**/*.js`),
    doGlob(`pages/cardinal-music/**/*.js`),
    doGlob(`pages/general/**/*.js`),
    doGlob(`pages/privacy/**/*.js`),
    doGlob(`pages/developer/**/*.js`),
  ])

  // Convert all pages in all section to PageObject instances
  for (let i in sections) {
    sections[i] = await Promise.all(sections[i].map(page => this.PageObject(page)))
  }

  // Sort each section by priority
  for (let i in sections) {
    sections[i] = sections[i].sort((a, b) => a.config.priority > b.config.priority ? 1 : -1)
  }

  // Merge all glob arrays
  const pages = [].concat(...sections)

  return pages
}

/**
 * Returns a new PageObject for a single page.
 *
 * @param {string} pageFile - The path to the file in the `/pages` dir, as
 * returned by the glob. Paths are relative to the project root.
 */
exports.PageObject = async (pageFile) => {
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
  // just a leading slash
  path = path.replace('pages/', '/')

  // Remove the .js from files
  path = path.replace('.js', '')

  // Remove `/index` from routes. Next.js handles the routing for them, and we
  // don't actually want the `/index` part to show in the URL
  path = path.replace('/index', '')

  // Handle the case where trimming the string gave us an empty string, this is
  // actually the home page.
  if (path === '') {
    path = '/'
  }
  
  return path
}