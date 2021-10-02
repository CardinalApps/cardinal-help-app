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
        <h1>File Indexing in Cardinal Server</h1>
        <p>In all releases of Cardinal Server, file indexing is handled by the open source, purpose built <a href="https://github.com/CardinalApps/cardinal-indexing-service" target="_blank">cardinal-indexing-service</a> library. This library is written in JavaScript and runs in Node.js environments.</p>

        <p>For a technical overview of how file indexing works, the <a href="https://github.com/CardinalApps/cardinal-indexing-service/blob/master/README.md" target="_blank">library's README file</a> is the place to start.</p>

        <h2>Indexing Files on the Desktop</h2>
        <p>To index files on macOS, Linux, or Windows, use the Cardinal Server app for desktop. For instructions on how to get started, see the <Link href="/cardinal-server/setup"><a>Setup Guide</a></Link>.</p>

        <p>Once up and running, find your way to the <em>Index</em> page using the navigation at the bottom of the interface. You'll now see something like this; it's where you can control the file indexing features of Cardinal Server.</p>
        <img src="/screenshots/server-index.png" className="med center" alt="Screenshot of the Cardinal Server UI showing the Index page" title="Index page" />

        <h3>The Big Button</h3>
        <p>The Big Button allows you to manually start, pause, and resume the indexing service, however only the last (and longest) step of the indexing process can be paused. If the button glows red, it means it can't be paused right now.</p>

        <p>Once started, you'll be able to monitor how many files are being imported, which file the service is currently processing, and an estimate for the time remaining. All you need to do it let is run until it's done. You can even start using the other Cardinal apps right away while it's running the import. At the end of the run, you'll be presented with a log file summarizing everything that it just did.</p>

        <h3>Indexing Options</h3>
        <p>In the <em>Options</em> section, you can change options about the next indexing run. Changing an option while the service is already running will have no effect.</p>
        <h4>Modes</h4>
        <p>There are two modes available: <strong>quick</strong> and <strong>deep</strong>. Quick mode will only look for new files on the disk, making it great for quickly adding a few new songs or albums to your library. Deep mode will do everything that quick mode does, and will also check the MD5 of all files to see if they have been updated since the last time they were scanned. Deep mode is considerably slower than quick mode, which is why quick mode is the default, and why you should only use deep mode if you know you have files that had their metadata updated.</p>

        <h3>File Counts</h3>
        <p>Under <em>Indexed Files</em>, you can see exactly how many files of each type Cardinal Server has imported. At the moment, only music files are supported.</p>

        <h3>Media Library</h3>
        <p>Under <em>My Folders</em>, you'll find a small cozy box in which to drag-and-drop the folders that you want Cardinal Server to look for media in. If you remove a folder from here, nothing will happen until the next indexing run, at which point all of the media in that folder will be <strong>deindexed</strong>.</p>

        <p>If you remove all folders from here and run the indexing service, your entire media library will be erased. <em>Gasp!</em></p>
      </div>
    </div>
  )
}
