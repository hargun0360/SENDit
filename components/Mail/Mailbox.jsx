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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sending from '../../Images/sending.gif'
import Footer from '../Homepage/Footer';

function Mail() {

  const history = useHistory();



  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)
  const [loader, setLoader] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  // const [userError,setUserError]=useState({});
  // const [isSubmit,setIsSubmit] = useState(false);

  // const user={
  //   from,
  //   message,
  //   subject
  // }

  const from = "mailersendit@gmail.com";

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


  //   const Validate = (values)=>{
  //     const error={}
  //     const regexMail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/

  //     if(from===""){
  //         error.from="**Email Is Required!";
  //     }else if(!regexMail.test(values.from)){
  //         error.from="**This is not a valid Email format!";
  //     }
  //     if(message===""){
  //       error.message="**Content is required!";
  //     }
  //     if(subject===""){
  //       error.subject="**Subject is required!";
  //     }
  //     return error;

  // }

  

  const handleRequest = async (e) => {
    let m;

  if (document.getElementById('file1').value != "") {
    m = false;
    console.log(m);
  }
  else{
    m=true;
    console.log(m);
  }
    console.log(m);
    if (m === true) {
     
      if (subject !== "") {

        if (message !== "") {
          e.preventDefault()
          setLoading(true)
          setLoader(true);
          const body = {
            mailFrom:from,
            mailTo: history.location.state.mailTo,
            subject,
            content:message
          }
          console.log(body);

          await axios.post(BaseUrl() + "api/mail", body, {
            headers: {
              'Content-type': 'application/json',
              Authorization: bearer
            }
          }).then((res) => {
            toast.success('Email Sent Successfully')
            setLoading(false)
            setLoader(false);
            setSubject("");
            setMessage("");
            console.log(res);
          }).catch(() => {
            toast.error("Failed! Email Not Sent")
            setLoading(false)
          })
        } else {
          toast.warn('Compose Email')
        }

      } else {
        toast.warn('Please fill all required filled')
      }



    }else{

      if (subject !== "") {

        if (message !== "") {
          e.preventDefault()
          setLoading(true)
          setLoader(true);
          // console.log({ from, message, subject })
  
          // const body = {
          //   mailFrom: from,
          //   mailTo: history.location.state.mailTo,
          //   subject,
  
          //   content: message
          // }
          // console.log(body);
          // console.log(history.location.state.mailTo);
          // console.log(body.mailTo);
          //         const newName = new Date().getTime() + event.target.files[0].name;  
          // fd.append('file[]', event.target.files[0], newName);
          console.log(selectedFile.name);
          const newName = new Date().getTime() + selectedFile.name;
          const formData = new FormData();
          formData.append("mailFrom", from);
          formData.append("mailTo", history.location.state.mailTo);
          formData.append("subject", subject);
          formData.append("content", message);
          formData.append("file", selectedFile, newName);
  
          console.log(formData);
  
          await axios.post(BaseUrl() + "api/upload", formData, {
            headers: {
              // "Cache-Control": "no-cache",
              "Content-Type": "multipart/form-data",
              Authorization: bearer
              // "Accept-Language": "en",
              // "Access-Control-Allow-Origin": "*",
            }
          }).then((res) => {
            console.log(res);
            if(res.data==="Mail Sent"){
              toast.success("Mail Sent");
            }
           
              
            
            setLoader(false);
            setLoading(false)
            setMessage("");
            setSubject("");
            document.getElementById('file1').value = "";
            
          }).catch(() => {
            toast.warn("Your File Size Should Be Within 1500kb");
            setLoader(false);
            setLoading(false)
          })
        } else {
          toast.warn('Compose Email')
        }
  
  
      } else {
        toast.warn('Please fill all required filled')
      }
  

    }

    

  }

  let x = history.location.state.bool;


  return (
    <>
      {
        loader && <img src={sending}
          alt="loading..."
          style={{
            filter: "invert(1)",
            position: "absolute",
            width: 200,
            height: 200,
            top: "65%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            color: "inherit"
          }} />
      }
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
                      value="mailersendit@gmail.com"
                      size="75"
                      readOnly
                      disabled="disabled" />
                  </div>
                  {/* <p className="required">{userError.from}</p> */}

                  <div style={{ padding: "1%", paddingLeft: "6%" }} className="Attachment">
                    <label style={{ padding: "1%", paddingLeft: "3%" }}>Attachment</label>
                    <input style={{ textAlign: "center", padding: "1% 0%" }}
                      type="file"
                      name="file"
                      id="file1"
                      onChange={(e) => {
                        e.preventDefault();

                        setSelectedFile(e.target.files[0])

                      }}

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
                  {/* <p className="required">{userError.subject}</p> */}
                </div>
                <div className="Compose-mail">
                  <label className="Mail-label">Compose Mail:</label>
                  <textarea
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    required
                    placeholder="Enter Content from here..."
                    rows="10"
                    cols="90" />
                </div>
                {/* <p className="required">{userError.message}</p> */}

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

      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick />
        
        
    </>
    
  );
}


export default Mail;