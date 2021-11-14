import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';

function Featurebox(props){
    return(
        <>

            <div className="feature-box">
                <div className="img-logo">
                    <img src={props.image}/>
                </div>
                <div className="feature-text">
                    <h2>{props.title}</h2>
                    <p className="paragraph2">{props.content}</p>
                </div>
                <div className="Linking1">
                    <Link to={props.link} className="Home-Link">Get Started</Link>
                </div>
            </div>

        </>
    );
}

export default Featurebox;