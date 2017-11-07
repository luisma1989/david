import React, {Component} from 'react'
import './Social.css'

const icons = [
  'icon-facebook',
  'icon-instagram',
  'icon-linkedin',
  'icon-twitter',
  'icon-youtube'
]

class Social extends Component {
  render () {
    return (
      <article className='__social'>
        {
          icons.map((icon, index) => {
            return (
              <div className='__row' key={index}>
                <span className={`icon ${icon}`}></span>
              </div>
            )
          })
        }
      </article>
    )
  }
}

export default Social
