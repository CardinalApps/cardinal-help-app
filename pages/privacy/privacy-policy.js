import Link from 'next/link'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

export default function Page() {
  return (
    <div className="document">
      <header>
        <div className="cols">
          <div className="align-content-bottom">
            <Icon type="font" icon="fas fa-box-open" size="l" />
          </div>
          <div className="align-content-right align-center">
            <div className="meta">
             
            </div>
          </div>
        </div>
        <Breadcrumbs />
      </header>

      <div className="text">
        <h1>Privacy Policy</h1>
        <p>The complete <a href="https://cardinalapps.xyz/en/privacy-policy" target="_blank">Privacy Policy</a> is available on the main Cardinal website.</p>
        <p>In general, anything you run on your hardware will not track anything. The things that run in the cloud, like this website, calculate usage metrics using software like Google Analytics.</p>
      </div>
    </div>
  )
}
