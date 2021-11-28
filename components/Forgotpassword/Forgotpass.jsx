import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Image from '../Imagecompo/Image'
import './Forgot.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {BaseUrl} from '../../api/Baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Forgot() {
    const [user, setUser] = useState({ email: "", newpassword: "" })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const [allEntry, setallEntery] = useState([]);
    const history = useHistory();
    const [userError, setUserError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false)
    const submitForm = async (event) => {
        event.preventDefault();
        setUserError(Validate(user));
        setIsSubmit(true);
        if (Object.keys(userError).length === 0 && isSubmit) {
            const newEntry = { ...user }
            setallEntery([...allEntry, newEntry]);
            setLoading(true);
            let object = {
                mailAddress: newEntry.email,
                password: newEntry.newpassword
            }
            // DATA transfer and get response
            const config = {
                method: "POST",
                url: BaseUrl() + "api/user/forgot",
                headers: {
                    "content-Type": "application/json"
                },
                data: JSON.stringify(object)
            }
           await axios(config).then((res) => {
                console.log(res);
                if (res.data === "seems like you dont have any account") {
                    setLoading(false);
                    toast.error("seems that you don't have any account");
                    setTimeout(() => {
                        history.push("/SignUp");
                    }, 2000);
                   
                }
                else if(res.data === "Otp Sent"){
                    setLoading(false);
                    toast.success('Otp Sent')
                    setTimeout(() => {
                        history.push({
                            pathname: "/OTPP",
                            state: newEntry
                        });
                    }, 2000);
                   
                }

            }).catch(() => {
                setLoading(false);
                toast.error("Failer! Network Error");
            })

            setUser({ ...user, email: "", newpassword: ""});

        }


    }

    const Validate = (values) => {
        const error = {}
        const regexMail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        const regexPass = /^[a-zA-Z0-9@#!$%^_]{8,12}$/;
        if (!values.email) {
            error.email = "**Email Is Required!";
        } else if (!regexMail.test(values.email)) {
            error.email = "**This is not a valid Email format!";
        }
        if (!values.newpassword) {
            error.newpassword = "**Password Is Required!";
        }
        else if (values.newpassword.length < 8) {
            error.newpassword = "**Password must be more than 8 characters!";
        } else if (values.newpassword.length > 12) {
            error.newpassword = "**Password must be less than 12 characters!";
        } else if (!regexPass.test(values.password)) {
            error.newpassword = "**This is not a valid password!";
        }

        return error;

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

        <div className="box">
            <Navbar name="Sign Up" />
            <Image />
            <div className="container">
                <h3 className="heading2">Forgot Password ?</h3>
                <div className="row">
                    <div className="col-lg-12">

                    </div>
                    <div className="col-lg-2">
                        <form method='POST' onSubmit={submitForm}>

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
                                    <input type="password" placeholder="New Password" name="newpassword" value={user.newpassword} onChange={handleInputs} className="input1" size="30" />
                                </div>

                            </div>
                            <p className="required">{userError.newpassword}</p>

                            <div className="form-row">

                                <div className="col-lg-2">
                                    <button type="submit" className="btn4"><span className="confirm">Confirm</span></button>
                                </div>

                            </div>

                        </form>

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

export default Forgot;