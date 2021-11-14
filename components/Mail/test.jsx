import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Homenav from '../Homepage/navbar'
import './test.css'
import CSV from './csv'
import Group from './group'
import Dropdown from './SendTo'
import GroupD from './Delete'
import {BaseUrl} from '../../api/Baseurl'

function Send() {


    const [users, setUsers] = useState([{ name: "" }]);
    let array = [];
    let arr = [];

    // const userData = [
    //     
    // ];

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await axios.get(BaseUrl() + "api/group/giveGroupName");
        console.log(res);
        //change the setusers array format to setUsers(users.name=element)
        // array=res.data;
        res.data.map((element) => { setUsers(users.name = element) })
    }


    // data.map((elem)=>{
    //     arr.push({
    //         "name": elem,
    //         "isChekced": false
    //     })
    // })
    console.log(users);

    // useEffect(() => {
    //     //  axios.get('https://0656-223-233-66-68.ngrok.io/group/addGroup').then((res) =>{
    //     // console.log(res);
    //     // console.log(res.data);
    //     // res.data.map((Data)=>{setUsers(Data)}
    //     // )});


    //     // setUsers(userData);
    // }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.name.map((user) => {
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
        setUsers([]);

    }

    const handleFinalSub = () => {
        //unique value of an array in arr
        arr = [...new Set(array)];
        console.log(arr);
        //  const config = {
        //      method: 'POST',
        //      url: '',
        //      headers: {
        //          'Content-Type' : 'application/json'
        //      },
        //      data: JSON.stringify(arr)
        //  }

        //  axios(config);
    }

    return (
        <>
            <div className="back">
                <Homenav />
                <div className="container1">
                    <div className="csvfile">
                        <CSV />
                    </div>
                    <div className="group-name">
                        <Group />
                    </div>

                    <div className="Dropdown-name">
                        <Dropdown />
                    </div>

                    <form className="To" onSubmit={Submit}>
                        <h3>List Of MailAddresses</h3>
                        <div className="form-check">

                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="allSelect"
                                checked={
                                    users.filter((user) => user?.isChecked !== true).length < 1
                                }
                                onChange={handleChange}
                            />
                            <label className="form-check-label ms-2"> Select All Mail Adresses</label>
                        </div>
                        {users.map((user) => (
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name={user.name}
                                    checked={user?.isChecked || false}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-2" id="user-name">{user.name}</label>
                            </div>
                        ))}

                        <button type="submit" className="btn btn-primary">Add</button>

                    </form>

                    <div className="button-final">

                    <button type="submit" className="btn btn-success" id="Final-btn" onClick={handleFinalSub}>Final Submission</button>
                    </div>

                    

                    <div className="Delete-group">
                        <GroupD />
                    </div>
                </div>

            </div>
        </>
    );



}



export default Send;