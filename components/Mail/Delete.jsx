import React, { useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseUrl } from '../../api/Baseurl'
// import {obj} from './csv'


function GroupD() {

    // const [groupDelete, setgroupDelete] = useState("");
    const [text, setText] = useState("");
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');

    const handleInputs = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <h3>Delete Group</h3>
            <input type="text" className="groupDelete" placeholder="Group Delete" value={text} onChange={handleInputs}></input>
            <button className="Delete-button" style={{ display: "block" }} onClick={(e) => {
                e.preventDefault()
                // setgroupDelete(text)
                // console.log(groupDelete);

                const configuration = {
                    method: "DELETE",
                    url: BaseUrl() + "api/group/deleteGroup",
                    headers: {
                        "content-Type": "application/json",
                        Authorization: bearer
                    },
                    data: {
                        groupDelete: text
                    }
                }
                console.log(configuration);
                axios(configuration).then((res) => {
                    if (res.data === "Please enter a group Name to delete") {
                        alert("Please enter a group Name to delete");
                        if (res.data === "Please choose valid group name") {
                            alert("Please choose valid group name");
                            if (res.data === "Removed the group successfully") {
                                alert("Removed the group successfully");
                            }
                        }
                    }

                });
                // let groupn=text;
                // obj(groupn);


            }}>Delete Group</button>

        </>
    );
}

export default GroupD;