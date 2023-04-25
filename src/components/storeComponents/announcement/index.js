import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Annoucement = () => {

  return (
    <div className='grid-annoucement'>
      <div className='grid-item'>
        <img src='https://th.bing.com/th/id/R.f325bb20242b1b6ddca6a74ea47fff54?rik=Q%2feiMBkn%2fqKYzA&pid=ImgRaw&r=0' alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>Devil May Cry 5</h3>
          <Link to='/gameinfo'>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>
      <div className='grid-item'>
        <img src='https://th.bing.com/th/id/R.cd61b81452085da968a849f5488de144?rik=AZ%2bmQH6qa8kMSg&pid=ImgRaw&r=0' alt='teste-1'></img>
        <div className='annoucement-info'>
          <h3>Battlefield 2042</h3>
          <Link to='/gameinfo'>
            <p>Ver mais</p>
          </Link>
        </div>
      </div>
      <div className='grid-item'>
        <img src='https://th.bing.com/th/id/OIP.JePE4a0UQPJqaWWbCVotCwHaEK?pid=ImgDet&rs=1' alt='teste-1'></img>
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