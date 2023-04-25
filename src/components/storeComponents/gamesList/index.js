import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa'


const GamesList = () => {
  return (
    <>
      <div className='games-container'>
        <div className="store-title">
          <div className='search'>
            <div className='search-icon'>
              <FaSearch />
            </div>
            <input type='test' placeholder='Buscar' />
          </div>
          <div></div>
        </div>
        <div className='games-content'>
          <div className='games-box-plus'>
            <p>Jogos Exclusivos</p>
            <div>
              <p>Mostrar Tudo</p>
              <FaPlus className='icon' />
            </div>
          </div>
          <div className='games-box'>
            <img src='https://i.pinimg.com/originals/0a/72/44/0a7244f33e9ba0ca5f1dd6f53b8b0ae2.jpg' alt='sixth-image'></img>
            <div className='games-info'>
              <h3>Mortal Kombat 11</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://images.hdqwalls.com/wallpapers/ghostwire-tokyo-sc.jpg' alt='second-image'></img>
            <div className='games-info'>
              <h3>Ghostwire Tokyo</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://4kwallpapers.com/images/wallpapers/battlefield-2042-e3-2021-pc-games-playstation-4-playstation-2880x1800-5613.jpg' alt='third-image'></img>
            <div className='games-info'>
              <h3>Battlefield 2042</h3>
            </div>
          </div>

          <div className='games-box'>
            <Link to="/gameinfo">
              <img src='https://cdn.kanobu.ru/games/85c39c41-5056-4744-8735-db51c091a21f.jpg' alt='fourth-image'></img>
            </Link>
            <div className='games-info'>
              <h3>Dark Souls III</h3>
            </div>
          </div>

          <div className='games-box'>
            <img src='https://vignette.wikia.nocookie.net/callofduty/images/1/15/ModernWarfare_Artwork_MW.jpg/revision/latest?cb=20190530170954' alt='fifth-image' ></img>
            <div className='games-info'>
              <h3>Call of Duty Modern Warfare</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://wallpaperaccess.com/full/2486353.jpg' alt='first-image'></img>
          </div>

        </div>
        <div className='games-content'>
          <div className='games-box-plus'>
            <p>Jogos Exclusivos</p>
            <div>
              <p>Mostrar Tudo</p>
              <FaPlus className='icon' />
            </div>
          </div>
          <div className='games-box'>
            <img src='https://i.pinimg.com/originals/0a/72/44/0a7244f33e9ba0ca5f1dd6f53b8b0ae2.jpg' alt='sixth-image'></img>
            <div className='games-info'>
              <h3>Mortal Kombat 11</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://images.hdqwalls.com/wallpapers/ghostwire-tokyo-sc.jpg' alt='second-image'></img>
            <div className='games-info'>
              <h3>Ghostwire Tokyo</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://4kwallpapers.com/images/wallpapers/battlefield-2042-e3-2021-pc-games-playstation-4-playstation-2880x1800-5613.jpg' alt='third-image'></img>
            <div className='games-info'>
              <h3>Battlefield 2042</h3>
            </div>
          </div>

          <div className='games-box'>
            <Link to="/gameinfo">
              <img src='https://cdn.kanobu.ru/games/85c39c41-5056-4744-8735-db51c091a21f.jpg' alt='fourth-image'></img>
            </Link>
            <div className='games-info'>
              <h3>Dark Souls III</h3>
            </div>
          </div>

          <div className='games-box'>
            <img src='https://vignette.wikia.nocookie.net/callofduty/images/1/15/ModernWarfare_Artwork_MW.jpg/revision/latest?cb=20190530170954' alt='fifth-image' ></img>
            <div className='games-info'>
              <h3>Call of Duty Modern Warfare</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://wallpaperaccess.com/full/2486353.jpg' alt='first-image'></img>
          </div>

        </div>
      </div>
      <div className='games-content-gray'>
        <div className='game-cont-info'>
          <div>
            <h2>Metroidvânia</h2>
            <p>Passear e explorar esses mundos épicos!</p>
          </div>
          <div>
            <a><FaPlus className='icon' />Ver mais</a>
          </div>
        </div>
        <div className='game-cont-gray'>
        <div className='games-box'>
            <img src='https://th.bing.com/th/id/OIP.7a1fK1EsVdx-5-REacwRZQHaLH?pid=ImgDet&w=533&h=800&rs=1' alt='sixth-image'></img>
            <div className='games-info'>
              <h3>Hollow Knight</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://th.bing.com/th/id/OIP.MRIzG2cXPAkTdASOpHmwGgHaLH?pid=ImgDet&rs=1' alt='second-image'></img>
            <div className='games-info'>
              <h3>Dead Cells</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://th.bing.com/th/id/R.32a1eb58778c80ff9a7571531938a247?rik=ssL%2fKo3nlyDYIA&riu=http%3a%2f%2fcdn3.dualshockers.com%2fwp-content%2fuploads%2f2016%2f03%2fOriDE_XBox_PosterArt_720x1080.jpg&ehk=X5hVuB7cj3snDw1HciGFVBhQFGjrzK6cN4RgMJ0dsP0%3d&risl=&pid=ImgRaw&r=0' alt='third-image'></img>
            <div className='games-info'>
              <h3>Ori and the Blind Forest</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='games-container'>
        <div className='games-content'>
          <div className='games-box-plus'>
            <p>Jogos Exclusivos</p>
            <div>
              <p>Mostrar Tudo</p>
              <FaPlus className='icon' />
            </div>
          </div>
          <div className='games-box'>
            <img src='https://i.pinimg.com/originals/0a/72/44/0a7244f33e9ba0ca5f1dd6f53b8b0ae2.jpg' alt='sixth-image'></img>
            <div className='games-info'>
              <h3>Mortal Kombat 11</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://images.hdqwalls.com/wallpapers/ghostwire-tokyo-sc.jpg' alt='second-image'></img>
            <div className='games-info'>
              <h3>Ghostwire Tokyo</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://4kwallpapers.com/images/wallpapers/battlefield-2042-e3-2021-pc-games-playstation-4-playstation-2880x1800-5613.jpg' alt='third-image'></img>
            <div className='games-info'>
              <h3>Battlefield 2042</h3>
            </div>
          </div>

          <div className='games-box'>
            <Link to="/gameinfo">
              <img src='https://cdn.kanobu.ru/games/85c39c41-5056-4744-8735-db51c091a21f.jpg' alt='fourth-image'></img>
            </Link>
            <div className='games-info'>
              <h3>Dark Souls III</h3>
            </div>
          </div>

          <div className='games-box'>
            <img src='https://vignette.wikia.nocookie.net/callofduty/images/1/15/ModernWarfare_Artwork_MW.jpg/revision/latest?cb=20190530170954' alt='fifth-image' ></img>
            <div className='games-info'>
              <h3>Call of Duty Modern Warfare</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://wallpaperaccess.com/full/2486353.jpg' alt='first-image'></img>
          </div>

        </div>
      </div>
    </>
  )
}

export default GamesList
