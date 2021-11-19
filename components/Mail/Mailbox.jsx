import React, { useState } from 'react';
import axios from 'axios'
import Homenav from '../Homepage/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mailbox.css"
import { BaseUrl } from '../../api/Baseurl'
import { useHistory } from 'react-router-dom'
import imag1 from '../../Images/temp1.png'
import imag2 from '../../Images/temp2.png'
import imag3 from '../../Images/temp3.png'
import imag4 from '../../Images/temp4.png'

function Mail() {

  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)
 
  let bearer = 'Bearer ' + localStorage.getItem('tokendata');
  const history = useHistory();
  const object = [{
    value: 1,
    mailTo: history.location.state.mailTo

  }, {
    value: 2,
    mailTo: history.location.state.mailTo

  }, {
    value: 3,
    mailTo: history.location.state.mailTo

  }, {
    value: 4,
    mailTo: history.location.state.mailTo

  }]

  // const [disable,setDisable] = useState(true)


  const handleRequest = async (e) => {
    if (from && subject !== "") {
      if (message !== "") {
        e.preventDefault()
        setLoading(true)
        console.log({ from, message, subject })

        const body = {
          mailFrom: from,
          mailTo: history.location.state.mailTo,
          subject,

          content: message
        }
        console.log(body);
        console.log(history.location.state.mailTo);
        console.log(body.mailTo);

        await axios.post(BaseUrl() + "api/mail", body, {
          headers: {
            // "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: bearer
            // "Accept-Language": "en",
            // "Access-Control-Allow-Origin": "*",
          }
        }).then((res) => {
          alert('Email Sent Successfully')
          setLoading(false)
          console.log(res)
        }).catch((err) => {
          console.log(err)
          setLoading(false)
        })
      } else {
        alert('Compose Email')
      }

    } else {
      alert('Please fill all required filled')
    }

  }
  // const handleClickOne = (e) => {

  //   e.preventDefault();



    // const handleRequest=(e,x)=>{




    // }
    //   const handleInputs=(e)=>{

    //     e.preventDefault();
    //     let object = {

    //       mailTo: history.location.state.mailTo,
    //       value:3
    //     }

    //     history.push({
    //         pathname : "/temp",
    //         state : object
    //     });
    //   }

    //     const handleChange=(e)=>{

    //       e.preventDefault();
    //       let object = {

    //         mailTo: history.location.state.mailTo,
    //         value:4
    //       }

    //       history.push({
    //           pathname : "/temp",
    //           state : object
    //       });
    //    }
    let x=history.location.state.bool;
   

  return (
    <>
      <Homenav />
      {/* <div className="mail-border"> */}
      <div className="Mail-box">
        <div className="tempbox">
          <div className="feature-box1">
            <div className="img-logo1">
              <img className="ig" src={imag1} />
            </div>
            <div className="Linking2">
              <button type="submit" id="one" className="button8" onClick={(e) => {
                e.preventDefault();
                history.push({
                  pathname: "/temp",
                  state: object[0]
                });
              }}>choose</button>
            </div>
          </div>

          <div className="feature-box2">
            <div className="img-logo1">
              <img className="ig" src={imag2} />
            </div>
            <div className="Linking2">
              <button type="submit" id="two" className="button8" onClick={(e) => {
                e.preventDefault();
                history.push({
                  pathname: "/temp",
                  state: object[1]
                });
              }}>choose</button>
            </div>
          </div>

          <div className="feature-box3">
            <div className="img-logo1">
              <img className="ig" src={imag3} />
            </div>
            <div className="Linking2">
              <button type="submit" id="three" disabled={x?false:true} className="button8" onClick={(e) => {
                e.preventDefault();
                history.push({
                  pathname: "/temp",
                  state: object[2]
                });
              }}>choose</button>
            </div>
          </div>

          <div className="feature-box4">
            <div className="img-logo1">
              <img className="ig" src={imag4} />
            </div>
            <div className="Linking2">
              <button type="submit" id="4" disabled={x?false:true} className="button8" onClick={(e) => {
                e.preventDefault();
                history.push({
                  pathname: "/temp",
                  state: object[3]
                });
              }}>choose</button>
            </div>
          </div>

        </div>
        <div className="Box2">
          <form onSubmit={handleRequest} method="post">
            <div className="form">
              <div className="form-title">
                <h4 className="Mail-head">{loading ? 'Sending...' : "Send Email"}</h4>
              </div>
              <div className="form-container">
                <div className="from-sub">
                  <div className="From">
                    <label className="Mail-label1">From:</label>
                    <input
                      type="email"
                      className="label1"
                      value={from}
                      required
                      size="75"
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder="Enter Your Email" />
                  </div>

                  <div className="Subject">
                    <label className="Mail-label">Subject:</label>
                    <input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      type="text"
                      size="75"
                      placeholder="Add Subject" />
                  </div>
                </div>
                <div className="Compose-mail">
                  <label className="Mail-label">Compose Mail:</label>
                  <textarea
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder="Enter Content from here..."
                    rows="10"
                    cols="90" />
                </div>

                <button
                  style={{ padding: "1% 3%" }}
                  id="send-btn"
                  disabled={loading}
                  onClick={handleRequest}
                  type="submit"
                  className="btn btn-success">Send</button>

              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}


export default Mail;