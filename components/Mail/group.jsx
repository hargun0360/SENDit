import React, { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import { obj} from './csv'
import {BaseUrl} from '../../api/Baseurl'
import axios from 'axios';




function Group() {
    // localStorage.removeItem("response");
    
    const [text, setText] = useState("");
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');
   

    const handleInputs = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            
                <input type="text"   size="35" className="groupName" placeholder="Enter Group Name" value={text} onChange={handleInputs}></input>
                <button className="group-button" style={{display:"block"}} onClick={(e) => {
                    e.preventDefault()
                    
                    
                    const configuration = {
                        method: "POST",
                        url: BaseUrl() + "api/group/unique",
                        headers: {
                            "content-Type": "application/json",
                            Authorization: bearer
                        },
                        data: {
                            groupName:text
                        }
                    }
                    axios(configuration).then((res) => {
                        console.log(res);
                        localStorage.setItem('response',res.data);
                        if(res.data==="Please enter a group Name"){
                            alert("Please enter a group Name");
                        }
                        if(res.data==="Please choose another name"){
                            alert("Please choose another name");
                        }
                        if(res.data==="Added the groupName successfully now upload the mailAddresses"){
                            alert("Added the groupName successfully now upload the mailAddresses");
                        }
                        
                        
                    });
                    
                    let groupn=text;
                    obj(groupn);
                

                }}>Submit</button>
                
                

        </>
    );
}

export default Group;


{/* {result!==null?<CSV tex={result}/>:<CSV tex={null} />} */}