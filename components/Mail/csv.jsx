import React, { useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import {BaseUrl} from '../../api/Baseurl'
let groupNamee
export function obj(gn){
    groupNamee=gn;
}

function CSV() {
    const [csvFile, setCsvFile] = useState();
    const [disable, setDisable] = useState(false);

    const Submit = () => {
        const file = csvFile;
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            const mailAddresses = text;
            let object={
                groupName:groupNamee,
                mailAddresses:mailAddresses
            }
            const config = {
                method: "POST",
                url: BaseUrl() + "api/group/addGroup",
                headers: {
                    "content-Type": "application/json"
                },
                data: JSON.stringify(object)
            }
             axios(config).then((res)=>{
                setDisable(false);
                console.log(res);
            })
            console.log(object);
        }
        reader.readAsText(file);
    }

    return (
        <>
                <h3>Choose File</h3>
                <input type="file" accept=".csv" id="csvFile" onChange={(e) => { setCsvFile(e.target.files[0]) }} />
                <button disabled={disable} className="btn btn-success" style={{display:"block"}} onClick={(e) => {
                    
                    if (csvFile) {
                        Submit();
                        setDisable(true);
                        
                    }
                }}>Submit File</button>

        </>
);

    
}

export default CSV;
