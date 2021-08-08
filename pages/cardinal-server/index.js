import Link from 'next/link'
import PageView from '../../components/PageView/PageView'
import Icon from '../../components/Icon/Icon'

export default function Page() {
  return (
    <PageView>
      <div className="editable-content">
        <h1>Introduction to Cardinal Server</h1>

        <Link href="/">
          <a>Go to home</a>
        </Link>
      </div>
    </PageView>
  )
}

Page.layout = 'paper'
