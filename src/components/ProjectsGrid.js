import React from 'react';
import '../css/ProjectsGrid.css';

export default function ProjectsGrid() {
  return (
    <section styleName="projects-grid-section">
      <div styleName="projects-grid">
        <div styleName="project-tile"></div>
        <div styleName="project-tile project-tile--mid"></div>
        <div styleName="project-tile"></div>
      </div>
      <p styleName="projects-grid__tag">*INFORMATION MANAGEMENT GROUP</p>
    </section>
  )
}
