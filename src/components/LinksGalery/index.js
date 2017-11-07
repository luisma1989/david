import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LinkGalery.css'

class LinkGalery extends Component {
  itemGalery = (section, index) => {
    return (
      <div key={index} className={`link ${section.class}`}>
        <h3>{section.title}</h3>
        <p>{section.text}</p>
      </div>
    )
  }

  render () {
    const { linksGaleryData } = this.props
    return (
      <div className='links-galery'>
        <h2 className='section-header'>Work.</h2>
        { linksGaleryData.sections.map((section, index) => this.itemGalery(section, index)) }
      </div>
    )
  }
}

LinkGalery.proptypes = {
  linksGaleryData: PropTypes.arrayOf.isRequired
}

export default LinkGalery
