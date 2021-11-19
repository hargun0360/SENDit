import React from 'react'
import Homenav from '../Homepage/navbar'
import {BaseUrl} from '../../api/Baseurl'
import axios from 'axios';


function Error(){
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');
    const config = {
        method: "GET",
        url: BaseUrl() + "api/premium",
        headers: {
            "Content-Type": "application/json",
            Authorization: bearer
        }
       
    }
    
    axios(config).then((res) => {
        alert(res.data);
        document.getElementById("h1").innerHTML="Your premium account is active"
        
    });
    return(
        <div>
            <Homenav />
            <h1 style={{textAlign:"center",marginTop:"20%"}} id="h1"></h1>
            
        </div>
    );
}

export default Error;