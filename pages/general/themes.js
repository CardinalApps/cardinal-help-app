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
        <h1>Customizing With Themes</h1>
        <p>There are a few ways to customize your Cardinal theme on the desktop. Easily change the accent colour between a few <del>preselected</del> <ins>curated</ins> colours, choose between dark mode and light mode, and edit every last bit of detail with custom CSS.</p>

        <h2>Dark and Light mode</h2>
        <p>All apps default to dark mode, but a light mode is available for those who choose... the dark side.</p>

        <h2>Accent Colour</h2>
        <img src="/screenshots/settings-accent-color.png" className="shadow med" alt="Screenshot of the default accent colours in Cardinal apps" title="Accent colours" />
        <p>The included accent colors were chosen for the moods they create. Each brings a certain feeling to the UI, allowing you to connect with the app on a deeper level. Or maybe that's all bs and they're just some colours I like.</p>

        <h2>Custom CSS</h2>
        <img src="/screenshots/settings-custom-css.png" className="shadow med" alt="Screenshot of the custom CSS setting in the Cardinal Music" title="Custom CSS" />
        <p>You can paste custom CSS directly into the settings panel and the app will immediately load it. Be careful here though, you can accidentally hide the settings panel itself and not be able to remove the custom CSS! If something like that happens, you can run <code>disableUserCSS()</code> in the developer tools console.</p>
      </div>
    </div>
  )
}
