import React, { useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {obj} from './csv'
import {BaseUrl} from '../../api/Baseurl'


function Group() {
    
    const [groupName, setgroupName] = useState("Group Name");
    const [text, setText] = useState("");
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');

    const handleInputs = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            {/* <h2>File read from csv file</h2>
            <form className="csv-form"> */}
            <h3  >{groupName}</h3>
                <input type="text" style={{marginTop:"1%"}} className="groupName" placeholder="Group Name" value={text} onChange={handleInputs}></input>
                <button className="btn btn-success" style={{display:"block"}} onClick={(e) => {
                    e.preventDefault()
                    setgroupName(text)
                    
                    const configuration = {
                        method: "POST",
                        url: BaseUrl() + "api/group/unique",
                        headers: {
                            "content-Type": "application/json",
                            Authorization: bearer
                        },
                        params: {
                            groupName
                        }
                    }
                    axios(configuration).then((res) => {
                        console.log(res);
                        
                    });
                    let groupn=text;
                    obj(groupn);
                

                }}>Group Submit</button>

        </>
    );
}

export default Group;


// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect, useState } from "react";


// const userData = [
//   { name: "Jeevan" },
//   { name: "Manish" },
//   { name: "Prince" },
//   { name: "Arti" },
//   { name: "rahul" }
// ];

// function Fileread() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setUsers(userData);
//   }, []);

//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     if (name === "allSelect") {
//       let tempUser = users.map((user) => {
//         return { ...user, isChecked: checked };
//       });
//       setUsers(tempUser);
//     } else {
//       let tempUser = users.map((user) =>
//         user.name === name ? { ...user, isChecked: checked } : user
//       );
//       setUsers(tempUser);
//     }
//   };

//   return (
//     <div className="container my-4" style={{ width: "500px" }}>
//       <form className="form w-100">
//         <h3>Select Users</h3>
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             name="allSelect"
//             // checked={
//             //   users.filter((user) => user?.isChecked !== true).length < 1
//             // }
//             checked={!users.some((user) => user?.isChecked !== true)}
//             onChange={handleChange}
//           />
//           <label className="form-check-label ms-2">All Select</label>
//         </div>
//         {users.map((user, index) => (
//           <div className="form-check" key={index}>
//             <input
//               type="checkbox"
//               className="form-check-input"
//               name={user.name}
//               checked={user?.isChecked || false}
//               onChange={handleChange}
//             />
//             <label className="form-check-label ms-2">{user.name}</label>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// }

// export default Fileread;
