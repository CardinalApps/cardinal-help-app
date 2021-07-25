import Link from 'next/link'
import HelpApp from '../components/HelpApp/HelpApp'
import PageView from '../components/PageView/PageView'
import { i18n } from '../i18n/'

export default function Home() {
  return (
    <PageView>
      <h1>{i18n('home.hero.title')}</h1>

      {/* <Link href="/plugins/component-plugins">
        <a>Go to plugins</a>
      </Link> */}
    </PageView>
  )
}

Home.Layout = HelpApp
