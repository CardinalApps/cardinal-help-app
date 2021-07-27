import { getPages } from '../../models/pages'

export default (req, res) => {
  console.log('received pages api req')
  
  getPages()

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
