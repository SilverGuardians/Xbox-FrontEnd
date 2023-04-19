import React from 'react'
import ProfileImg from '../../assets/profile.png'
import './style.css'

const ProflieComponent = () => {
  return (
    <div className='profileContent'>
        <img src={ProfileImg} alt='profile img' />
        <h2>Nome do Carinha</h2>
    </div>
  )
}

export default ProflieComponent