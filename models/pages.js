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

  // Merge all glob arrays
  pages = [].concat(...pages)
  
  // Convert all file paths to routes
  pages = nextjsFilePathsToRoutes(pages)

  // Convert each route to a PageObject, which is what the frontend is expecting
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
 * Converts a Next.js file path to a valid route that can be used in the
 * browser.
 *
 * @param {pages} - An array of Next.js page paths.
 * @returns {Array} - Returns a single dimensional array of all routes at all
 * depth levels. All routes begin with a leading slash and contain no file
 * extension.
 */
function nextjsFilePathsToRoutes(pages) {
  pages = pages.map((path) => {
    // Replace the `/pages` prefix that comes with the Next.js structure with
    // simply a leading slash
    path = path.replace('pages/', '/')

    // Remove the .js from files
    path = path.replace('.js', '')

    // Remove `/index` from routes. Next.js handles the routing for them, and we
    // don't actually want the `/index` part to show in the URL
    path = path.replace('/index', '')
    
    return path
  })

  // Dedupe the array because the globbers will return top level directories
  // *and* their respective `index.js` files, which are really the same thing.
  // For example, the globber will find return these two distinct paths:
  //
  // `/example`
  // `/example/index.js`
  //
  // Both of the above will be reduced down to the same route.
  return [...new Set(pages)]
}

/**
 * Returns a new PageObject instance based on a route.
 * 
 * @param {string} route
 */
export function PageObject(route) {
  // Split the route into non-empty strings
  const parts = route.split('/').filter(part => !!part.length)
  const level = parts.length
  const titleI18nKey = `page.${parts.join('.')}.title`
  let icon = null
  let iconType = null

  // The top level routes get special details
  if (level === 1) {
    switch(parts[0]) { 
      case 'cardinal-server':
        icon = '/icons/logo-server.svg'
        iconType = 'image'
        break

      case 'cardinal-music':
        icon = '/icons/logo-music.svg'
        iconType = 'image'
        break

      case 'general':
        icon = 'fas fa-box-open'
        iconType = 'font'
        break

      case 'privacy':
        icon = 'fas fa-mask'
        iconType = 'font'
        break

      case 'developer':
        icon = 'fas fa-code'
        iconType = 'font'
        break
    }
  }
  
  return Object.freeze({
    route,
    level,
    parts,
    titleI18nKey,
    icon,
    iconType
  })
}