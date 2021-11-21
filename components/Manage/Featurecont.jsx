import React from "react";
// import CSV from '../Mail/csv'
import Group from '../Mail/group'
import Dropdown from '../Mail/SendTo'
import GroupD from '../Mail/Delete'



function Featurecont() {
    return (<>
    <div className="column-wise">

        <div className="cont1">


        <div className="div-cont2">
                <Group />
            </div>
            
            <div className="div-cont4">
                <GroupD />
            </div>


        </div>
        <div className="cont2">

        <div className="div-cont3">
                <Dropdown />
            </div>
            
            
        </div>
        
        

        </div>


    </>)
}

export default Featurecont;