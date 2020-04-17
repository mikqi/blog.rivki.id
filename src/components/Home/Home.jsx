import React from 'react'
import './Home.css'

export default function() {
  return (
    <section className="section w-break-ns poppins">
      <div className="flex vh-100 w-60-l w-90-ns center justify-center items-center">
        <div className="vw-100">
          <p className="f2 fw1 mb4">Hello.</p>
          <h1 className="f1-m f1-l f2-ns ma0">I&apos;m Muhammad Rivki,</h1>
          <h2 className="f2-m f2-l f3-ns fw1 ma0 lh-copy">
            Frontend Engineer&nbsp;
            {/* <a
                href="https://bukalapak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bukalapak"
                title="Bukalapak"
              >
                Bukalapak
              </a> */}
          </h2>
          <h2 className="f2-m f2-l f3-ns fw1 ma0 lh-copy">
            who love&nbsp;
            <span
              className="txt-rotate"
              data-period="5000"
              data-rotate='[ "JavaScript.", "chocolate.", "classical music.", "of course cat!!!!" ]'
            />
          </h2>
          <p className="f4-m f4-l f5-ns mt4 fw1 lh-copy tracked-sm">
            I spend most of my day working with the frontend things and read
            articles at feedly. You can find me on&nbsp;
            <a
              href="https://facebook.com/this.rivki"
              target="_blank"
              rel="noopener noreferrer"
              className="underline facebook"
            >
              Facebook
            </a>
            ,&nbsp;
            <a
              href="https://instagram.com/mikqii"
              target="_blank"
              rel="noopener noreferrer"
              className="underline github"
            >
              Instagram
            </a>
            ,&nbsp;
            <a
              href="https://twitter.com/__mikqi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline twitter"
            >
              Twitter
            </a>
            ,&nbsp;
            <a
              href="https://www.linkedin.com/in/muhammadrivki/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline linkedin"
            >
              LinkedIn
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://github.com/mikqi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline github"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
