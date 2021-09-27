import { getPages } from '../../../models/pages'

/**
 * Returns all pages for the app based on the folder structure on the disk.
 */
export default async (req, res) => {
  const { pageId } = req.query
  const pages = await getPages()

  res.statusCode = 200
  res.json({
    'some test page': pageId
  })
}
