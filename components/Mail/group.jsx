import React, { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";

import { BaseUrl } from '../../api/Baseurl'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



function Group() {
    // localStorage.removeItem("response");


    const [group, setGroup] = useState("");

    const [text, setText] = useState("");
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');
    const [csvFile, setCsvFile] = useState();
    const [disable, setDisable] = useState(true);
    const [loading, setLoading] = useState(false)


    const handleInputs = (e) => {
        setText(e.target.value);
        
    }
  
    // if(csvFile.file.length === 0){
    //     console.log("error");
    // }
    

    const Submit =  () => {
      

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
            setLoading(true);
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
                console.log(res);
                if (res.data === "Added the groupName successfully") {
                    setLoading(false);
                    toast.success('Added the Group successfully');
                    setDisable(true);
                }
            })
            console.log(object);
        }
        reader.readAsText(file);

        
        
        
    }


    return (
        <>

{
                  loading &&  <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                }
            <div className="group-submit">
                <input type="text" size="35" className="groupName" placeholder="Enter Group Name" value={text} onChange={handleInputs}></input>
                <button className="group-button" style={{ display: "block" }} onClick={(e) => {
                    e.preventDefault()
                    setLoading(true);

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
                            setLoading(false);
                            toast.error('Please enter a group Name');
                            
                        }
                        if (res.data === "Please choose another name") {
                            setLoading(false);
                            toast.error('Please choose another name');
                            setText("");
                        }
                        if (res.data === "Added the groupName successfully now upload the mailAddresses") {
                            setLoading(false);
                            toast.success('Added the groupName successfully now upload the mailAddresses');
                            setDisable(false);
                            setText("");
                        }


                    });




                }}>Submit</button>

            </div>
            <div className="group-file" style={{ marginTop: "15%", marginLeft: "10%",paddingTop: "14%",paddingBottom:"15%" }}>

                <input type="file" accept=".csv" id="csvFile" onChange={(e) => { setCsvFile(e.target.files[0]) }} />
                <button className="Csv-button" id="file2" disabled={disable} style={{ display: "block" }} onClick={(e) => {

                    if (csvFile) {

                        // if(document.getElementById('file2').value = ""){
        //     toast.warn("Please Select The CSV file");
        //     setTimeout(() => {
        //         return;
        //     }, 1000);
        // }
                        Submit();


                    }
                }}>Upload</button>

            </div>


            <ToastContainer
            theme="colored"
                position="top-center"
                autoClose={4000}
                hideProgressBar={true}
                newestOnTop={false}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                closeOnClick />
        </>
    );
}

export default Group;


{/* {result!==null?<CSV tex={result}/>:<CSV tex={null} />} */ }


