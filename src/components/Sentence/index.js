import React from 'react'
import PropTypes from 'prop-types'

import './Sentence.css'

function Sentence ({ sentenceData }) {
    return (
      <article className="__sentence">
        <div className="__content">
          <span className="span.smalltitle">{ sentenceData.title }</span>
          <span className="span.icon.icon-review"></span>
          <div className="phrase">
            <p>{ sentenceData.text }</p>
          </div>
        </div>
      </article>
    )
}

Sentence.proptypes = {
    sentenceData: PropTypes.object.isRequired
  }
  

export default Sentence
