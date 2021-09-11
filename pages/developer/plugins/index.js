import Link from 'next/link'
import Icon from '../../../components/Icon/Icon'
import Button from '../../../components/Button/Button'
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs'

export default function Page() {
  return (
    <div className="document">
      <header>
        <div className="cols">
          <div className="align-content-bottom">
            <Icon type="image" icon="/icons/logo-server.svg" size="l" />
          </div>
          <div className="align-content-right align-center">
            <div className="meta">
             
            </div>
          </div>
        </div>
        <Breadcrumbs />
      </header>

      <div className="text">
        <h1>Introducion to Plugins</h1>
        <p className="coming-soon">Plugins are in development. Check back soon.</p>
      </div>
    </div>
  )
}
