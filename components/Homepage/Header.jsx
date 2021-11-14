import React from 'react'
import Homenavbar from './Homenavbar'
import './header.css'
import { Link } from 'react-router-dom';
import Features from './Features';


function Header() {
    return (
        <>
            <div id="main-Page">
                <Homenavbar />
                <div className="name">
                    <h1>Keep Sending Mails....</h1>

                </div>
                <div className="Linking">
                    <Link to="/SignUp" className="Home-Link">Get Started</Link>
                </div>

                <div className="content-home">
                    <p className="paragraph1">If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content). The presence of the inset keyword changes the shadow to one inside the frame (as if the content was depressed inside the box).</p>
                </div>

                <Features />
            </div>
            

        </>
    );

}


export default Header;
