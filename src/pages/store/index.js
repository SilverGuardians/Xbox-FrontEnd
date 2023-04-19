import React from 'react'
import { Link } from 'react-router-dom'
import Annoucement from '../../components/storeComponents/announcement'
import Navbar from '../../components/navbar'
import Voltar from '../../assets/voltar.png'
import './style.css'
import { SliderData } from '../../components/storeComponents/announcement/slider'
import GamesList from '../../components/storeComponents/gamesList'

const Store = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="store-title">
                    <div className='back'>
                        <Link to='/'><img src={Voltar} alt="Voltar" /></Link>
                    </div>
                    <h2>Microsoft Store</h2>
                    <div></div>
                </div>
                <Annoucement slides={SliderData} />
            </main>
            <main>
                <div className="store-title">
                    <div></div>
                    <h2>Jogos Exclusivos</h2>
                    <div></div>
                </div>
                <GamesList />
            </main>
        </>
    )
}

export default Store