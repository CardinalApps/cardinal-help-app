import Link from 'next/link'
import PageView from '../../components/PageView/PageView'

export default function Page() {
  return (
    <PageView>
      <h1>Introduction to Cardinal Server</h1>

      <Link href="/">
        <a>Go to home</a>
      </Link>
    </PageView>
  )
}

Page.layout = 'paper'
