import React, { useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {BaseUrl} from '../../api/Baseurl'
// import {obj} from './csv'


function GroupD() {
    
    const [groupDelete, setgroupDelete] = useState("");
    const [text, setText] = useState("");

    const handleInputs = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <h3>Delete Group</h3>
                <input type="text" style={{marginTop:"1%"}} className="groupDelete" placeholder="Group Delete" value={text} onChange={handleInputs}></input>
                <button className="btn btn-success" style={{display:"block"}}  onClick={(e) => {
                    e.preventDefault()
                    setgroupDelete(text)
                    console.log(groupDelete);
                    
                    const configuration = {
                        method: "DELETE",
                        url: BaseUrl() + "api/group/deleteGroup",
                        headers: {
                            "content-Type": "application/json"
                        },
                        params: {
                            groupDelete
                        }
                    }
                    console.log(configuration);
                    axios(configuration).then((res) => {
                        console.log(res);
                        
                    });
                    // let groupn=text;
                    // obj(groupn);
                

                }}>Group Submit</button>

        </>
    );
}

export default GroupD;