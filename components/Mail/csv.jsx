// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import "bootstrap/dist/css/bootstrap.min.css";
// import {BaseUrl} from '../../api/Baseurl'
// let groupNamee
// export function obj(gn){
//     groupNamee=gn;
// }
// // export function fun(tex){
// //     yo=tex;
// //     console.log(yo);
// // }



// function CSV() {


//     const [csvFile, setCsvFile] = useState();
//     // const [disable, setDisable] = useState(true);
//     let bearer = 'Bearer ' + localStorage.getItem('tokendata');
    
   
    
//     //  console.log(props.txt);

//     const Submit = () => {
//         const file = csvFile;
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const text = e.target.result;
//             const mailAddresses = text;
            
//             let object={
//                 groupName:groupNamee,
//                 mailAddresses:mailAddresses
//             }
//             const config = {
//                 method: "POST",
//                 url: BaseUrl() + "api/group/addGroup",
//                 headers: {
//                     "content-Type": "application/json",
//                     Authorization: bearer
//                 },
//                 data: JSON.stringify(object)
//             }
//              axios(config).then((res)=>{
//                 if(res.data==="Added the group successfully"){
//                     alert("Added the group successfully");
//                 }
//             })
//             console.log(object);
//         }
//         reader.readAsText(file);
//     }
    
    
    
    
   
    
    
    

//     return (<>
//                 <input type="file" accept=".csv"  id="csvFile" onChange={(e) => { setCsvFile(e.target.files[0]) }} />
//                 <button  className="Csv-button" disabled={disable} style={{display:"block"}} onClick={(e) => {
                    
//                     if (csvFile) {
//                         Submit();
                        
                        
//                     }
//                 }}>Upload</button>

//         </>
// );

    
// }

// export default CSV;
