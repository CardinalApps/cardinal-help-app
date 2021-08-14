import Link from 'next/link'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'

export default function Page() {
  return (
    <>
      <header>
        <div className="cols">
          <div className="align-content-bottom">
            <Icon type="image" icon="/icons/logo-server.svg" size="l" />
          </div>
        </div>
      </header>

      <div className="text">
        <h1>Default Page</h1>
      </div>
    </>
  )
}
