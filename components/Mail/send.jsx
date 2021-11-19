import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './test.css'
import {  useHistory } from 'react-router-dom'
import {BaseUrl} from '../../api/Baseurl'

var c=0;
var arr = [];
var array = [];

function Sending(props) {

    const [users, setUsers] = useState([]);
    // let list=[{name:"hargun"},{name:"palak"},{name:"saksham"}];
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');
            
    
    let list=[];
    
    
    const history = useHistory();
      
        useEffect(() => {
             props.list.map((listItem)=>{
        list.push({name:listItem})
    })
   
          setUsers(list);
        }, [props.list]);

       
        

        
      
        const handleChange = (e) => {
          const { name, checked } = e.target;
          if (name === "allSelect") {
            let tempUser = users.map((user) => {
              return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
          } else {
            let tempUser = users.map((user) =>
              user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
          }
        }

            const Submit = (e) => {
        e.preventDefault();
        
        
        
                
        for (let i = 0; i < users.length; i++) {
            if (users[i].isChecked === true) {
                array.push(users[i].name);
                
            }
        }

        console.log(array);
        

        for (let j = 0;j<array.length ; j++) {
              arr[c++]=array[j];
          
      }
      // c=arr.length;
      console.log(c);
      console.log(arr.length);
        
      
      console.log(arr);
      // console.log(arr);
     


        
        alert("Mailaddress are added successfully");
      
        setUsers([]);
        array=[];

        

    }
    console.log(arr);
    

    const handleFinalSub = () => {
        //unique value of an array in arr
        // arr = [...new Set(array)];
        const config = {
          method: "GET",
          url: BaseUrl() + "api/checkPremium",
          headers: {
              "Content-Type": "application/json",
              Authorization: bearer
          }
      }
      
      axios(config).then((res) => {
          console.log(res.data);


          history.push({
            pathname : "/Mail",
            state : {mailTo:arr,bool:res.data}
        });
          
      });
        console.log(arr);
        
         
  
    }


      
        return (
            <>
          
            <form className="To" onSubmit={Submit}>
              <h3>List Of Mail MailAddresses</h3>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="allSelect"
                  // checked={
                  //   users.filter((user) => user?.isChecked !== true).length < 1
                  // }
                  checked={!users.some((user) => user?.isChecked !== true)}
                  onChange={handleChange}
                />
                <label className="form-check-label ms-2">All Select</label>
              </div>
              {users.map((user, index) => (
                <div className="form-check" key={index}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name={user.name}
                    checked={user?.isChecked || false}
                    onChange={handleChange}
                  />
                  <label className="form-check-label ms-2">{user.name}</label>
                </div>
              ))}
              <button type="submit" className="btn btn-primary">Add</button>
            </form>
          
                    <div className="button-final">
          
                    <button type="submit" className="btn btn-success" id="Final-btn" onClick={handleFinalSub}>Final Submission</button>
                    </div>

            </>

        );
      }
      
      export default Sending;