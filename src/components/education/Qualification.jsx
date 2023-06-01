import { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Education & Experience</h2>
      <span className="section__subtitle">My grinding journey...</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__active qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-Stack Developer</h3>
                <span className="qualification__subtitle">
                  Tata Consultancy Services Ltd.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Nov. '21 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full-Stack Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  R2i2 Technologies
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jan. '21 - Jul. '21
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Content Writer</h3>
                <span className="qualification__subtitle">OtakuKart</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  May '20 - Dec. '20
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Graphic Design Intern</h3>
                <span className="qualification__subtitle">Alphabet Legal</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Mar. '18 - Apr. '18
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelors of Technology
                </h3>
                <span className="qualification__subtitle">
                  University of Engineering & Management (UEM), Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul. '16 - Jul. '20
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ISC - Class XII</h3>
                <span className="qualification__subtitle">
                  St. Augustine's Day School, Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Feb. '15 - Apr. '16
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ICSE - Class X</h3>
                <span className="qualification__subtitle">
                  St. Augustine's Day School, Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Feb. '13 - Mar. '14
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
