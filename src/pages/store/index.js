import React from 'react'
import { Link } from 'react-router-dom'
import Annoucement from '../../components/storeComponents/announcement'
import Navbar from '../../components/navbar'
import Voltar from '../../assets/voltar.png'
import './style.css'

const Store = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className='store-container'>
                    <div className="store-title">
                        <h2>Microsoft Store</h2>
                    </div>
                    <div className='back'>
                        <Link to='/'><img src={Voltar} alt="Voltar" /></Link>     
                    </div>
                    <Annoucement />
                </div>
            </main>
        </>
    )
}

export default Store