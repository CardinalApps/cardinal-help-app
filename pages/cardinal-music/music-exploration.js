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
        <h1>Exploring Your Music</h1>
        <p>Cardinal Music's flagship feature is the Explore Music page. It's a fun way to interact with your music library, play random music, and get suggestions.</p>

        <h2>Top Picks</h2>
        <p>The name of this section depends on the time of day. The idea is that it should suggest the top picks for this time of the day, based on your previous playback at this time. Currently it simply shows random music. </p>

        <h2>Most Played</h2>
        <p>Here you'll find your most play tracks from your entire library.</p>

        <h2>The Four Horsemen</h2>
        <p>The most prominent feature of the Explore Music page is the four large buttons for playing random music. These buttons take center stage, offering an easy way to just play something now. Not to mention that they have the easiest of the Easter eggs to find.</p>

        <h2>Recently Added</h2>
        <p>After importing new music in Cardinal Server, it'll appear right here for a little while.</p>

        <h2>Albums With Favorites</h2>
        <p>When you add a song to your favorites, its album will appear in this section. It's a great way to quickly find the music you like most.</p>

        <h4>And There's More Coming</h4>
        <p>Along with the need for more purpose-built music exploration features, the plan is to make this page into a content feed, allowing you to keep scrolling downwards forever, constantly receiving suggestions for artists, albums, and songs until the entire library has been exhausted.</p>
      </div>
    </div>
  )
}
