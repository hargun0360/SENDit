import React from 'react'
import '../Homepage/navbar.css'
import { NavLink } from 'react-router-dom'
import imag from './mailit1 (1).png'
import './Homenavbar.css'
import { Link } from 'react-router-dom'
const Homenavbar = () => {
    return (
        <>
            <nav className="nav-grid1">
                <div className="logo1" >
                    <div className="logo-image1">
                    <Link to="/"> <img src={imag} style={{ height: "100%", width: "100%" }}></img> </Link>
                    </div>
                    <div className="logo-title1">
                    <Link to="/" style={{color:"black",textDecoration:"none"}}> <h3 className="title1">SENDit</h3> </Link>
                    </div>
                </div>

                <div className="nav-icons1">
                    <ul className="menu-box1">
                    
                        <li className="item1">
                            <NavLink to="/" activeClassName="activeLink"  className="text">Home</NavLink>
                        </li>
                        <li className="item1">
                            <NavLink to="/Manage" activeClassName="activeLink" className="text">Manage Groups</NavLink>
                        </li>
                        <li className="item1">
                            <NavLink to="/Error" activeClassName="activeLink" className="text">Premium</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="auth">
                    <ul className="authenticate">
                    
                        <li className="item1">
                            <NavLink to="/SignUp" className="text">Sign Up</NavLink>
                        </li>
                        <li className="item1">
                            <NavLink to="/SignIn" className="text">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Homenavbar;