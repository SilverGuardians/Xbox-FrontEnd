import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Voltar from '../../assets/voltar.png'

function NavbarBack() {
    return (
        <>
            <nav className="navbarback">
                <div className="nav-backcontainer">
                    <div className="nav-back">
                        <Link to='/'>
                            <img src={Voltar} alt="Voltar" />
                        </Link>
                    </div>
                    <>
                    </>
                    <div className="nav-hour">
                        <h2>10:99</h2>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavbarBack;
