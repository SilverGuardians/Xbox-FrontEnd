import React, {useState} from 'react'
import './style.css'
import { SliderData } from './slider'
import {FaArrowAlt}


const Annoucement = () => {

const [current, setCurrent] = useState(0)
const length = slide.length



  return (
    <>
    {SliderData.map((slide, index) =>{
      return(
        <img src={slide.image} alt=''/>
      )
    })}
    </>
  )
}

export default Annoucement