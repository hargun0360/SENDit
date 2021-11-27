import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";

const style = {
    color: 'white'
    
};

function Navbar(props) {


    const [isname, setisname] = useState(true);

    function handleClick() {
        if (props.name === "Sign Up") {
            setisname(false);
        }
        else if (props.name === "Sign In") {
            setisname(true);
        }

    }

    return (

        <div className="navbar">

            <nav className="navb">
                <ul className="navul">
                 <li className="send">
                 <Link to="/" style={{color:"black",textDecoration:"none"}}> SENDit </Link>
                    </li> 
                    <li className="navbutton">

                        {isname ? <Link to="/SignIn">
                            <button type="button" id="auth-button1" className="btn btn-light" onClick={handleClick}>{props.name}</button>
                        </Link> : <Link to="/SignUp">
                            <button type="button" id="auth-button2" className="btn btn-light" onClick={handleClick}>{props.name}</button>
                        </Link>}
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;