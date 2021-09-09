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
        <h1>Installation & Setup</h1>
        <p>Getting started with Cardinal Server is super quick. There are installers available for all the major operating systems, and there's also a Docker version. This guide will help you get started with the Cardinal Server application on macOS, Windows, and Linux. For information about using the Docker release, see the <Link href="/cardinal-server/docker"><a>Docker</a></Link> guide.</p>

        <h2>Downloads for macOS, Windows and Linux</h2>
        <p>macOS, Windows, and Linux installers for Cardinal Server are released on it's <a href="https://github.com/somebeaver/Cardinal-Server" target="_blank">official GitHub releases page</a>.</p>

        <h2>Installation</h2>
        <h3>macOS</h3>
        <p>Double click the <code>.dmg</code> installer, and once the window opens, drag the icon into the Applications folder.</p>
        <h3>Windows</h3>
        <p>Double click the <code>.exe</code> installer, and let it do its thing.</p>
        <h3>Linux</h3>
        <h4>Debian Based Distributions (like Ubuntu, Pop!_OS, Linux Mint)</h4>
        <p>Double click the <code>.deb</code> package and follow the instructions of your system's package installer.</p>
        <h4>Red Hat Based Distributions (like Fedora)</h4>
        <p>Double click the <code>.rpm</code> package and follow the instructions of your system's package installer.</p>
        <h4>All Distributions</h4>
        <p>Mark the <code>.AppImage</code> file as executable and run it.</p>
      </div>
    </div>
  )
}
