import React from 'react'
import '../Homepage/navbar.css'
import {NavLink} from 'react-router-dom'
import imag from './mailit1 (1).png'
import { Link } from 'react-router-dom'

const Homenav = () => {
    return (
        <>
            <nav className="nav-grid">
                <div className="logo" >
                    <div className="logo-image">
                       <Link to="/"> <img src={imag} style={{height:"100%",width:"100%"}}></img></Link>
                    </div>
                    <div className="logo-title">
                    <Link to="/" style={{color:"black",textDecoration:"none"}}> <h3 className="title">SENDit</h3></Link>
                    </div>
                </div>

                <div className="nav-icons">
                    <ul className="menu-box">
                        <li className="item">
                            <NavLink to="/"  className="text">Home</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/Manage" activeClassName="activeLink" className="text">Manage Groups</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/Error" activeClassName="activeLink" className="text">Premium</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/data" className="text">LogOut</NavLink>
                            
                                
                            
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Homenav;