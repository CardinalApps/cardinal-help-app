import glob from 'glob'

/**
 * Page structure for the app. 
 */
export function getPages() {
  console.log('Fetching pages from disk')

  Promise.all([
    doGlob('pages/*/**')
  ])
  .then((pages) => {
    console.log(pages)
  })
}

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