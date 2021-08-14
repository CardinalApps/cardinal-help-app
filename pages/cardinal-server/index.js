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
          <div className="align-content-right align-center">
            <div className="meta">
              <p>Updated Aug 1, 2021</p>
            </div>
          </div>
        </div>
      </header>

      <div className="text">
        <h1>Introduction to Cardinal Server</h1>

        <p></p>
      </div>
    </>
  )
}
