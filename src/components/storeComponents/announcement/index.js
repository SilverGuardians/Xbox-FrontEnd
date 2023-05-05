import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardProps from '../../storeComponents/gamesList/data';
import './style.css';

const Annoucement = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => (count % 3) + 1);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const items = CardProps.filter((item) => item.type === 'navbar')[0].itens;
  const item2Index = (count % 3) + 1;
  const item3Index = (item2Index % 3) + 1;

  return (
    <div className='grid-annoucement'>
      <div className='grid-item'>
  
        <img src={items['item' + count].image}alt='teste-1'></img>
        <div className='annoucement-info'>
        <h3>{items['item' + count].nome}</h3>
        <Link to={`/gameinfo/${items['item' + count].id}`}>
              <p>Ver mais</p>
            </Link>
        </div>
      </div>
  
      <div className='grid-item'>
  
        <img src={items['item' +  item2Index].image}alt='teste-1'></img>
        <div className='annoucement-info'>
        <h3>{items['item' + count].nome}</h3>
        <Link to={`/gameinfo/${items['item' + count].id}`}>
              <p>Ver mais</p>
            </Link>
        </div>
      </div>
  
      <div className='grid-item'>
  
        <img src={items['item' +  item3Index].image}alt='teste-1'></img>
        <div className='annoucement-info'>
        <h3>{items['item' + count].nome}</h3>
        <Link to={`/gameinfo/${items['item' + count].id}`}>
              <p>Ver mais</p>
            </Link>
        </div>
      </div>
    </div>
  )
};

export default Annoucement;


