import React from 'react'
import Login from './components/SignUp/Login'
import './App.css'
import Sign from './components/Login/SignIn'
import {Switch,Route} from 'react-router-dom'
import Forgot from './components/Forgotpassword/Forgotpass'
import Error from './components/Error/Error'
import Otp from './components/otp/Otpscreen'
import Otpp from './components/otp/Helper'

function App(){
    
    return(
        <div>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/SignIn" component={Sign} />
            <Route path="/Forgotpassword" component={Forgot} />
            <Route path="/OTP" component={Otp} />
            <Route path="/OTPP" component={Otpp} />
            <Route component={Error} />
            </Switch>
            
        </div>
       
    );

}

export default App;