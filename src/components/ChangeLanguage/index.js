import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Headroom from 'react-headroom'

import ruIcon from './assets/ru_icon.png'
import esIcon from './assets/es_icon.png'

import './ChangeLanguage.css'

class ChangeLanguage extends Component {
  handleChange = (event) => {
    // TODO: lo lógico será cambiar de ruta
    this.props.switchLanguage(event.target.name)
    this.setState({i18n: {locale: event.target.name}})
  }

  render () {
    return (
      <Headroom>
        <img
          className='language-icon'
          alt='Icono de España'
          src={esIcon} 
          name='es'
          onClick={this.handleChange} />
        <img
          className='language-icon'
          alt='Icono de Rusia'
          src={ruIcon} 
          name='ru'
          onClick={this.handleChange}/>
      </Headroom>
    )
  }
}

ChangeLanguage.propTypes = {
  intl: PropTypes.object,
  switchLanguage: PropTypes.func.isRequired
}

export default ChangeLanguage
