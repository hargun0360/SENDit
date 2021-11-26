import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import Homenav from '../Homepage/navbar'
import './groups.css'
import Footer from '../Homepage/Footer';
import Featurecont from './Featurecont';

function ManageHome(){
    
    return(<>
    
    <div id="main-Page1">
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