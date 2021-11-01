import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useHistory } from 'react-router-dom'
import Image from '../Imagecompo/Image'
import './SignUp.css'

function Login() {
    const [user, setUser] = useState({ Name: "", email: "", password: "", cpassword: "" })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const [allEntry, setallEntery] = useState([]);
    const history = useHistory();

    const submitForm = async (event) => {

        event.preventDefault();
        const newEntry = {...user}
        setallEntery([...allEntry, newEntry]);
        setUser({ ...user, Name: "", email: "", password: "", cpassword: "" });
        // const res = await fetch("/", {
        //     method="POST",
        //     headers:{
        //         "Content-Type" : "application/json"
        //     },
        //     body:JSON.stringify({newEntry})
        // });
        // const data = await res.json();
        // if(res.status === 422 || !data){
        //     window.alert("Registration Fail");
        // }
        // else{
        //     window.alert("registration Successfull");
        // }
        setTimeout(() => {
            history.push("/OTP");
        }, 1000)

    }
    return (

        <div className="box">
            <Navbar name="Sign In" />
            <Image />
            <div className="container">
                <h3 className="heading">Create Account</h3>
                <div className="row">
                    <div className="col-lg-12">

                    </div>
                    <div className="col-lg-2">
                        <form method="POST" onSubmit={submitForm}>
                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-user icon"></i>
                                    <input type="text" name="Name" autoComplete="off" placeholder="Your Name" value={user.Name} onChange={handleInputs} className="input1" size="30" required />
                                </div>

                            </div>
                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-envelope icon"></i>
                                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} className="input1" size="30" required />
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-lock icon"></i>
                                    <input type="password" name="password" placeholder="password" value={user.password} onChange={handleInputs} className="input1" size="30" required />
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-lock icon"></i>
                                    <input type="password" placeholder="Confirm Password" name="cpassword" value={user.cpassword} onChange={handleInputs} className="input1" size="30" required />
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="col-lg-2">
                                    <button type="submit" className="btn" >Submit</button>

                                </div>

                            </div>


                        </form>
                        <div className="question">
                            <p className="qt">Already have an account
                                <Link to="/SignIn" className="linktext" style={{ textDecoration: "none", marginLeft: "7px" }}>Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;