import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Homenav from '../Homepage/navbar'
// import CSV from './csv'
// import Group from './group'
// import Dropdown from './SendTo'
// import GroupD from './Delete'
// import {BaseUrl} from '../../api/Baseurl'
import './groups.css'
import Footer from '../Homepage/Footer';
import Featurecont from './Featurecont';

function ManageHome(){
    return(<>
    
    <div id="main-Page">
                <Homenav />
                <div className="name1">
                    <h1>Manage Groups</h1>

                </div>
               
    </div>

            <Featurecont />

            <Footer />
    
     </>);
}
export default ManageHome;