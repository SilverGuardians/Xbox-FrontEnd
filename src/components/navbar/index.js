import { React, useState } from 'react'
import './style.css'
import ProflieComponent from '../profileComponent'


function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <ProflieComponent />
                    </div>
                   
                    <div className="nav-hour">
                        <h2>99:99</h2>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
