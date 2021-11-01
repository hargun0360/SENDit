import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

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
                        SENDit
                    </li>
                    <li className="navbutton">

                        {isname ? <Link to="/SignIn">
                            <button type="button" className="btn3" onClick={handleClick}><span style={style}>{props.name}</span></button>
                        </Link> : <Link to="/">
                            <button type="button" className="btn3" onClick={handleClick}><span style={style}>{props.name}</span></button>
                        </Link>}
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;