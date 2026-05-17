import React from 'react';
import '../css/AboutSection.css';

export default function AboutSection() {
  return (
    <section styleName="about-section">
      <div styleName="about-section__inner">
        <div styleName="about-section__left">
          <h2 styleName="about-section__heading">WHO ARE WE ?</h2>
          <div styleName="about-section__text-box">
            <p>
              As the institute evolves, so does IMG. We are a student group,
              which cultivates technical innovation and drives the development
              of software systems and niche applications which empathize with
              the residents of IIT Roorkee, making their digital stay as
              seamless as possible. We survive on action and results, getting
              it done faster, better and more efficiently, with one goal in
              mind: Simplifying the business of college life.
            </p>
          </div>
        </div>

        <div styleName="about-section__photo">
          <div styleName="photo-placeholder">
            <div styleName="photo-placeholder__inner">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity="0.3">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="1.5"/>
                <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
