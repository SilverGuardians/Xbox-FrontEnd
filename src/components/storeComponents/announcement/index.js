import React from 'react'
import { Link } from 'react-router-dom';
import CardProps from "../../storeComponents/gamesList/data";
import './style.css'


const Annoucement = () => {

  var params = CardProps.filter(item => {
    return item.type == "navbar"
  })

  return (
    <div className='grid-annoucement'>
      <div className='grid-item'>

        <img src={params[0].itens.item1.image} alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>{params[0].itens.item1.nome}</h3>
          <Link to={`/gameinfo/${params[0].itens.item1.id}`}>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>
      <div className='grid-item'>
        <img src={params[0].itens.item2.image} alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>{params[0].itens.item1.nome}</h3>
          <Link to={`/gameinfo/${params[0].itens.item2.id}`}>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>
      <div className='grid-item'>
        <img src={params[0].itens.item3.image} alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>{params[0].itens.item1.nome}</h3>
          <Link to={`/gameinfo/${params[0].itens.item3.id}`}>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Annoucement