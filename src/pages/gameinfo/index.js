import React from 'react'
import './style.css'
import GamesList from '../../components/storeComponents/gamesList'
import { FaSearch } from 'react-icons/fa'
import NavbarBack from '../../components/navbarBack'
import HeaderInfo from '../../components/infoComponent/headerinfo'
import ImgInfo from '../../components/infoComponent/imginfo'


const GameInfo = () => {
    return (
        <>
            <NavbarBack />
            <main>
                <HeaderInfo />
            </main>
            <main>
                <ImgInfo />
            </main>


        </>
    )
}

export default GameInfo