import { useSelector } from "react-redux"

export default function Page({ children }) {  
  const pages = useSelector((state) => state.pages)
  console.log('pages from redux', pages)

  return children
}
