import React from 'react'
import Homenav from '../Homepage/navbar'

function Error(){
    return(
        <div>
            <Homenav />
            {/* <h1 style={{textAlign:"center",marginTop:"20%"}}>OOps!! Page Is Not Found</h1> */}
            <h1 style={{textAlign:"center",marginTop:"20%"}}>Home Page</h1>
        </div>
    );
}

export default Error;