const fs = require('fs')
const path = require('path')
const { getPages } = require('../models/pages.js')

/**
 * Main function of the script.
 */
async function buildPagesCache() {
  console.info('Building cache of models/pages')

  const cachedFilePath = path.join(__dirname, '..', 'cache', 'pages.json')
  const pages = await getPages()

  console.info(pages)

  fs.writeFileSync(cachedFilePath, JSON.stringify(pages))

  console.info('Built models/pages cache in', cachedFilePath)
}

/**
 * Run the main function of the script when this is invoked in the CLI.
 */
(async () => {
  await buildPagesCache()
})()