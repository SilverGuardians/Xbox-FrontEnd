import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';


const HeaderInfo = () => {
    return (
      <div className='info-container'>
        <div className='gamebox-img'>
          <img src='https://gamehall.com.br/wp-content/uploads/2018/02/Dark-Souls-III-KeyArt-Ember.jpg' alt='ds3'>
            
          </img>
        </div>
        <div className='titlegame'>
          <h2>Dark Souls 3</h2> 
          <h3>FromSoftware</h3>
          <h4>4,9 <span className='s2'>★</span></h4>
        <div className='btdownload'>
        <button>
          <span>instalar</span> 
          
        </button>
        </div>
        </div>
      </div>
    )
  }
  
  export default HeaderInfo