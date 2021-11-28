import React, { useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseUrl } from '../../api/Baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function GroupD() {

    // const [groupDelete, setgroupDelete] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false)
    // const [arr,setArr] = useState([])
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');

    

    const handleInputs = (e) => {
        setText(e.target.value);
        // const config = {
        //     method: "POST",
        //     url: BaseUrl() + "api/group/deleteGroup",
        //     headers: {
        //         "content-Type": "application/json",
        //         Authorization: bearer
        //     },
        //     data: {
        //         groupDelete: e.target.value
        //     }
        // }
        // console.log(config);
        // axios(config).then((res) => {
        //     setArr(res.data);
        // })
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
            <h3>Delete Group</h3>
            <input type="text" className="groupDelete" placeholder="Group Delete" value={text} onChange={handleInputs}></input>
            <button className="Delete-button" style={{ display: "block" }} onClick={(e) => {
                e.preventDefault()
                // setgroupDelete(text)
                // console.log(groupDelete);
                setLoading(true);
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
                    console.log(res.data);
                    if (res.data === "Please enter a group Name to delete") {
                        setLoading(false);
                        toast.error("Please enter a group Name to delete");
                        setText("")
                    }
                    if (res.data === "Removed the group successfully") {
                        setLoading(false);
                        toast.success("Removed the group successfully")
                        setText("")
                    }
                    if (res.data === "Please choose valid group name") {
                        setLoading(false);
                        toast.warn("Please choose valid group name");
                        setText("")

                    }


                });


            }}>Delete Group</button>


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

export default GroupD;