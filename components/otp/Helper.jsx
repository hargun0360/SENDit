import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Image from '../Imagecompo/Image'
import './otp.css'
import axios from 'axios'
import {useHistory } from 'react-router-dom'



function Otpp() {

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
            name: "ABCD",
            mailAddress : history.location.state.email,
            password : history.location.state.newpassword
        }
        console.log(object);
        
        // const object1 = props.location.state || {object,JSON.};
        const config = {
            method: "POST",
            url: "https://cfdf-223-233-66-68.ngrok.io/user/forgotValidate",
            headers: {
                "content-Type": "application/json"
            },
            data : JSON.stringify(object)
        }
        console.log(config.data);
        axios(config).then((res) => {
            console.log(res);
            // if(res.data==="Entered Otp is valid"){
            //     window.alert("Verified SuccessFully");
            //     console.log(res);
            //     console.log(res.data);
                //  const object2={
                //     token:res.data
                // }
                // console.log(object2);
                // storage(object);
                // console.log(store);
                // console.log(localStorage.getItem('tokendata'));
                // history.push("/SignIn");
            // }else{
            //     window.alert("Invalid OTP");
                
            //         // history.push("/");
            // }
        }).catch((error) => {
            console.log(error);
        })
        // setUser({ ...user, otp: "" });
        window.alert("Submission Successfull");
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

                    </form>
                </div>

            </div>

        </div>
    );

}

export default Otpp;




   
    
