import React, { useState } from 'react'
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
    const submitForm = async (event) => {

        event.preventDefault();
        const newEntry = { ...user }
        setallEntery([...allEntry, newEntry]);
        setUser({ ...user, email: "", newpassword: "" });
        setTimeout(() => {
            history.push("/OTP");
        }, 1000)

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
                                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} className="input1" size="30" required />
                                </div>

                            </div>
                            <div className="form-row">

                                <div className="col-lg-2">
                                    <i className="fa fa-lock icon"></i>
                                    <input type="password" placeholder="New Password" name="newpassword" value={user.newpassword} onChange={handleInputs} className="input1" size="30" required />
                                </div>

                            </div>

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