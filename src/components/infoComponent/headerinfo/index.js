import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';


const HeaderInfo = (info) => {
  console.log(info.info[0].nome)
    return (
      <div className='info-container'>
        <div className='gamebox-img'>
          <img src={info.info[0].image} alt='ds3'>
            
          </img>
        </div>
        <div className='titlegame'>
          <h2>{info.info[0].nome}</h2> 
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