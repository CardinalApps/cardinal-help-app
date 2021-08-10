import LayoutDoc from '../components/LayoutDoc/LayoutDoc'
import { i18n } from '../i18n/'

export default function Home() {
  return (
    <LayoutDoc
      seoTitle={i18n('home.seo.title')}
      seoDesc={i18n('home.seo.desc')}
    >
    </LayoutDoc>
  )
}

Home.layout = 'full_menu'
