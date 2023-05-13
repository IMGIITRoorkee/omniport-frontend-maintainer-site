import React, { Component } from 'react'

import MainSection from './sections/header/main-section'
import ProjectSection from './sections/project/project-section'
import { BlogSectionMainPage } from '../../containers/blog/blogPageLoader'
import InfoSection from './sections/info/info-section'

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { apiInfoData } = this.props
    const {
      contactData,
      footerData,
      locationData,
      projectData,
      socialData,
    } = apiInfoData
    return (
      <div>
        <MainSection />
        <ProjectSection project={projectData.results} />
        <BlogSectionMainPage />
        <InfoSection
          location={locationData}
          contact={contactData}
          social={socialData}
          about={footerData}
        />
      </div>
    )
  }
}

export default MainPage
