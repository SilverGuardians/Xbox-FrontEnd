import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';


const GamesList = () => {
  return (
    <div className='games-container'>
      <div className='games-content'>
        <div className='games-box'>
          <p>testo</p>
        </div>
        <div className='games-box'>
          <img src='https://wallpaperaccess.com/full/2486353.jpg' alt='first-image'></img>
        </div>
        <div className='games-box'>
          <img src='https://images.hdqwalls.com/wallpapers/ghostwire-tokyo-sc.jpg' alt='second-image'></img>
        </div>
        <div className='games-box'>
          <img src='https://4kwallpapers.com/images/wallpapers/battlefield-2042-e3-2021-pc-games-playstation-4-playstation-2880x1800-5613.jpg' alt='third-image'></img>
        </div>
        
        <div className='games-box'>
          <Link to="/gameinfo">
          <img src='https://cdn.kanobu.ru/games/85c39c41-5056-4744-8735-db51c091a21f.jpg' alt='fourth-image'></img>
          </Link>
        </div>
        
        <div className='games-box'>

        </div>
        <div className='games-box'>

        </div>

      </div>
    </div>
  )
}

export default GamesList
