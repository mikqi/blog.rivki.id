import React, { Component } from 'react'

import avatar from './ava.jpg'
import './About.css'

class About extends Component {
  render() {
    return (
      <>
        <div className="scroll-indicator">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4="
            width="50"
            alt="arrow-down"
          />
        </div>

        <div className="poppins">
          {/* <!-- MAIN CONTENT ABOUT --> */}
          <div className="flex flex-column vh-100-l vh-100-m w-70-m w-60-l w-90-ns center justify-center items-center-l items-center-m">
            <div className="flex flex-column-ns flex-row-m flex-row-l mb4 mb4-l mb0-ns mt6-ns mt0-l mt0-m">
              <img
                className="avatar self-center-ns"
                src={avatar}
                alt="avatar"
              />
              <h3 className="flex flex-column self-center-l self-center-m self-start-ns ml4-l ml4-m mt4-ns f2 ma0 fw4">
                Hello.
                <span className="f2 ma0">
                  <em>—</em>
                </span>
              </h3>
            </div>
            <div className="eight columns">
              <p className="f4 gray fw1 tracked-sm lh-copy mt0 mt4-ns">
                I am Rivki, but my friend sometimes call me Ikki (e&apos;ki). A
                Frontend Engineer who love simplicity, great performance in the
                good looking products that I made. Currently I am working at the
                most growing e-commerce company in Indonesia,&nbsp;
                <a
                  href="https://bukalapak.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bukalapak.
                </a>
              </p>

              <p className="f4 gray fw1 tracked-sm lh-copy">
                My passionate is about web technology such as Javascript, Chrome
                Developer Tools, React, React Native, VueJS and many more. If
                you want to know more about me just say &quot;Hi!&quot;&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:muhammad.rivki@live.com"
                >
                  here.
                </a>
              </p>
            </div>
          </div>
          {/* <!-- END MAIN HEAD ABOUT --> */}

          {/* <!-- EXPERIENCES AND ACHIEVEMENTS --> */}
          <div className="mt5-ns mt0-l mt0-m">
            {/* <!-- EXPERIENCES --> */}
            <div className="flex flex-column w-70-m w-60-l w-90-ns center justify-start items-start-l items-start-m mb4">
              <h5 className="ma0 mb4 f3 self-start">
                <em>– EXPERIENCES</em>
              </h5>
              <div className="flex-l flex-m mb3-l mb3-m">
                {/* <!--BUKALAPAK.COM FTL--> */}
                <div className="lh0 mb3-m mb3-l mb4-ns w-60-l w-60-m w-100-ns">
                  <div className="lh-copy light-silver f6">
                    Oct 2018 - Today
                  </div>
                  <div className="lh-copy mv1 b">PT. Bukalapak.com</div>
                  <div>
                    <small className="lh-copy f6">
                      <em>Frontend Tribe Lead</em>
                    </small>
                  </div>
                  <div className="mt2 lh-copy f4 fw1 pr4">
                    <small className="black-70">
                      Bukalapak use&nbsp;
                      <a
                        target="_blank"
                        href="https://medium.com/productmanagement101/spotify-squad-framework-part-i-8f74bcfcd761"
                        rel="noopener noreferrer"
                      >
                        Spotify Engineering Culture
                      </a>
                      &nbsp;and on this position I focus to remove knowledge gap
                      with other tribes and to keep my Tribe code quality is
                      good.
                    </small>
                  </div>
                </div>

                {/* <!--BUKALAPAK.COM FTL--> */}
                <div className="lh0 mb3-m mb3-l mb4-ns w-60-l w-60-m w-100-ns">
                  <div className="lh-copy light-silver f6">
                    Apr 2018 - Today
                  </div>
                  <div className="lh-copy mv1 b">PT. Bukalapak.com</div>
                  <div>
                    <small className="lh-copy f6">
                      <em>Frontend Engineer Squad Lead</em>
                    </small>
                  </div>
                  <div className="mt2 lh-copy f4 fw1 pr4">
                    <small className="black-70">
                      As a lead i responsible to made my squad code quality
                      better with code reviews and also handle for deployment my
                      squad product to production with less bug.
                    </small>
                  </div>
                </div>
              </div>

              <div className="flex-l flex-m mb3-l mb3-m">
                {/* <!--BUKALAPAK.COM--> */}
                <div className="lh0 mb3-m mb3-l mb4-ns w-60-l w-60-m w-100-ns">
                  <div className="lh-copy light-silver f6">
                    Oct 2016 - Today
                  </div>
                  <div className="lh-copy mv1 b">PT. Bukalapak.com</div>
                  <div>
                    <small className="lh-copy f6">
                      <em>Frontend Engineer</em>
                    </small>
                  </div>
                  <div className="mt2 lh-copy f4 fw1 pr4">
                    <small className="black-70">
                      In Bukalapak I focus built and maintenance at seller side
                      but before transactions such as <em>create product</em>
                      ,&nbsp;
                      <em>product list</em> etc. I develop previously using
                      jQuery and Coffescript, but now already use&nbsp;
                      <a
                        target="_blank"
                        href="https://vuejs.org"
                        rel="noopener noreferrer"
                      >
                        VueJS
                      </a>
                      .
                    </small>
                  </div>
                </div>

                {/* <!-- ShoutCap --> */}
                <div className="lh0 mb3-m mb3-l mb4-ns w-60-l w-60-m w-100-ns">
                  <div className="lh-copy light-silver f6">
                    Jul 2015 - Sep 2015
                  </div>
                  <div className="lh-copy mv1 b">ShoutID</div>
                  <div>
                    <small className="lh-copy f6">
                      <em>Frontend Engineer Intern</em>
                    </small>
                  </div>
                  <div className="mt2 lh-copy f4 fw1 pr4">
                    <small className="black-70">
                      I develop iOS ShoutCap App using&nbsp;
                      <a
                        target="_blank"
                        href="http://ionicframework.com"
                        rel="noopener noreferrer"
                      >
                        Ionic Framework
                      </a>
                      &nbsp;and create a Profile, Voucher, Transactions and
                      Create a Cap Views.
                    </small>
                  </div>
                </div>
              </div>

              <div className="flex-l flex-m mb3-l mb3-m">
                {/* <!--CODELABS.COM--> */}
                <div className="lh0 mb3-m mb3-l mb4-ns w-60-l w-60-m w-100-ns">
                  <div className="lh-copy light-silver f6">
                    Dec 2012 - Sep 2016
                  </div>
                  <div className="lh-copy mv1 b">Unikom Codelabs Division</div>
                  <div>
                    <small className="lh-copy f6">
                      <em>Fullstack Javascript</em>
                    </small>
                  </div>
                  <div className="mt2 lh-copy f4 fw1 pr4">
                    <small className="black-70">
                      In Codelabs i do some reasearch for competition focus on
                      Javascript technology and maintenance some internal
                      websites.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END EXPERIENCES --> */}

            {/* <!-- PROJECTS --> */}
            <div
              v-if="isProjects"
              className="flex flex-column w-70-m w-60-l w-90-ns center justify-start items-start-l items-start-m mb4"
            >
              <div>
                <h5 className="ma0 mb4 f3 self-start">
                  <em>– PROJECTS</em>
                </h5>

                {/* <!--Seller Center--> */}
                <div className="lh0 mb4">
                  <div className="lh-copy light-silver f6">October 2018</div>
                  <div className="lh-copy mv1 b">
                    Component Library Bukalapak
                  </div>
                  <div className="mt2 lh-copy f4 fw1">
                    <small className="black-70">
                      Parallel with develop Seller Center, I and my team
                      designing reuseable components from Seller Center. After
                      that we move it to our internal npm registry to share with
                      other engineer and now the project has been moved to Core
                      Frontend.
                    </small>
                  </div>
                </div>

                {/* <!--Seller Center--> */}
                <div className="lh0 mb4">
                  <div className="lh-copy light-silver f6">March 2018</div>
                  <div className="lh-copy mv1 b">Seller Center Bukalapak</div>
                  <div className="mt2 lh-copy f4 fw1">
                    <small className="black-70">
                      I lead the team to develop&nbsp;
                      <a href="https://seller.bukalapak.com">
                        Seller Center Bukalapak
                      </a>
                      . I make standard for the the code to make it clean and
                      also develop the server and client. It used&nbsp;
                      <a href="https://nuxtjs.org">Nuxt.js</a>, so the server
                      side use NodeJS + ExpressJS and the client side use VueJS.
                      This project is recreate features from legacy codebase to
                      the new stack. I responsible for stability and
                      maintainabilty the code.
                    </small>
                  </div>
                </div>

                {/* <!--7 Pagi Dashboard--> */}
                <div className="lh0 mb4">
                  <div className="lh-copy light-silver f6">January 2017</div>
                  <div className="lh-copy mv1 b">7 Pagi Dashboard</div>
                  <div className="mt2 lh-copy f4 fw1">
                    <small className="black-70">
                      Create a dashboard for&nbsp;
                      <a
                        href="https://id.techinasia.com/7pagi-platform-interaksi-antara-guru-dan-orang-tua-siswa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        7 Pagi
                      </a>
                      &nbsp; startup. I work in backend and frontend side and
                      both of that used JavaScript. NodeJS and Express for
                      backend and AngularJS for frontend also use azure hosting.
                    </small>
                  </div>
                </div>

                {/* <!--Twikipedia--> */}
                <div className="lh0 mb4">
                  <div className="lh-copy light-silver f6">March 2016</div>
                  <div className="lh-copy mv1 b">Twikipedia</div>
                  <div className="mt2 lh-copy f4 fw1">
                    <small className="black-70">
                      I develop a marketing solution web apps for who runs the
                      busniess in Twitter. I use sentiment analysis and machine
                      learning for categorized the user based on their tweets
                      and the web built with NodeJS for server side and
                      AngularJS for the client. You can read detail about my
                      research&nbsp;
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://jsi.cs.ui.ac.id/index.php/jsi/article/download/500/342/"
                      >
                        here
                      </a>
                      .
                    </small>
                  </div>
                </div>

                {/* <!--Dodo Kids--> */}
                <div className="lh0 mb4">
                  <div className="lh-copy light-silver f6">March 2015</div>
                  <div className="lh-copy mv1 b">Dodo Kids Browser</div>
                  <div className="mt2 lh-copy f4 fw1">
                    <small className="black-70">
                      I create an extension browser for our apps, and i do
                      design too. Dodo Kids Browser is a parenting controlling
                      apps. Which is have two frontend. First in Windows Phone,
                      and second on extension browser.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END PROJECTS --> */}

            {/* <!-- ACHIEVEMENTS --> */}
            <div className="flex flex-column w-70-m w-60-l w-90-ns center justify-start items-start-l items-start-m pb4">
              <h5 className="ma0 mb4 f3 self-start">
                <em>– ACHIEVEMENTS</em>
              </h5>
              <div className="lh0 mb4">
                <div className="lh-copy light-silver f6">May 2018</div>
                <div className="lh-copy mv1 b">
                  Facebook F8 Hakcathon Participation
                </div>
                <div className="mt2 lh-copy f4 fw1">
                  <small className="black-70">
                    I&apos;ve invited by Facebook to become a participant F8
                    Hackathon in McEnery Convention Center, San Jose. There was
                    three people in my team with one Backend, Frontend and
                    Business Analyst. And of course the Frontend role is Me. We
                    built an apps focus on helping a community you can check
                    it&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://devpost.com/software/komun-ally"
                    >
                      here
                    </a>
                    .
                  </small>
                </div>
              </div>

              {/* <!--IMAGINE CUP 2017--> */}
              <div className="lh0 mb4">
                <div className="lh-copy light-silver f6">March 2017</div>
                <div className="lh-copy mv1 b">
                  Semi Finalist Microsoft Imagine Cup Indonesia 2017
                </div>
                <div className="mt2 lh-copy f4 fw1">
                  <small className="black-70">
                    I built a marketing solution apps in Twitter use sentiment
                    analysis and categorized the user based on their tweets.
                    With codename&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://sellution.azurewebsites.net/"
                    >
                      &nbsp; Sellution
                    </a>
                    &nbsp; or&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://twikipedia-apps.herokuapp.com"
                    >
                      Twikipedia
                    </a>
                    .
                  </small>
                </div>
              </div>

              {/* <!--IMAGINE CUP 2015--> */}
              <div className="lh0 mb4">
                <div className="lh-copy light-silver f6">May 2015</div>
                <div className="lh-copy mv1 b">
                  1<sup>st</sup> Winner Microsoft Imagine Cup Indonesia 2016
                </div>
                <div className="mt2 lh-copy f4 fw1">
                  <small className="black-70">
                    I built parenting control apps that integrate parent device
                    and browser. Parent can see what are kids open in a browser
                    and give an action to block a website if parent doesn&apos;t
                    want the kid to open that website. And we win in Innovation
                    Category. We won in first place in&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dailysocial.id/post/pemenang-imagine-cup-indonesia-2015"
                    >
                      Indonesia
                    </a>
                    &nbsp; and get the chance to&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://imagine.microsoft.com/en-us/Winner/2015WorldSemifinalists"
                    >
                      world semifinals
                    </a>
                    .
                  </small>
                </div>
              </div>

              {/* <!--IMAGINE CUP 2018--> */}
              <div className="lh0 mb4">
                <div className="lh-copy light-silver f6">April 2018</div>
                <div className="lh-copy mv1 b">Nominator INAICTA 2014</div>
                <div className="mt2 lh-copy f4 fw1">
                  <small className="black-70">
                    We develop apps citizen journalism about crime. With
                    codename&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://if.unikom.ac.id/web/prestasi.php"
                    >
                      Crimezone
                    </a>
                    . My role in team as a Frontend and UX.
                  </small>
                </div>
              </div>
            </div>
            {/* <!-- END ACHIEVEMENTS --> */}
          </div>
        </div>
      </>
    )
  }
}

export default About
