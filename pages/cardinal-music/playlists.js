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
        <h1>Using Playlists</h1>
        <p>Cardinal Music comes with the ability to create and manage Playlists.</p>

        <h2>Creating Playlists</h2>
        <p>Playlists can be created on the <strong>Playlists</strong> page. Click the plus (+) button and enter the name of the playlist.</p>

        <h2>Adding Music to a Playlists</h2>
        <p>To add an album or a song to a playlist, use its context menu by right-clicking on it or using its menu button. In the context menu, use the <strong>Add to Playlist</strong> button to add the album to an existing playlist.</p>

        <h2>Reordering Music in a Playlist</h2>
        <p>Once songs have been added to a playlist, they can be reordered by dragging and dropping them.</p>
      </div>
    </div>
  )
}
