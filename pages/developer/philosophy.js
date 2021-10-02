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
        <h1>Development Philosophy</h1>
        <p>All Cardinal apps adhere to a few core concepts.</p>

        <h4>To Be Free and Open Source</h4>
        <p>Cardinal apps are licensed under the <a href="https://www.gnu.org/licenses/quick-guide-gplv3.html" target="_blank" rel="nofollow">GPLv3 software license</a>. This is a strong copyleft license that works to the benefit of project contributors, protecting their time and effort from being exploited by another party.</p>
        <p>All of the Cardinal source code is available on <a href="https://github.com/CardinalApps" target="_blank">GitHub</a>.</p>

        <h4>To Be as Platformless as Possible</h4>
        <p>Web technology is platformless, flexible, accessible, and without a corporation gatekeeping an app store. Cardinal apps embrace the web stack, and by designing for the web first, more code covers more platforms.</p>
        <p>Native apps can be used to wrap and progressively enhance the client web apps, to allow for better system integration.</p>
        
        <h4>To Be Free of Advertising and Marketing</h4>
        <p>All apps are free of tracking, marketing, and ads. No "Updgrade Now" buttons. No paywalled features. No phoning home. No crypto mining. No bundled analytics software. No email address or account required, and no auth servers.</p>
      </div>
    </div>
  )
}
