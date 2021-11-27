import React from 'react'
import Login from './components/SignUp/Login'
import './App.css'
import Sign from './components/Login/SignIn'
import {Switch,Route} from 'react-router-dom'
import Forgot from './components/Forgotpassword/Forgotpass'
import Error from './components/Error/Error'
import Otp from './components/otp/Otpscreen'
import Otpp from './components/otp/Helper'
import Mail from './components/Mail/Mailbox'
import Mailtemp from './components/Mail/template'
import Homenavbar from './components/Homepage/Homenavbar'
import Homepage from './components/Homepage/Homepage'
import ManageHome from './components/Manage/Managehome'
import Logout from './components/Homepage/Data'
import PrivateRoute from '../src/components/PrivateRoutes'
import NotFound from '../src/components/NotFound';
 



function App(){
    
    return(
        <div>
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/SignUp" component={Login} />
            <Route path="/SignIn" component={Sign} />
            <Route path="/Forgotpassword" component={Forgot} />
            <Route path="/OTP" component={Otp} />
            <Route path="/OTPP" component={Otpp} />
            <PrivateRoute exact path='/Mail'>
              <Mail />
            </PrivateRoute>
            <PrivateRoute exact path='/temp'>
              <Mailtemp />
            </PrivateRoute>
            <Route exact path='/Header'>
              <Homenavbar />
            </Route>
            <PrivateRoute exact path='/Manage'>
              <ManageHome />
            </PrivateRoute>
            <PrivateRoute exact path='/Error'>
              <Error />
            </PrivateRoute>
            <Route exact path='/Data'>
              <Logout />
            </Route>
            

            <Route path="*">
              <NotFound/>
            </Route>
            
            
            
            
            {/* <Route path="/Header" component={Homenavbar} />
            <Route path="/Manage" component={ManageHome} />
            <Route path="/Data" component={Logout} /> */}

           

            
            
           
            

            </Switch>
            
        </div>
       
    );

}

export default App;