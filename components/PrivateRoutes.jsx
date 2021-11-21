import React from 'react';
import {Route,Redirect} from 'react-router-dom';
const PrivateRoute = ({children,...rest}) =>{
    const isAuth = localStorage.getItem('tokendata')?true:false;
    return (<Route {...rest} render={()=>isAuth?(children):(<Redirect to={'/SignUp'}/>)}/>);
}
export default PrivateRoute;