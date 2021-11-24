import React, { useState, useEffect } from 'react';
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

  const history = useHistory();


  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const [userError,setUserError]=useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const user={
    from,
    message,
    subject
  }

  let bearer = 'Bearer ' + localStorage.getItem('tokendata');

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


  const Validate = (values)=>{
    const error={}
    const regexMail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z0-9]$/
    
    if(!values.from){
        error.from="**Email Is Required!";
    }else if(!regexMail.test(values.email)){
        error.from="**This is not a valid Email format!";
    }
    if(message===""){
      error.message="**Content is required!";
    }
    if(subject===""){
      error.subject="**Subject is required!";
    }
    return error;

}



  const handleRequest = async (e) => {
    
        e.preventDefault()
        setUserError(Validate(user));
        setLoading(true)
        setIsSubmit(true);
        if(Object.keys(userError).length===0 && isSubmit){

          // console.log({ from, message, subject })
        const formData = new FormData();
        // formData.append("name", name);
        formData.append("mailFrom", from);
        formData.append("mailTo", history.location.state.mailTo );
        formData.append("subject", subject);
        formData.append("content", message);
        formData.append("file", selectedFile);
    

    //     public String mailFrom;
    // public String[] mailTo;
    // public String subject;
    // public String content;
    // private MultipartFile file;

        // const body = {
        //   mailFrom: from,
        //   mailTo: history.location.state.mailTo,
        //   subject,
        //   formData,

        //   content: message
        // }
        // console.log(body);
        // console.log(history.location.state.mailTo);
        // console.log(body.mailTo);

        console.log(formData);

        await axios.post(BaseUrl() + "api/mail", formData, {
          headers: {
         
            "Content-Type": "multipart/form-data",
           
            Authorization: bearer
            
          }
        }).then((res) => {
          alert('Email Sent Successfully')
          setLoading(false)
          console.log(res)
        }).catch((err) => {
          console.log(err)
          setLoading(false)
        })

        }
        

  }

  let x = history.location.state.bool;


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
              <button type="submit" id="three" disabled={x ? false : true} className="button8" onClick={(e) => {
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
              <button type="submit" id="4" disabled={x ? false : true} className="button8" onClick={(e) => {
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
                  <p className="required">{userError.from}</p>

                  <div style={{ padding: "1%", paddingLeft: "6%" }} className="Attachment">
                    <label style={{ padding: "1%", paddingLeft: "3%" }}>Attachment</label>
                    <input style={{ textAlign: "center", padding: "1% 0%" }}
                      type="file"
                      name="file"
                      value={selectedFile}
                      onChange={(e) => {
                        e.preventDefault();

                        setSelectedFile(e.target.file)

                      } }

                    />
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
                  <p className="required">{userError.subject}</p>
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
                <p className="required">{userError.message}</p>

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