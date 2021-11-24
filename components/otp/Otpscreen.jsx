import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Image from '../Imagecompo/Image'
import './otp.css'
import axios from 'axios'
import {useHistory } from 'react-router-dom'
import Error from '../Error/Error'
import {BaseUrl} from '../../api/Baseurl'


function Otp() {

    const [user, setUser] = useState({ otp: "" })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const [allEntry, setallEntery] = useState([]);
    const history = useHistory();
    

    const submitForm = (event) => {
        event.preventDefault();
        const newEntry = { ...user}
        setallEntery([...allEntry, newEntry]);

        let object = {
            otp: newEntry.otp,
            name: history.location.state.name,
            mailAddress : history.location.state.mailAddress,
            password : history.location.state.password
        }
        
        const config = {
            method: "POST",
            url: BaseUrl() + "api/user/validate",
            headers: {
                "content-Type": "application/json"
            },
            data : JSON.stringify(object)
        }
        axios(config).then((res) => {
            console.log(res);
            if(res.data === "You are registered successfully"){
                alert("You are registered Successfully");
                history.push("/SignIn");
            } else if (res.data === "Entered Otp is NOT valid. Please Retry!") {
                alert("Entered Otp is NOT valid. Please Retry!");
            }
            
        }).catch((error) => {
            <Error />
        })
        setUser({ ...user, otp: "" });
    }
    
    const handleClick = ()=>{
        let again ={
            name: history.location.state.name,
            mailAddress : history.location.state.mailAddress,
            password : history.location.state.password
        }

        console.log(again);
        const configuration = {

            method: "POST",
            url: (BaseUrl() + "api/user/generateOtp"),
            headers: {
                "content-Type": "application/json"
            },
            data : JSON.stringify(again)

        }
        axios(configuration).then((res) => {
            console.log(res);
            // alert("otp sent successfully");
            
        })
    }

    return (

        <div className="box">

            <Navbar name="Sign In" />
            <Image />
            <div className="container">
                <h3 className="heading3">Verify User Account</h3>
                <div className="row">
                    <div className="col-lg-12"></div>

                    <form method="POST" onSubmit={submitForm}>
                        <div className="form-row" id="oo">

                            <div className="col-lg-2-1">
                                <i className="fa fa-key icon"></i>
                                <input type="text" name="otp" placeholder="OTP" value={user.otp} onChange={handleInputs} className="input1" size="30" required />
                            </div>
                        </div>

                        <div className="form-row" id="gg">

                            <div className="col-lg-2">
                                <button type="submit" className="btn5" >Verify</button>
                            </div>

                        </div>
                        <div className="form-row" id="gg">

                            <div className="col-lg-2">
                                <button type="submit" className="btn5" onClick={handleClick} >Resend</button>
                            </div>

                        </div>

                    </form>
                </div>

            </div>

        </div>
    );

}

export default Otp;