import React from 'react'
import './style.css'
import GamesList from '../../components/storeComponents/gamesList'
import { FaSearch } from 'react-icons/fa'
import NavbarBack from '../../components/navbarBack'
import HeaderInfo from '../../components/infoComponent/headerinfo'


const GameInfo = () => {
    return (
        <>
            <NavbarBack />
            <HeaderInfo />

            <main>
                <div className="store-title">
                    <div className='search'>
                        <div className='search-icon'>
                            <FaSearch />
                        </div>
                        <input type='test' placeholder='Buscar' />
                    </div>
                    <div></div>
                </div>
                <GamesList />
            </main>
        </>
    )
}

export default GameInfo