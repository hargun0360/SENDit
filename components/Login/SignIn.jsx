import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Image from '../Imagecompo/Image'
import './Login.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { BaseUrl } from '../../api/Baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function Sign() {

    const [user, setUser] = useState({ email: "", password: "" })
    const history = useHistory();
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const [allEntry, setallEntery] = useState([]);
    const [userError, setUserError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false)
    const submitForm = (event) => {
        event.preventDefault();
        setUserError(Validate(user));
        setIsSubmit(true);
        if (Object.keys(userError).length === 0 && isSubmit) {
            const newEntry = { ...user }
            setallEntery([...allEntry, newEntry]);
            let object = {
                username: newEntry.email,
                password: newEntry.password
            }
            setLoading(true);
            // DATA transfer and get response
            const config = {
                method: "POST",
                url: BaseUrl() + "api/authenticate",
                headers: {
                    "content-Type": "application/json"
                },
                data: JSON.stringify(object)
            }

            axios(config).then((res) => {
                console.log(res);

                console.log(res.data.token);
                localStorage.setItem('tokendata', res.data.token);
                
                if (res.data === "Invalid credentials") {
                    setLoading(false);
                    toast.warn("Invalid credentials");
                    // history.push("/SignIn");
                }
                else if (res.data === "You don't have any account please signUp first") {
                    setLoading(false);
                    toast.error("You don't have any account please signUp first");
                    // history.push("/SignIn");
                }
                else{
                        history.push("/");
                }

            }).catch(() => {
                toast.error("Failed! Network Error");
                setLoading(false);
            })
            setUser({ ...user, email: "", password: "" });
        }

    }
    const Validate = (values) => {
        const error = {}
        const regexMail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        // const regexName=/^[A-Za-z. ]{3,30}$/;
        const regexPass = /^[a-zA-Z0-9@#!$%^_]{8,}$/;
        // if(!values.Name){
        //     error.Name="**Name Is Required!";
        // }else if(!regexName.test(values.Name)){
        //     error.Name="**This is not a valid Name format!";
        // }
        if (!values.email) {
            error.email = "**Email Is Required!";
        } else if (!regexMail.test(values.email)) {
            error.email = "**This is not a valid Email format!";
        }
        if (!values.password) {
            error.password = "**Password Is Required!";
        } else if (values.password.length < 8) {
            error.password = "**Password must be more than 8 characters!";
        } else if (!regexPass.test(values.password)) {
            error.password = "**This is not a valid password!";
        }

        return error;

    }
    return (<>

        {
            loading && <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        }

        <div className="box">
            <Navbar name="Sign Up" />
            <div className="Mail-image">
                <Image />
            </div>
            <div className="Signin">


                <div className="container">
                    <h3 className="heading1">Get Your Account Sign In</h3>
                    <div className="row">
                        <div className="col-lg-12">

                        </div>
                        <div className="col-lg-2">

                            <form method="POST" onSubmit={submitForm}>

                                {/* <div className="form-row">

                                <div className="col-lg-2">
                                <i className="fa fa-user icon"></i>
                                    <input type="text" name="Name" placeholder="Your Name" autoComplete="off" value={user.Name} onChange={handleInputs} className="input1" size="30" />
                                </div>

                             </div>
                             <p className="required">{userError.Name}</p> */}

                                <div className="form-row">

                                    <div className="col-lg-2">
                                        <i className="fa fa-envelope icon"></i>
                                        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} className="input1" size="30" />
                                    </div>

                                </div>
                                <p className="required">{userError.email}</p>

                                <div className="form-row">

                                    <div className="col-lg-2">
                                        <i className="fa fa-lock icon"></i>
                                        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputs} className="input1" size="30" />
                                    </div>

                                </div>
                                <p className="required">{userError.password}</p>




                                <div className="form-row">

                                    <div className="col-lg-2">
                                        <button type="submit" className="btn1"><span className="sign">Sign</span><span className="sign">In</span></button>
                                    </div>

                                </div>

                            </form>
                            <div className="question">
                                <p className="qt">Don't have any account?
                                    <Link to="/SignUp" className="linktext" style={{ textDecoration: "none", marginLeft: "7px" }}>Sign Up</Link>
                                </p>
                            </div>
                            <div className="forgot">
                                <Link to="/Forgotpassword" className="linktext" style={{ textDecoration: "none", marginLeft: "50px", width: "100%" }}>Forgot Password?</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer
            theme="colored"
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            closeOnClick />
    </>
    );
}

export default Sign;