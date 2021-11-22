import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {BaseUrl} from '../../api/Baseurl'
import Sending from '../Mail/send'
function Dropdown() {
    const [groups, setGroups] = useState([]);
    const [arr,setArr]= useState([]);

    let bearer = 'Bearer ' + localStorage.getItem('tokendata');

    useEffect(() => {
        // loadUsers();
        API();
        async function API() {
            const res = await axios.get(BaseUrl() + "api/group/getGroupNames",{ headers: {Authorization : bearer} });

            setGroups(res.data)
          }
        //   API();
      });
//dependency groups
    //   const loadUsers = async () => {
    //     const res = await axios.get(BaseUrl() + "api/group/getGroupNames",{ headers: {Authorization : bearer} });
    //     console.log(res);
    //     setGroups(res.data)
    //   }

    // console.log(groups);

    const selectGroup = (e) => {

        let groupName = e.target.value;
        // console.log(groupName);
        
            
        

        // console.log(object);
        const config = {
            method: "GET",
            url: BaseUrl() + "api/group/giveGroupName",
            headers: {
                "Content-Type": "application/json",
                Authorization: bearer
            },
            params:{
                groupName:groupName
            }
        }
        
        axios(config).then((res) => {
            setArr(res.data);
        });

        
        
    }

    return (
        <>


            <div className="container">
                <div className="row">

                    <div className="col-6 col-lg-4 col-sm-5  col-md-4 col-xl-3">
                        <h3 className="mt-5 mb-3">Groups</h3>
                        <select onChange={selectGroup}  name="groupName" className="drop" >
                            <option selected="true" disabled="disabled">My Groups</option>
                            {groups.map((group) => (
                                <option value={group}>{group}</option>
                            ))}
                        </select>
                    </div>

                </div>
    {/* {console.log(arr)} */}
            <Sending list={arr} />
            </div>

        </>

    );
    
    

}

export default Dropdown;

































// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";



// function SendTo() {
//     const [users, setUsers] = useState([]);
//     const [csvFile, setCsvFile] = useState();
//     const [array,setArray] =useState([]);
//     const [groupName, setgroupName] = useState("G1");
//     const [text, setText] = useState("");





//     const handleInputs = (e) => {
//         setText(e.target.value);
//     }
//     const userData = [
//         { name: "Jeevan" },
//         { name: "Manish" },
//         { name: "Prince" },
//         { name: "Arti" },
//         { name: "rahul" }
//       ];



    // useEffect(() => {
    //     // axios.get()
    //     setUsers(userData);
    // }, []);

//     const handleChange = (e) => {
//         const { name, checked } = e.target;
//         if (name === "allSelect") {
//             let tempUser = users.map((user) => {
//                 return { ...user, isChecked: checked };
//             });
//             setUsers(tempUser);
//         } else {
//             let tempUser = users.map((user) =>
//                 user.name === name ? { ...user, isChecked: checked } : user
//             );
//             setUsers(tempUser);
//         }



//     }



//     console.log(array);


//     }

//     return (
//         <>
//             <form className="To" onSubmit={SubmitForm}>
//                 <div>
//                     <h3 className="heading-title">MailAddresses</h3>
//                 </div>

//                 <div className="form-check">
//                     <input type="file" accept=".csv" id="csvFile" onChange={(e) => { setCsvFile(e.target.files[0]) }} />
//                     <button onClick={(e) => {
//                         e.preventDefault()
//                         if (csvFile) {
//                             Submit();
//                         }
//                     }}>Submit File</button>
//                     

//                 <input type="text" className="groupName" placeholder="Group Name" value={text} onChange={handleInputs}></input>
//                    <button onClick={(e) => {
//                     e.preventDefault()
//                     setgroupName(text)
//                     const configuration = {
//                         method: "POST",
//                         url: "https://ccf4-223-233-66-68.ngrok.io/addGroup",
//                         headers: {
//                             "content-Type": "application/json"
//                         },
//                         params: {
//                             groupName
//                         }
//                     }
//                     axios(configuration).then((res) => {
//                         console.log(res);
//                     });

//                 }}>Group Submit</button>

//             </form>
//             <button type="submit" className="btn btn-primary">Next</button>
//         </>
//     );
// }


// export default SendTo;





