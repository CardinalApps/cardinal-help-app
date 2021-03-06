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
        <h1>Accessibility</h1>
        <p>Much effort has been put into the applications to try and make them as accessible as possible. All app features, buttons, menu items, and anything clicky, should be reachable using only the keyboard.</p>
        <p>In some cases when interacting with the UI, if the user has an audio feedback application running like VoiceOver, the UI will speak phrases to help sure the user has good feedback about what they're doing.</p>
      </div>
    </div>
  )
}
