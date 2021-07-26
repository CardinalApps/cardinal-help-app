import HelpApp from '../components/HelpApp/HelpApp'
import PageView from '../components/PageView/PageView'
import { i18n } from '../i18n/'

export default function Home() {
  return (
    <PageView
      seoTitle={i18n('home.seo.title')}
      seoDesc={i18n('home.seo.desc')}
    >
    </PageView>
  )
}

Home.Layout = HelpApp
