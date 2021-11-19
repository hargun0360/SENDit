import {useHistory} from "react-router-dom"
import React from "react";

function Logout(){
    localStorage.removeItem('tokendata');
    localStorage.removeItem('response');
    const history = useHistory();

    setTimeout(() => {
        history.push("/");
    }, 2000);

    return(
        <div>
            
            <h1 style={{textAlign:"center",marginTop:"20%"}} id="h1">You are LogOut</h1>
            
        </div>
    );
}

export default Logout;