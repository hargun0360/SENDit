import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import Image from '../Imagecompo/Image'
import './Login.css'

function Sign(){

    const [user,setUser] = useState({Name:"",email:"",password:""})
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const [allEntry, setallEntery] = useState([]);
    const submitForm = async (event) => {

        event.preventDefault();
        const newEntry = {...user}
        setallEntery([...allEntry, newEntry]);
        setUser({ ...user, Name: "", email: "", password: "" });
    }
    return(
        
        <div className="box">
            <Navbar name="Sign Up" />
            <Image />
            <div className="container">
            <h3 className="heading1">Get Your Account Log In</h3>
            <div className="row">
                 <div className = "col-lg-12">
                     
                 </div>
                     <div className="col-lg-2">
                            
                         <form method="POST" onSubmit={submitForm}>

                         <div className="form-row">

                                <div className="col-lg-2">
                                <i className="fa fa-user icon"></i>
                                    <input type="text" name="Name" placeholder="Your Name" autoComplete="off" value={user.Name} onChange={handleInputs} className="input1" size="30" required />
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
                                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputs} className="input1" size="30" required />
                                </div>

                             </div>

                             <div className="form-row">

                            
                                    <label className="lab"><input type="checkbox" name=" " id="checkbox" />Remember Me</label>
                                    
                                </div>

                             

                             <div className="form-row">

                                <div className="col-lg-2">
                                    <button type="submit" className="btn1"><span className="sign">Sign</span><span className="sign">In</span></button>
                                </div>

                             </div>
                             
                         </form>
                         <div className="question">
                                    <p className="qt">Don't have any account?
                                    <Link to="/" className="linktext" style={{textDecoration:"none",marginLeft:"7px"}}>Sign Up</Link>
                                    </p>
                            </div>
                            <div className="forgot">
                            <Link to="/Forgotpassword" className="linktext" style={{textDecoration:"none",marginLeft:"50px",width:"100%" }}>Forgot Password?</Link>
                                    
                            </div>
                     </div>
                 </div>
            </div>
        </div>
         
    );
}

export default Sign;