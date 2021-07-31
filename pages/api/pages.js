import { getPages } from '../../models/pages'

/**
 * Returns all pages for the app based on the folder structure on the disk.
 */
export default async (req, res) => {  
  const pages = await getPages()

  res.statusCode = 200
  res.json(pages)
}
