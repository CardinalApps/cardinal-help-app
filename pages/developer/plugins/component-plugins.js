import Link from 'next/link'
import HelpApp from '../../components/HelpApp/HelpApp'
import PageView from '../../components/PageView/PageView'

export default function ComponentPlugins() {
  return (
    <PageView>
      <h1>Component Plugins</h1>

      <Link href="/">
        <a>Go to home</a>
      </Link>
    </PageView>
  )
}

ComponentPlugins.Layout = HelpApp
