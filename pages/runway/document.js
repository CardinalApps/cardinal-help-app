import Link from 'next/link'
import PageView from '../../components/PageView/PageView'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'

export default function Page() {
  return (
    <PageView>
      <div className="document">
        <header>
          <div className="cols">
            <div className="align-content-bottom">
              <Icon type="image" icon="/icons/logo-server.svg" size="xl" />
              <Icon type="image" icon="/icons/logo-server.svg" size="l" />
              <Icon type="image" icon="/icons/logo-server.svg" size="m" />
              <Icon type="image" icon="/icons/logo-server.svg" size="s" />
            </div>
            <div className="align-content-right align-center">
              <div className="meta">
                <p>Last edited Aug 1, 2021</p>
                <p>Revision #4</p>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="align-content-bottom">
              <Icon type="font" icon="fas fa-cookie-bite" size="xl" />
              <Icon type="font" icon="fas fa-cookie-bite" size="l" />
              <Icon type="font" icon="fas fa-cookie-bite" size="m" />
              <Icon type="font" icon="fas fa-cookie-bite" size="s" />
            </div>
          </div>
        </header>

        <div className="text">
          <h1>Introduction to Cardinal Server</h1>
          <h2>Introduction to Cardinal Server</h2>
          <h3>Introduction to Cardinal Server</h3>
          <h4>Introduction to Cardinal Server</h4>
          <h5>Introduction to Cardinal Server</h5>
          <h6>Introduction to Cardinal Server</h6>

          <Button onClick={() => console.log('Clickaroni 1')}>
            Example Button 1
          </Button>
          <Button onClick={() => console.log('Clickaroni 2')}>
            Example Button 2
          </Button>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a sodales mauris. Morbi at interdum purus. Duis ante metus, tempus non iaculis at, eleifend non odio. Integer sagittis quam ac lectus hendrerit facilisis. Vivamus eleifend massa non dui dictum, sit amet mollis neque sagittis. Quisque suscipit sagittis venenatis. Proin diam urna, consequat sit amet nisi ut, sodales consectetur mi.</p>
          <p>Morbi sodales risus vitae risus <a href="http://example.com" target="_blank">vehicula</a>, nec viverra lorem finibus. Cras a diam fringilla, gravida orci vel, scelerisque tortor. Vestibulum tellus lectus, aliquet in mattis quis, malesuada a metus.</p>
          <p>Aliquam <Link href="/"><a>Go To Home Page</a></Link> ornare id odio ut rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed efficitur tellus, tempor interdum lacus. Cras sagittis risus sem, a dapibus tortor porttitor non. Sed nec felis ligula. Morbi molestie, nisi vitae blandit aliquet, ipsum nibh bibendum mauris, nec facilisis neque lacus sit amet velit. Fusce vel viverra mi, et maximus erat. Maecenas lobortis mollis ipsum a dictum. Nullam vulputate tortor est, et dignissim dui faucibus vitae.</p>
          <p>Phasellus sollicitudin porta consequat. Suspendisse pellentesque diam a neque egestas congue. Pellentesque ultrices quam ac lorem suscipit accumsan. Donec pulvinar sem quis ex elementum, sit amet facilisis lacus commodo. Nam risus orci, bibendum vel pretium non, porta in ex. Cras cursus vestibulum enim, ut sagittis libero laoreet quis.</p>

          <code>
            npm run docker pull
          </code>
          
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a sodales mauris. Morbi at interdum purus. Duis ante metus, tempus non iaculis at, eleifend non odio.</li>
            <li>
              Parent item
              <ul>
                <li>Child item 1</li>
                <li>Child item 2</li>
              </ul>
            </li>
            <li>Last item</li>
          </ul>

          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a sodales mauris. Morbi at interdum purus. Duis ante metus, tempus non iaculis at, eleifend non odio.</li>
            <li>
              Parent item
              <ol>
                <li>Child item 1</li>
                <li>Child item 2</li>
              </ol>
            </li>
            <li>Last item</li>
          </ol>

          <img src="/screenshots/music-explore.png" alt="Explore" />
        </div>
      </div>
    </PageView>
  )
}

Page.layout = 'paper'
