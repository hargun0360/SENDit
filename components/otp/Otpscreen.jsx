import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Image from '../Imagecompo/Image'
import './otp.css'


function Otp(){

    const [user,setUser] = useState({otp:""})
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    return(

        <div className="box">

        <Navbar name="Sign In" />
        <Image />
        <div className="container">
            <h3 className="heading3">Verify User Account</h3>
            <div className="row">
                 <div className = "col-lg-12"></div>

        <form>
                <div className="form-row" id="oo">

                    <div className="col-lg-2-1">
                        <i className="fa fa-key icon"></i>
                                <input type="text" name="otp" placeholder="OTP" value={user.otp} onChange={handleInputs} className="input1" size="30" required />
                    </div>
                </div>

                <div className="form-row" id="gg">

                                <div className="col-lg-2">
                                    <button type="button" className="btn5" >Verify</button>
                                </div>

                             </div>

        </form>
        </div>

        </div>

    </div>
    );

}

export default Otp;