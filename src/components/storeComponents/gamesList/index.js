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
            <img src='https://www.consolewars.de/images/image.php?id=194324' alt='sixth-image'></img>
            <div className='games-info'>
              <h3>The Last Case of Benedict Fox</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://store-images.s-microsoft.com/image/apps.60545.13583893181712151.ae3fa021-2217-4bdd-ac57-e70dd61443d7.0d7e5cc5-31c3-4a7e-9207-8e143ca770f0' alt='second-image'></img>
            <div className='games-info'>
              <h3>RedFall</h3>
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
              <img src='https://static-pepper.dealabs.com/threads/raw/3wcyL/2528727_1/re/768x768/qt/60/2528727_1.jpg' alt='fourth-image'></img>
            </Link>
            <div className='games-info'>
              <h3>StarField</h3>
            </div>
          </div>

          <div className='games-box'>
            <img src='https://cdn.wccftech.com/wp-content/uploads/2021/12/hHQ63Mq.jpeg' alt='fifth-image' ></img>
            <div className='games-info'>
              <h3>Stalker 2: Heart of Chornobyl</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://bleedingcool.com/wp-content/uploads/2023/04/Ravenlok-Main-Art-900x900.jpg' alt='first-image'></img>
            <div className='games-info'>
              <h3>Ravenlok</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://w0.peakpx.com/wallpaper/598/502/HD-wallpaper-forza-horizon-5-fh5.jpg' alt='first-image'></img>
            <div className='games-info'>
              <h3>Ravenlok</h3>
            </div>
          </div>


        </div>
        <div className='games-content'>
          <div className='games-box-plus'>
            <p>RPG</p>
            <div>
              <p>Mostrar Tudo</p>
              <FaPlus className='icon' />
            </div>
          </div>
          <div className='games-box'>
            <img src='https://upload.wikimedia.org/wikipedia/pt/5/52/Persona_5_capa.jpg' alt='sixth-image'></img>
            <div className='games-info'>
              <h3>Persona 5</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2023/04/CassetteBeasts_Xbox_Packshot_720x1080-a457d10e4282ab0f8cba.jpg?fit=720%2C1080&ssl=1  ' alt='second-image'></img>
            <div className='games-info'>
              <h3>Cassette Beasts</h3>
            </div>
          </div>
          <div className='games-box'>
            <img src='https://i0.wp.com/www.alldigitales.com/wp-content/uploads/2022/07/digimon-survive-e1659074764682.jpeg?fit=580%2C670&ssl=1' alt='third-image'></img>
            <div className='games-info'>
              <h3>Digimon Survive</h3>
            </div>
          </div>

          <div className='games-box'>
            <Link to="/gameinfo">
              <img src='https://assets-prd.ignimgs.com/2022/01/07/fable-lost-chapters-button-1641528169204.jpg' alt='fourth-image'></img>
            </Link>
            <div className='games-info'>
              <h3>Fable Lost Chapters</h3>
            </div>
          </div>

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
