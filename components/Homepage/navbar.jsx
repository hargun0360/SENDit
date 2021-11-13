import React from 'react'
import '../Homepage/navbar.css'
import {NavLink} from 'react-router-dom'
import imag from './mailit1 (1).png'

const Homenav = () => {
    return (
        <>
            <nav className="nav-grid">
                <div className="logo" >
                    <div className="logo-image">
                        <img src={imag} style={{height:"100%",width:"100%"}}></img>
                    </div>
                    <div className="logo-title">
                        <h3 className="title">SENDit</h3>
                    </div>
                </div>

                <div className="nav-icons">
                    <ul className="menu-box">
                        <li className="item">
                            <NavLink to="/" className="text">Shedule Mail</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/about" className="text">Templates</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/test" className="text">Manage Groups</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/contact" className="text">Premium</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/contact" className="text">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Homenav;