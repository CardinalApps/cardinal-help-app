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
        <p>Since Cardinal Server is meant to be self hosted, it does not support HTTPS connections for the web apps. Unfortunately, having a HTTPS connection is a strict requirement for Progressive Web Apps (PWAs), even on local area networks. Without the ability to deliver PWAs, using the web apps on a mobile device can be... painful. Should you choose to use a mobile device, you'll need to keep the screen on and the browser focused if you want playback to continue.</p>
        <p>There are also visual bugs when using Safari on iOS, or any other iOS web browser. Native apps that wrap the web apps are planned for some point in the future.</p>
      </div>
    </div>
  )
}
