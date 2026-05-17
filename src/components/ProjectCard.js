import React from 'react';
import '../css/ProjectCard.css';

export default function ProjectCard() {
  return (
    <section styleName="project-card-section">
      <div styleName="project-card">
        <div styleName="project-card__content">
          <div styleName="project-card__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
              <path d="m21 21-4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="11" cy="11" r="3" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <h2 styleName="project-card__title">Placement &amp; Internship</h2>
          <p styleName="project-card__desc">
            Digitizes the<br />
            recruitment drive<br />
            for campus junta with ease
          </p>
          <a href="#" styleName="project-card__link">read more.</a>
          <p styleName="project-card__tag">*INFORMATION MANAGEMENT GROUP</p>
        </div>

        <div styleName="project-card__mockup">
          <div styleName="mockup-window mockup-window--top">
            <div styleName="mockup-window__bar">
              <span styleName="dot"></span><span styleName="dot"></span><span styleName="dot"></span>
            </div>
            <div styleName="mockup-window__body">
              <div styleName="mockup-line mockup-line--short"></div>
              <div styleName="mockup-line"></div>
              <div styleName="mockup-line mockup-line--med"></div>
            </div>
          </div>
          <div styleName="mockup-window mockup-window--bottom">
            <div styleName="mockup-window__bar">
              <span styleName="dot"></span><span styleName="dot"></span><span styleName="dot"></span>
            </div>
            <div styleName="mockup-window__body">
              <div styleName="mockup-table">
                {[1,2,3,4].map(i => (
                  <div key={i} styleName="mockup-table__row">
                    <div styleName="mockup-cell mockup-cell--wide"></div>
                    <div styleName="mockup-cell"></div>
                    <div styleName="mockup-cell mockup-cell--btn"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
