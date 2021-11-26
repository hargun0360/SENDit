import React from "react";
import {Redirect} from 'react-router-dom';

function Logout(){
    localStorage.removeItem('tokendata');
    localStorage.removeItem('response');

    return(<Redirect to={'/'}/>);

}

export default Logout;