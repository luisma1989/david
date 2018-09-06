import React from 'react'
import PropTypes from 'prop-types'
import WOW from 'wowjs'

import './About.css'

class About extends React.Component {
  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    const { aboutData } = this.props

    return (
      <article className='about page'>
        <div className='row_about'>
          <div className='info'>
            <h2 className='smalltitle'>{aboutData.title}</h2>
            <p className='p4 wow zoomIn'>{aboutData.text}</p>
          </div>
        </div>
        <div className='row_about'>
          <div className='__contentImage'></div>
        </div>
      </article>
    )
  }
}

About.propTypes = {
  aboutData: PropTypes.object.isRequired
}

export default About
