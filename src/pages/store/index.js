import React from 'react'
import { Link } from 'react-router-dom'
import Annoucement from '../../components/storeComponents/announcement'
import Navbar from '../../components/navbar'
import Voltar from '../../assets/voltar.png'
import './style.css'
import GamesList from '../../components/storeComponents/gamesList'

const Store = () => {
    return (
        <>
            <div className='background-image'>
                <Navbar />
                <main>
                    <div className="store-title">
                        <div className='back'>
                            <Link to='/'><img src={Voltar} alt="Voltar" /></Link>
                        </div>
                        <h2>Microsoft Store</h2>
                        <div></div>
                    </div>
                    <div>
                        <Annoucement />
                    </div>
                </main>
            </div>
            <hr className='line'></hr>
          
            <GamesList />
        </>
    )
}

export default Store