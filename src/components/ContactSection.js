import React from 'react';
import '../css/ContactSection.css';

const socials = [
  {
    name: 'LinkedIn',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="m2 7 10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section styleName="contact-section">
      <div styleName="contact-section__inner">
        <div styleName="contact-section__left">
          <h2 styleName="contact-section__heading">CONTACT US</h2>
          <div styleName="contact-section__address">
            <p>1st floor, ICC, IIT Roorkee</p>
            <p>Roorkee,</p>
            <p>Uttarakhand, India - 247667</p>
          </div>
          <div styleName="contact-section__year">
            <p>2026</p>
            <p>INFORMATION MANAGEMENT GROUP</p>
          </div>
        </div>

        <div styleName="contact-section__socials">
          {socials.map((s) => (
            <a key={s.name} href="#" styleName="social-tile" aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
