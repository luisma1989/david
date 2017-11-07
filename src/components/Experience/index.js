import React from 'react'
import PropTypes from 'prop-types'

import './Experience.css'

function Experience ({ experienceData }) {
  return (
    <article className="__experience">
      <div className="__content">
        <h1 className="__title">{ experienceData.title}</h1>
        <h2 className="__subtitle">{ experienceData.subtitle}</h2>
        <div className="__contentRow">
          <ol className="timeline">
            { experienceData.jobs.map(function (job) {
            return <li className="timeline__entry" key={job.id}>
                <span className="timeline__id">{job.time}</span>
                <div className={`job timeline__content ${job.class}`}>
                  <h1 className="e3 timeline__heading">{job.title}</h1>
                  <h2 className="timeline__subtitle">{job.subtitle}</h2>
                  <p className="p3 timeline__text">{job.text}</p>
                </div>
              </li>
            })}
          </ol>
        </div>
      </div>
    </article>
  )
}

Experience.propTypes = {
  experienceData: PropTypes.object.isRequired
}

export default Experience
