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
        <h1>Using the Web Apps</h1>
        <p>The web apps are browser based versions of the desktop apps. They are a convenient way to preview the desktop apps, to use full time, or in the case of Safari on macOS, to gain support for <code>.m4a</code> files.</p>
        <p>To use the web apps, open the web browser of your choice on desktop or mobile, and navigate to the address provided by Cardinal Server.</p>
        <img src="/screenshots/server-web-apps-locations.png" className="med center" alt="Screenshot of the Cardinal Server UI showing the URL of the web apps" title="Web app URLs" />

        <h2>Google Chrome</h2>
        <p>Google Chrome and other Chromium based browsers will provide the best experience. In fact, the desktop app uses Chromium internally, so everything should be pretty similar. Certain things will change though, like available options.</p>

        <h2>Firefox</h2>
        <p>Firefox uses a different rendering engine than the one that the desktop apps use, so there will be some differences in text rendering, spacing, and animations. Apart from these purely visual discrepancies, the Cardinal apps will run fine in Firefox.</p>

        <h2>Safari on macOS</h2>
        <p>Safari on macOS uses a different rendering engine than the one that the desktop apps use, so like Firefox, there will be visual differences. Safari also does not run Cardinal apps as well as Chromium based browsers. However, Safari on macOS is the only browser that supports  <code>.m4a</code> files. It is recommended to use Chromium if possible.</p>

        <h2>Mobile Browsers</h2>
        <p>See the <Link href="/general/mobile-apps"><a>Mobile Apps</a></Link> guide.</p>
      </div>
    </div>
  )
}
