import React, { useContext } from 'react'
import { InterestContext } from '../contexts/InterestContext'

const Interests = () => {
  const {ınterests} = useContext(InterestContext);
  return (
      <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Hobi ve İlgi Alanları</h2>
        {
          ınterests.map(ınterest => <p className="mb-0" key={ınterest?.id}>{ınterest?.description}</p>)
        }
      </div>
    </section>

  )
}

export default Interests
