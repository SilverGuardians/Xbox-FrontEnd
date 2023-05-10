import React from 'react'
import './style.css'
import Sidebar from '../../components/gameStorage/sidebar'


const GameStorage = () => {
    return (
        <div className='gamestorage-grid'>
            <div>
                <Sidebar />
            </div>
            <div>
                <h3>Meus Jogos</h3>
            </div>
        </div>
    )
}

export default GameStorage
