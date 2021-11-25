import React, { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import { obj } from './csv'
import { BaseUrl } from '../../api/Baseurl'
import axios from 'axios';




function Group() {
    // localStorage.removeItem("response");
    

    const [group, setGroup] = useState("");

    const [text, setText] = useState("");
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');
    const [csvFile, setCsvFile] = useState();
    const [disable, setDisable] = useState(true);


    const handleInputs = (e) => {
        setText(e.target.value);
    }

    const Submit = () => {
        const file = csvFile;
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            const mailAddresses = text;
            console.log(mailAddresses);
            let object = {
                groupName: group,
                mailAddresses: mailAddresses
            }
            const config = {
                method: "POST",
                url: BaseUrl() + "api/group/addGroup",
                headers: {
                    "content-Type": "application/json",
                    Authorization: bearer
                },
                data: JSON.stringify(object)
            }
            axios(config).then((res) => {
               
                if (res.data === "Added the groupName successfully") {
                    alert("Added the groupName successfully");
                    setDisable(true);
                }
            })
            console.log(object);
        }
        reader.readAsText(file);
    }


    return (
        <>
            <div className="group-submit">
            <input type="text" size="35" className="groupName" placeholder="Enter Group Name" value={text} onChange={handleInputs}></input>
            <button className="group-button" style={{ display: "block" }} onClick={(e) => {
                e.preventDefault()


                const configuration = {
                    method: "POST",
                    url: BaseUrl() + "api/group/unique",
                    headers: {
                        "content-Type": "application/json",
                        Authorization: bearer
                    },
                    data: {
                        groupName: text
                    }
                }
                axios(configuration).then((res) => {
                    console.log(res);
                    // if(res.data==="Added the groupName successfully now upload the mailAddresses"){
                    //     localStorage.setItem('response',true);
                    // }
                        
                        setGroup(text);
                    if (res.data === "Please enter a group Name") {
                        alert("Please enter a group Name");
                    }
                    if (res.data === "Please choose another name") {
                        alert("Please choose another name");
                        setText("");
                    }
                    if (res.data === "Added the groupName successfully now upload the mailAddresses") {
                        alert("Added the groupName successfully now upload the mailAddresses");
                        setDisable(false);
                        setText("");
                    }


                });

               


            }}>Submit</button>
            </div>
            <div className="group-file" style={{ marginTop:"15%", marginLeft:"10%" }}>

            <input type="file" accept=".csv" id="csvFile" onChange={(e) => { setCsvFile(e.target.files[0]) }} />
            <button className="Csv-button" disabled={disable}  style={{ display: "block" }} onClick={(e) => {

                if (csvFile) {
                    Submit();


                }
            }}>Upload</button>
            </div>


        </>
    );
}

export default Group;


{/* {result!==null?<CSV tex={result}/>:<CSV tex={null} />} */ }