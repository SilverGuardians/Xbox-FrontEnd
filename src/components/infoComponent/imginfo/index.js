import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import Arrow1 from '../../../assets/avancar.png';
import Arrow2 from '../../../assets/voltar2.png';
const ImgInfo = () => {
  return (

    <div className='img-container'>
      <li className='tab'>
        <div className='grid-imginfo'>
          <img src='https://images4.alphacoders.com/652/thumbbig-652702.webp' alt='imagemds3 1' />
        </div>
      </li>

      <li className='tab'>
        <div className='grid-imginfo'>
          <img src='https://images8.alphacoders.com/678/thumbbig-678476.webp' alt='imagemds3 2' />
        </div>
      </li>

      <li className='tab'>
        <div className='grid-imginfo'>
          <img src='https://images2.alphacoders.com/728/thumbbig-728208.webp' alt='imagemds3 3' />
        </div>
      </li>

      <li className='tab'>
        <div className='grid-imginfo'>
          <img src='https://images8.alphacoders.com/743/thumbbig-743497.webp' alt='imagemds3 4' />
        </div>
      </li>

      <li className='tab'>
        <div className='grid-imginfo'>
          <img src='https://images8.alphacoders.com/840/thumbbig-840489.webp' alt='imagemds3 5' />
        </div>
      </li>
      <img src={Arrow1} className='right-icon' />
      <img src={Arrow2} className='left-icon' />

    </div>
  )
}

export default ImgInfo