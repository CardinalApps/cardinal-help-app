import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { addPage } from '../../store/slices/pagesSlice'

export default function Page() {
  const dispatch = useDispatch()
  const pages = useSelector((state) => state.pages)
  const [newPageName, setNewPageName] = useState('')
  const newPageInput = useRef(null)
  
  function fetchUser() {
    console.log('Doing RXJS test')
    dispatch({ type: 'FETCH_USER' })
  }

  return (
    <div className="document">
      <header>
        <div className="cols">
          <div className="align-content-bottom">
            <Icon type="image" icon="/icons/logo-server.svg" size="xl" />
            <Icon type="image" icon="/icons/logo-server.svg" size="l" />
            <Icon type="image" icon="/icons/logo-server.svg" size="m" />
            <Icon type="image" icon="/icons/logo-server.svg" size="s" />
            <h2>Cardinal Server</h2>
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
        <Breadcrumbs path={['Runway', 'Document']} />
      </header>

      <div className="text">
        <h1>Introduction to Cardinal Server</h1>
        <h2>Introduction to Cardinal Server</h2>
        <h3>Introduction to Cardinal Server</h3>
        <h4>Introduction to Cardinal Server</h4>
        <h5>Introduction to Cardinal Server</h5>
        <h6>Introduction to Cardinal Server</h6>

        <Button onClick={fetchUser}>
          FETCH USER
        </Button>
        <Button onClick={() => console.log('Clickaroni 2')}>
          Example Button 2
        </Button>

        <form id="add-page">
          <input type="text" ref={newPageInput} value={newPageName} onChange={(e) => setNewPageName(e.target.value)} />
          <Button onClick={(e) => dispatch(addPage(newPageName))}>
            Add Page
          </Button>
          <div>
            {(pages || []).map(page => `${page}, `)}
          </div>
        </form>

        <p>Years. Bring for <code>have day</code> moved above were creeping don&#39;t, void gathered whales won&#39;t yielding let replenish cattle. Us <strong>green</strong> don&#39;t bearing void dominion. To shall second third it, grass abundantly image gathering his made divide, together let greater may. Fifth set. Gathering, great dry creeping him without. Of whales, make. Image lesser gathering so darkness above Second man own that fly after said abundantly they&#39;re firmament Itself evening spirit give upon. Own. Morning. Grass <em>i</em> make all under, whales made upon greater in upon. Male is so unto had. Gathered Fifth deep very. <strong>Firmament</strong> own place isn&#39;t.</p>
        <p>To set, so two meat, seas us there, blessed fourth can&#39;t had. Itself stars of given forth creeping <em>day</em> rule, they&#39;re, tree don&#39;t whose wherein divided darkness own doesn&#39;t stars likeness over image make midst living heaven set thing. For place without a a. Second void days own them living midst form herb gathered. Dominion tree for earth meat hath day you seas deep she&#39;d own over years moving wherein thing called void she&#39;d. Whales one. Together our they&#39;re every days blessed. Have let and seed darkness shall gathering bearing Dominion. Own doesn&#39;t. For moveth tree for make doesn&#39;t had open lesser behold stars itself void. You fourth. Very tree. Give heaven. All. Dominion i beast. Said wherein from. Of wherein was shall whales.</p>
        <p>Creeping darkness in cattle midst tree wherein is lights them us likeness they&#39;re creature grass fowl fowl our divide very. Gathering tree multiply i itself don&#39;t spirit thing open doesn&#39;t upon second doesn&#39;t third rule signs face, under replenish great said was. Air let had called greater wherein fly, she&#39;d also fruitful moved beginning itself. Fish third second whose a made darkness divided fourth, <strong>stars</strong> won&#39;t thing whales gathered land hath. Void and own. Hath fish very isn&#39;t saying. Very multiply make can&#39;t sea and likeness creeping meat face you&#39;re made given can&#39;t his bearing, good you&#39;re Bring us wherein forth that, brought fourth yielding forth dry said <strong>appear</strong> called fowl sixth greater be very beginning give. Their gathered every likeness female said man a wherein life multiply spirit. The face upon us let in female fruitful doesn&#39;t two morning waters won&#39;t upon is.</p>
        <p>Night brought divided it evening won&#39;t he open wherein cattle have good first they&#39;re of sea void there saying, firmament upon evening creepeth night. Second may isn&#39;t light without the after <em>saying</em> face <strong>first</strong> whose great. Dry make that every. Itself given don&#39;t subdue shall blessed itself can&#39;t to evening his. Open you. Bring dominion, also subdue moved whose. To them you darkness grass which meat winged the. Given over and open upon stars may together grass make. Days for divide saw him she&#39;d given you&#39;re, itself gathering herb. Them his, signs set rule cattle cattle created stars spirit doesn&#39;t light be. So place rule called. Stars give was heaven she&#39;d. Third have, all given to their evening. Bring days hath fowl, image the fifth form him itself god appear day seed divided face. Fly lights our stars, fourth behold.</p>
        <p>Be void whose day shall is god a doesn&#39;t whales seas our midst, it creeping without divided fruitful fowl unto land isn&#39;t female. Signs gathered moving also beginning. <em>Image</em> have without bearing a were bearing, <em>saw</em> made hath meat thing so blessed open, light subdue third seasons won&#39;t seasons spirit behold <strong>open</strong> stars creepeth she&#39;d Male likeness all good <strong>winged</strong> bearing he tree saying. <strong>Bring</strong> open tree. The his can&#39;t there behold all their. Kind won&#39;t over <em>morning</em> whose can&#39;t, earth dry made let can&#39;t air gathered midst it living fish lesser don&#39;t <em>likeness</em> fowl, beginning there given bearing. Deep fill night gathering to, two fowl creepeth fourth whales stars. Shall winged under darkness yielding. Good one so his. Seasons beginning sea seas it. Don&#39;t whose own divided gathering doesn&#39;t dry bearing saw god darkness all fish yielding she&#39;d a first morning. Two in firmament moveth stars you&#39;ll be. Day good fourth living divide is midst under fowl. Day there place also said. Own. <strong>Face</strong> first midst beast seas lesser blessed two darkness together hath was, great gathered itself his second us to thing signs lesser sixth fly fill light firmament midst all bring.</p>
        
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
  )
}
