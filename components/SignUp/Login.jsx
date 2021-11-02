import React, { useState,useEffect } from 'react'
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
    const [userError,setUserError]=useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    useEffect(()=>{
        if(Object.keys(userError).length===0 && isSubmit){
            const newEntry = { ...user }
        setallEntery([...allEntry, newEntry]);
            setUser({ ...user, Name: "", email: "", password: "", cpassword: "" });
                window.alert("Submission Successfull");
                setTimeout(() => {
                    history.push("/OTP");
                }, 1000)
        }
},[userError])
    const submitForm = async (event) => {
        event.preventDefault();
        setUserError(Validate(user));
        setIsSubmit(true);

    }
    
    const Validate = (values)=>{
        const error={}
        const regexMail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        const regexName=/^[A-Za-z. ]{3,30}$/;
        const regexPass=/^[a-zA-Z0-9@#!$%^_]{8,12}$/;
        if(!values.Name){
            error.Name="**Name Is Required!";
        }else if(!regexName.test(values.Name)){
            error.Name="**This is not a valid Name format!";
        }
        if(!values.email){
            error.email="**Email Is Required!";
        }else if(!regexMail.test(values.email)){
            error.email="**This is not a valid Email format!";
        }
        if(!values.password){
            error.password="**Password Is Required!";
        }else if(!regexPass.test(values.password)){
            error.password="**This is not a valid password!";
        }
        if(values.password.length < 8){
            error.password="**Password must be more than 8 characters!";
        }else if(values.password.length > 12){
            error.password="**Password must be less than 12 characters!";
        }
        if(!values.cpassword){
            error.cpassword="**Password Is Required!";
        }
        if(values.cpassword!=values.password){
            error.cpassword="**Password Is not match!";
        }

        return error;

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
                                    <input type="text" name="Name" autoComplete="off" placeholder="Your Name" value={user.Name} onChange={handleInputs} className="input1" size="30"  />
                                </div>
                            </div>
                            <p className="required">{userError.Name}</p>

                                    
                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-envelope icon"></i>
                                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} className="input1" size="30"  />
                                </div>

                            </div>
                            <p className="required">{userError.email}</p>


                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-lock icon"></i>
                                    <input type="password" name="password" placeholder="password" value={user.password} onChange={handleInputs} className="input1" size="30"  />
                                </div>

                            </div>
                            <p className="required">{userError.password}</p>


                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-lock icon"></i>
                                    <input type="password" placeholder="Confirm Password" name="cpassword" value={user.cpassword} onChange={handleInputs} className="input1" size="30"  />
                                </div>

                            </div>
                            <p className="required">{userError.cpassword}</p>


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