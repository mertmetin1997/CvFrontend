import React from 'react'
import About from './About'
import Awards from './Awards'
import Interests from './Interests'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'


const PageContent = () => {
  return (
    <>
      {/* Page Content*/}
  <div className="container-fluid p-0">
    <About/>
    <hr className="m-0" />
    <Experience/>
    <hr className="m-0" />
    <Education/>
    <hr className="m-0" />
    <Skills/>
    <hr className="m-0" />
    <Interests/>
    <hr className="m-0" />
    <Awards/>
    
  </div>
    </>
  )
}

export default PageContent
