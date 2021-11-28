import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './test.css'
import {  useHistory } from 'react-router-dom'
import {BaseUrl} from '../../api/Baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


var c=0;
var arr = [];
var array = [];

function Sending(props) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    // let list=[{name:"hargun"},{name:"palak"},{name:"saksham"}];
    let bearer = 'Bearer ' + localStorage.getItem('tokendata');
            
    
    let list=[];
    let uniq
    
    
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
        e.preventDefault()
        
        
                
        for (let i = 0; i < users.length; i++) {
            if (users[i].isChecked === true) {
                array.push(users[i].name);
                
            }
        }
        

        for (let j = 0;j<array.length ; j++) {
              arr[c++]=array[j];
          
      }
        setUsers([]);
        array=[];

        toast.success("Mailaddress are added successfully");

    }
     uniq = [...new Set(arr)];
    
    

    const handleFinalSub = async () => {

      setLoading(true);

      if(uniq.length===0){
        
        setTimeout(() => {
          
          
          setLoading(false);
        }, 1000);
        toast.warn("Please Choose the MailAddress");
        
      }
      else{
        setLoading(false);

        const config = {
          method: "GET",
          url: BaseUrl() + "api/checkPremium",
          headers: {
              "Content-Type": "application/json",
              Authorization: bearer
          }
      }
      
     await axios(config).then((res) => {
          // console.log(res.data);
          
          console.log(uniq);
          history.push({
            pathname : "/Mail",
            state : {mailTo:uniq,bool:res.data}
        });
          
      });

      }
        
    }


      
        return (
            <>

{
                  loading &&  <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                }
          
            <form className="To" style={{marginLeft:"-10%"}} onSubmit={Submit}>
              <h3 style={{width:"130%",marginTop:"40%"}}>All MailAddresses</h3>
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
              <button type="submit" className="Add-btn">Add Mails</button>
            </form>
          
                    <div className="button-final" style={{marginTop:"35%"}}>
          
                    <button type="submit" className="Final-Sub" id="Final-btn" onClick={handleFinalSub}>Final Submission</button>
                    </div>

                    <ToastContainer
                    theme="colored"
                position="top-center"
                autoClose={4000}
                hideProgressBar={true}
                newestOnTop={false}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                closeOnClick />
            </>

        );
      }
      
      export default Sending;