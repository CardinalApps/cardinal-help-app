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
        <h1>Terms & Conditions</h1>
        <p>All <a href="https://cardinalapps.xyz/en/terms-and-conditions" target="_blank">Terms & Conditions</a> are available on the main Cardinal website.</p>
        <p>Cardinal apps are licensed under the <a href="https://www.gnu.org/licenses/quick-guide-gplv3.html" target="_blank" rel="nofollow">GPLv3 software license</a>. This means that it's open source software, which you can download, copy, study, modify, and distribute, as long as it remains open source and with the same license.</p>
      </div>
    </div>
  )
}
