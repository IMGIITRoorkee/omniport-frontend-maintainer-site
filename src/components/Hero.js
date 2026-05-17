import React from 'react';
import '../css/Hero.css';

export default function Hero() {
  return (
    <section styleName="hero-section">
      <div styleName="hero-card">
        <div styleName="hero-card__text">
          <h1 styleName="hero-card__heading">
            WE PUT THE<br />
            TECHNOLOGY IN<br />
            INDIAN INSTITUTE<br />
            OF TECHNOLOGY
          </h1>
          <p styleName="hero-card__tag">*INFORMATION MANAGEMENT GROUP</p>
        </div>

        <div styleName="hero-card__visual">
          <div styleName="cube-cluster">
            <div styleName="cube cube--lg"></div>
            <div styleName="cube cube--md cube--tl"></div>
            <div styleName="cube cube--sm cube--tr"></div>
            <div styleName="cube cube--md cube--bl"></div>
            <div styleName="cube cube--sm cube--br"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
