import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import './Header.css'

class Header extends React.Component {
  componentDidMount () {
    const widnowHeight = $(window).height()
    const containerHeight = $('.home-container').height()
    const padTop = widnowHeight - containerHeight
    $('.home-container').css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    })
  }

  render () {
    const { headerData } = this.props
    return (
      <article className="header parallax">
        <div className="container home-container">
          <div className="home_text wow bounceIn">
            <h1 className="title">
              <span>{headerData.name}</span>
              <br/>
              {headerData.apellidos}
            </h1>
          </div>
        </div>
      </article>
    )
  }
}


Header.proptypes = {
  headerData: PropTypes.object.isRequired
}

export default Header
