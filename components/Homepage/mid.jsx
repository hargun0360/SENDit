import React from "react";
import { Link } from 'react-router-dom';

function Contentsec(props){
    return(<> 
    
    <div className="content1">
        <div className="paragraph3">
        <h2 className="content-heading" >{props.title}</h2>
            <p>{props.Content}</p>
            <div className="content-linking">
        <Link to={props.link} className="Home-Link">Get Started</Link>
        </div>
        </div>

        
        <div className="content-img">
            <img src={props.image} />
        </div>
        

        </div>

    </>);
}

export default Contentsec; 