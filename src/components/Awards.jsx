import React, { useContext } from "react";
import { AwardsContext } from "../contexts/AwardsContext";

const Awards = () => {
  const { awards } = useContext(AwardsContext);

  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Ödüller &amp; Sertifikalar</h2>
        <h4>İstanbul Eğitim Akademi</h4>

        <ul className="fa-ul mb-0">
          {awards.map((award) => (
            <li key={award.id}>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning" />
              </span>
              {award?.description?.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
