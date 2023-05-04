import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Annoucement = () => {

  return (
    <div className='grid-annoucement'>
      <div className='grid-item'>
        {/* Imagem de fundo da tela de anuncio */}
        {/* <img src='https://assetsio.reedpopcdn.com/xbox-game-pass_odUfBJj.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp' alt='teste-1'></img> */}
        <img src='https://cdn1.epicgames.com/undefined/offer/RL---S1-2560x1440-dff0b62be58a38af1355b211ac66f895.jpg' alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>Raymen Legends</h3>
          <Link to='/gameinfo'>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>
      <div className='grid-item'>
        <img src='https://preview.redd.it/what-ai-thinks-of-dead-cells-i-think-the-style-is-beautiful-v0-gx2llf2ubv1a1.png?width=640&crop=smart&auto=webp&s=dbb9efb4ac301c3cc7b362c27b34dbc3dd194d49' alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>Dead Cells</h3>
          <Link to='/gameinfo'>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>
      <div className='grid-item'>
        <img src='https://www.centralxbox.com.br/wp-content/uploads/2018/08/unravel-2-cover.jpg' alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>Ghostwire</h3>
          <Link to='/gameinfo'>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Annoucement