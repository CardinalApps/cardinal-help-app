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
        <h1>Getting Started as a Cardinal Contributor</h1>
        <p>So, you found yourself wanting to contribute to Cardinal. That's awesome. There are plenty of ways to get involved with the project and make meaningful contributions, and you don't need to know how to write code to become a valued member of the community. This article outlines the various ways that people can contribute.</p>
        <p>No matter which kind of contributor you'd like to be, come and join us in <a href="https://discord.gg/WWXngggPp4" target="_blank" rel="nofollow">Discord</a> so that we can collaborate as a team.</p>

        <h2>Developers</h2>
        <p>It wouldn't be an open source project without the ability for developers from around the world to contribute to the code base. All Cardinal applications are written in JavaScript, so it goes without saying that proficiency in JavaScript is a big plus for aspiring code contributors.</p>
        <p>At this point in time, the frontends of Cardinal Server and Cardinal Music are undergoing a rewrite in React+Redux, so the existing code bases are now in maintenance mode and only bug fixes will be accepted for them. The Photos app will be the first to be released with the new React code base, at which point it will be opened to external contributors.</p>
        <p>All other repositories on the <a href="https://github.com/CardinalApps" target="_blank" rel="nofollow">Cardinal GitHub organization</a> are open to contributons. If you'd like to take it to the next level and become a core developer, hop into <a href="https://discord.gg/WWXngggPp4" target="_blank" rel="nofollow">Discord</a> so that we can see how to make that happen.</p>

        <h2>Designers</h2>
        <p>It should come as no surprise that Cardinal was designed by a developer. If you have an eye for design, you are welcome to propose new graphics for anything from the fonts to the main logo itself. Interface elements like icons are especially appreciated. If you have grander ideas like application-wide themes, we'd love to hear about that too. The new React+Redux codebase will be capable of themeing, so hit us with your best shot!</p>

        <h2>Translators</h2>
        <p><em>See the <Link href="/developer/internationalization"><a>Internationalization guide</a></Link> for more information.</em></p>
        <p>Internationalization is a critical part of making software available to more people. Cardinal is developed in English, and the core development team has the ability to translate the apps into French, but that's not going to cut it.</p>
        <p>Although, please hold off for a little bit before contributing translations; the current state of <code>cardinal-i18n</code> is a mess.</p>

        <h2>Community Involvement</h2>
        <p>As the Cardinal community grows, so will the task of keeping it clean and safe. Cardinal apps are for people of all ages, and so is the community. <a href="https://discord.gg/WWXngggPp4" target="_blank" rel="nofollow">Discord</a> is our town square, and we try our best to make it a welcoming, informative, and interesting place to be. If you believe in these things too, you can start contributing to that end just by being a engaged member of the community.</p>
        <p>At certain milestones, community management positions like channel moderator will open up. However, at this point in time, we are not looking for new community managers.</p>

        <h2>Something Else</h2>
        <p>Good ideas come in all shapes and sizes, and they certainly also come from categories other than just the ones listed here. If you're a creative thinker and have an idea that you think works for the project, you are always welcome to share it. Don't let your dreams just be dreams!</p>
      </div>
    </div>
  )
}
