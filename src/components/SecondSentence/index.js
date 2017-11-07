import React from 'react'
import PropTypes from 'prop-types'
import './Sentence.css'

function SecondSentence ({ secondSentenceData }) {
  return (
    <article className="__secondSentence">
    <p className="smalltitle">{ secondSentenceData.title }</p>
      <div className="__content">
        <span className="span.icon.icon-review"></span>
        <div className="phrase">
          <p>{ secondSentenceData.text }</p>
        </div>
      </div>
    </article>
  )
}

SecondSentence.proptypes = {
  secondSentenceData: PropTypes.object.isRequired
}

export default SecondSentence
