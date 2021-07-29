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
    doGlob('pages/cardinal-server/**/*'),
    doGlob('pages/cardinal-music/**/*'),
    doGlob('pages/general/**/*'),
    doGlob('pages/privacy/**/*'),
    doGlob('pages/developer/**/*'),
  ])

  pages = [].concat(...pages)
  pages = pagesToRoutes(pages)
  pages = pages.map(page => PageObject(page))

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
 * Filters each path by removing file extensions and anything else that doesn't
 * belong in the route.
 * 
 * @param {pages} - An array of Next.js page paths.
 * @returns {Array}
 */
function pagesToRoutes(pages) {
  return pages.map((path) => {
    // Remove /pages prefix that comes with the Next.js structure
    path = path.replace('pages/', '')

    // Remove the .js from files
    path = path.replace('.js', '')
    
    return path
  })
}

/**
 * Returns a new PageObject instance based on a route.
 * 
 * @param {string} route
 */
export function PageObject(route) {
  return Object.freeze({
    route: route,
    parts: route.split('/')
  })
}