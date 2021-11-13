import React, { useState } from 'react';
import axios from 'axios'
import Homenav from '../Homepage/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mailbox.css"
import { BaseUrl } from '../../api/Baseurl'

function Mail() {

  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)



  const handleRequest = async (e) => {
    if (from && subject !== "") {
      if (message !== "") {
        e.preventDefault()
        setLoading(true)
        console.log({ from, message, subject })

        const body = {
          from,
          message,
          subject
        }

        await axios.post(BaseUrl() + "", body, {
          headers: {
            // "Cache-Control": "no-cache",
            "Content-Type": "application/json"
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



  return (
    <>
      <Homenav />
      {/* <div className="mail-border"> */}
        <div className="Mail-box">
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
                  style={{padding:"1% 3%"}}
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