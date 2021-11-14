import React from 'react'
import Login from './components/SignUp/Login'
import './App.css'
import Sign from './components/Login/SignIn'
import {Switch,Route} from 'react-router-dom'
import Forgot from './components/Forgotpassword/Forgotpass'
import Error from './components/Error/Error'
import Otp from './components/otp/Otpscreen'
import Otpp from './components/otp/Helper'
import CSV from './components/Mail/csv'
import Fileread from './components/Mail/group'
import Send from './components/Mail/test'
import Dropdown from './components/Mail/SendTo'
import Mail from './components/Mail/Mailbox'
import GroupD from './components/Mail/Delete'
import Mailtemp from './components/Mail/template'
import Homenavbar from './components/Homepage/Homenavbar'
import Homepage from './components/Homepage/Homepage'


function App(){
    
    return(
        <div>
            <Switch>
            <Route exact path="/Header" component={Homepage} />
            <Route exact path="/SignUp" component={Login} />
            <Route path="/SignIn" component={Sign} />
            <Route path="/Forgotpassword" component={Forgot} />
            <Route path="/OTP" component={Otp} />
            <Route path="/OTPP" component={Otpp} />
            <Route path="/CSV" component={CSV} />
            <Route path="/test" component={Send} />
            <Route path="/Fileread" component={Fileread} />
            <Route path="/Drop" component={Dropdown} />
            <Route path="/Mail" component={Mail} />
            <Route path="/GroupD" component={GroupD} />
            <Route path="/temp" component={Mailtemp} />
            <Route path="/" component={Homenavbar} />
           

            
            
            <Route path="/Error" component={Error} />
            

            </Switch>
            
        </div>
       
    );

}

export default App;