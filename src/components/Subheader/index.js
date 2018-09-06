import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import './subheader.css'
import image from './assets/david.png'

const Subheader = ({ subheaderData }) => {
  return (
    <article className='subheader'>
      <div className='container'>
        <Parallax offsetYMax={170} offsetYMin={10} slowerScrollRate tag='figure'>
          <div className='testimony'>
            <h2 className='h2-navy'>
              {subheaderData.title}
            </h2>
            <p>            
              {subheaderData.text}
            </p>
          </div>
        </Parallax>
        <Parallax offsetYMax={40} offsetYMin={0} slowerScrollRate tag='figure'>
          <div className='image-subheader'>
            <img src={image} alt='' />
          </div>
        </Parallax>
      </div>
    </article>
  )
}

export default Subheader
