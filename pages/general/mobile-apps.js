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
        <h1>Using the Mobile Apps</h1>
        <p><strong>Native apps that wrap the web apps are planned for some point in the future.</strong> Until then, the <Link href="/general/web-apps"><a>web apps</a></Link> can be used in regular mobile browsers.</p>
        <p>Since Cardinal Server is meant to be self hosted, it does not support HTTPS connections for the web apps. Unfortunately, having a HTTPS connection is a strict requirement for Progressive Web Apps (PWAs), even on local area networks. Without the ability to deliver PWAs, using the web apps on a mobile device can be... painful. Should you choose to use a mobile device, you'll need to keep the screen on and the browser focused if you want playback to continue.</p>
        <p>There are also visual bugs when using Safari on iOS, and other iOS browsers.</p>
      </div>
    </div>
  )
}
