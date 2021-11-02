import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Image from '../Imagecompo/Image'
import './Forgot.css'
import { useHistory } from 'react-router-dom'

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
    const [userError,setUserError]=useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    useEffect(()=>{
        if(Object.keys(userError).length===0 && isSubmit){
            const newEntry = { ...user }
        setallEntery([...allEntry, newEntry]);
            setUser({ ...user,email: "", newpassword: "" });
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
        const regexPass=/^[a-zA-Z0-9@#!$%^_]{8,12}$/;
        if(!values.email){
            error.email="**Email Is Required!";
        }else if(!regexMail.test(values.email)){
            error.email="**This is not a valid Email format!";
        }
        if(!values.newpassword){
            error.newpassword="**Password Is Required!";
        }
        else if(values.newpassword.length < 8){
            error.newpassword="**Password must be more than 8 characters!";
        }else if(values.newpassword.length > 12){
            error.newpassword="**Password must be less than 12 characters!";
        }else if(!regexPass.test(values.password)){
            error.newpassword="**This is not a valid password!";
        }

        return error;

    }
    return (

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

    );
}

export default Forgot;