import React from 'react'
import ProgramLanguageAndTool from './ProgramLanguageAndTool'
import WorkFlow from './WorkFlow'

const Skills = () => {
  return (
    <>
      <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Yetenekler</h2>
        <ProgramLanguageAndTool/>
        <WorkFlow/>
      </div>
    </section>
    </>
  )
}

export default Skills
