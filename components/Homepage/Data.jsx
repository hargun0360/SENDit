import React from "react";
import {Redirect} from 'react-router-dom';

function Logout(){
    localStorage.removeItem('tokendata');
    localStorage.removeItem('response');

    return(<Redirect to={'/'}/>);

    // const history = useHistory();

    // setTimeout(() => {
    //     history.push("/");
    // }, 2000);

//     return(
//         <div>
            
//             <h1 style={{textAlign:"center",marginTop:"20%"}} id="h1">You are LogOut</h1>
            
//         </div>
//     );
}

export default Logout;