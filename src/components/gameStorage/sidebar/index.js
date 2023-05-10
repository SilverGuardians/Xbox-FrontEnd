import React, { useState } from 'react'
import './style.css'
import ProflieComponent from '../../profileComponent'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='sidebar'>
            <div className='side-info'>
                <ProflieComponent />
            </div>
            <div className='side-search'>
                <input type='text' placeholder='Buscar'/>
            </div>
            <div className='side-menu'>
                <ul>
                    <li>
                        <h3>Jogos</h3>
                    </li>
                    <li>
                        <h3>Aplicativos</h3>
                    </li>
                    <li>
                        <h3>Biblioteca Completa</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default Sidebar
