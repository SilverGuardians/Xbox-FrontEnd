import React from 'react'
import Annoucement from '../../components/storeComponents/announcement'
import Navbar from '../../components/navbar'
import Voltar from '../../assets/voltar.png'

const Store = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="store-title">
                    <h2>Microsoft Store</h2>
                </div>
                <div className='back'>
                    <a href="/"><img src={Voltar} alt="Voltar" /><h1>Informações do Show</h1></a>
                </div>
                <Annoucement />
            </main>
        </>
    )
}

export default Store