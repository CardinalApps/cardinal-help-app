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
            <Icon type="image" icon="/icons/logo-music.svg" size="l" />
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
        <p>Getting started with Cardinal Music is just as easy as Cardinal Server. This guide will help you get started with the Cardinal Server application on macOS, Windows, and Linux.</p>
        <p>Before you can use Cardinal Music, you need to set up <a href="https://cardinalapps.xyz/en/cardinal-server" target="_blank">Cardinal Server</a> for desktop or Docker, and it needs to be running somewhere on your local area network. There's a <Link href="/cardinal-server/setup"><a>guide</a></Link> for that.</p>

        <h2>Downloads for macOS, Windows and Linux</h2>
        <p>macOS, Windows, and Linux installers for Cardinal Music are released on it's <a href="https://github.com/somebeaver/Cardinal-Music" target="_blank">official GitHub releases page</a>.</p>

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

        <h2>Connecting to a Cardinal Server</h2>
        <p>Once you start up Cardinal Music, you'll see to connect to the Cardinal Server that you've set up on the local area network. The <em>host</em> and <em>port</em> information can be found on the main page of Cardinal Server. Cardinal Server will need to be online while using Music.</p>
      </div>
    </div>
  )
}
