// import React, { useState, useEffect } from 'react'
// // import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import './test.css'

// // import {BaseUrl} from '../../api/Baseurl'


// function Send(props) {
    
    

//     // let bearer = 'Bearer ' + localStorage.getItem('tokendata');
//     // new Array(toppings.length).fill(false)
//     const [isChecked, setIsChecked] = useState([false,false,false]);
//     let array = [];
//     let arr = [];
// //     let list=[];
// //     props.list.map((listItem)=>{
// //         list.push({name:listItem,Checked:isChecked})
// //     })
// //  console.log(list)
// // list.forEach((item, i) => {
// //     item.id = i + 1;
// //   });
//     let list=[{name:"hargun",Checked:isChecked},{name:"hargun",Checked:isChecked},{name:"hargun",Checked:isChecked}]
//     // const res =  axios.get(BaseUrl() + "api/group/giveGroupName",{ headers: {Authorization : bearer} });
//     //     console.log(res);
//     //     //change the setusers array format to setUsers(users.name=element)
//     //     console.log(res.data);
//     //     res.data.map((element) => { setUsers({ users: [ ...this.state.selected, ] 
//     //     }) })
    
//     //     resarr.map((elem)=>{
//     //     list.push({
//     //         name: elem
//     //     })
//     // })
//     // console.log(list);
//     // setUsers(list);
//     // console.log(users);
//     // const handleOnChange = (position) => {
//     //     const updatedCheckedState = checkedState.map((item, index) =>
//     //       index === position ? !item : item
//     //     );
//     // {toppings.map(({ name, price }, index) => {
//     //     return (
//     //       <li key={index}>
//     //         <div className="toppings-list-item">
//     //           <div className="left-section">
//     //             <input
//     //               type="checkbox"
//     //               id={`custom-checkbox-${index}`}
//     //               name={name}
//     //               value={name}
//     //               checked={checkedState[index]}
//     //               onChange={() => handleOnChange(index)}
//     //             />
    
//     const handleChange = (position) => {
//         if (position === "allSelect") {
//               list.map((user) => {
//                 return { ...user, Checked: setIsChecked(!isChecked) };
//             });
           
            
//         }
//         else{
//             list.map((user) => {
               
//               if(user.name===name){
    
                  
//                   user.Checked=setIsChecked(!isChecked);
                  
//               }
              
//           });
//         }
        
        
            
        

//     }

//     console.log(list)

    

//     const Submit = (e) => {
//         e.preventDefault();

//         for (let i = 0; i < list.length; i++) {
//             if (list[i].Checked === true) {
//                 array.push(list[i].name);
//             }
//         }

//         console.log(array);
        

//     }

//     const handleFinalSub = () => {
//         //unique value of an array in arr
//         arr = [...new Set(array)];
//         console.log(arr);
//         //  const config = {
//         //      method: 'POST',
//         //      url: '',
//         //      headers: {
//         //          'Content-Type' : 'application/json'
//         //      },
//         //      data: JSON.stringify(arr)
//         //  }

//         //  axios(config);
//     }

//     return (
//         <>
            

//                     <form className="To" onSubmit={Submit}>
//                         <h3>List Of MailAddresses</h3>
//                         <div className="form-check">

//                             <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="allSelect"
//                                 checked={
//                                     list.filter((user) => user?.Checked !== true).length < 1
//                                 }
//                                 onChange={handleChange}
//                             />
//                             <label className="form-check-label ms-2"> Select All Mail Adresses</label>
//                         </div>
//                         {list.map(({user},index) => (
//                             <div className="form-check">
//                                 <input
//                                     type="checkbox"
//                                     className="form-check-input"
//                                     name={user.name}
//                                     checked={isChecked[index]}
//                                     onChange={()=>handleChange(index)}
//                                 />
//                                 <label className="form-check-label ms-2" id="user-name">{user.name}</label>
//                             </div>
//                         ))}

//                         <button type="submit" className="btn btn-primary">Add</button>

//                     </form>

//                     <div className="button-final">

//                     <button type="submit" className="btn btn-success" id="Final-btn" onClick={handleFinalSub}>Final Submission</button>
//                     </div>

                    

                    
                

            
//         </>
//     );



// }



// export default Send;


// // const userData = [
//     //     
    

    
        

//         // useEffect(() => {
//     //     //  axios.get('https://0656-223-233-66-68.ngrok.io/group/addGroup').then((res) =>{
//     //     // console.log(res);
//     //     // console.log(res.data);
//     //     // res.data.map((Data)=>{setUsers(Data)}
//     //     // )});


//     //     // setUsers(userData);
//     // }, []);
