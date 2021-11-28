import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Image from '../Imagecompo/Image'
import './otp.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { BaseUrl } from '../../api/Baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Otp() {

    const [user, setUser] = useState({ otp: "" })
    const [disable, setDisable] = useState(false);
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const [allEntry, setallEntery] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(false)


    const submitForm = async (event) => {
        event.preventDefault();
        setLoading(true);
        const newEntry = { ...user }
        setallEntery([...allEntry, newEntry]);

        let object = {
            otp: newEntry.otp,
            name: history.location.state.name,
            mailAddress: history.location.state.mailAddress,
            password: history.location.state.password
        }

        const config = {
            method: "POST",
            url: BaseUrl() + "api/user/validate",
            headers: {
                "content-Type": "application/json"
            },
            data: JSON.stringify(object)
        }
       await axios(config).then((res) => {
            console.log(res);
            if (res.data === "You are registered successfully") {
                setLoading(false);
                toast.success("You are registered Successfully");
                setTimeout(() => {
                    history.push("/SignIn");
                }, 2000);
            } else if (res.data === "Entered Otp is NOT valid. Please Retry!") {
                setLoading(false);
                toast.error("Entered Otp is NOT valid. Please Retry!");
            }

        }).catch(() => {
            setLoading(false);
            toast.error("Failed! Network Error");
        })
        setUser({ ...user, otp: "" });
    }

    const handleClick = async () => {
        let again = {
            name: history.location.state.name,
            mailAddress: history.location.state.mailAddress,
            password: history.location.state.password
        }

        setLoading(true);
        setDisable(true);


        const configuration = {

            method: "POST",
            url: BaseUrl() + "api/user/generateOtp",
            headers: {
                "content-Type": "application/json"
            },
            data: JSON.stringify(again)

        }
      await  axios(configuration).then((res) => {
            setLoading(false);
            console.log(res);
            toast.success("otp sent successfully");

        })

        setTimeout(() => {
            setDisable(false);
        }, 10000);

    }

    return (<>

{
                  loading &&  <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                }

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
                                <input type="text" name="otp" placeholder="OTP" value={user.otp} onChange={handleInputs} className="input1" size="30" />
                            </div>
                        </div>

                        <div className="form-row" id="gg">

                            <div className="col-lg-2">
                                <button type="submit" className="btn5" >Verify</button>
                            </div>

                        </div>
                        <div className="form-row" id="gg">

                            <div className="col-lg-2">
                                <button type="submit" disabled={disable} className="btn5" onClick={handleClick} >Resend</button>
                            </div>

                        </div>

                    </form>
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

export default Otp;



// const [user, setUser] = useState({ otp: "" })
//     const [disable, setDisable] = useState(false);