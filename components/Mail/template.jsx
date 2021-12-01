import React, { useState} from 'react';
import axios from 'axios'
import Homenav from '../Homepage/navbar'
import { BaseUrl } from '../../api/Baseurl'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Mailtemp.css'


function Mailtemp() {

    const history = useHistory();

    let bearer = 'Bearer ' + localStorage.getItem('tokendata');


    const from="mailersendit@gmail.com";
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [subject, setSubject] = useState('')
    const [headline, setHeadline] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    // const [loader, setLoader] = useState(false)

    const handleRequest = async (e) => {
        if ( subject && name && tagline && headline !== "") {
            if (description !== "") {
                e.preventDefault()
                setLoading(true)
                // setLoader(true);
                const body = {
                    name,
                    to: history.location.state.mailTo,
                    from,
                    subject,
                    description,
                    headline,
                    tagline,
                    value: history.location.state.value
                }
                console.log(body);

                await axios.post(BaseUrl() + "api/template", body, {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: bearer
                    }
                }).then(() => {
                    // setLoader(false);
                    toast.success('Email Sent Successfully')
                    setName("");
                    setSubject("");
                    setTagline("");
                    setHeadline("");
                    setDescription("");
                    setLoading(false)
                   
                }).catch(() => {
                    // setLoader(false);
                    toast.error("Failed! Email Not Sent")
                    setLoading(false)
                })
            } else {
                toast.warn('Compose Email')
            }

        } else {
            toast.warn('Please fill all required filled')
        }

    }



    return (
        <>

{/* {
      loader && <img src={sending}
      alt = "loading..."
            style = {{
              filter: "invert(1)",
              position: "absolute",
              width : 200,
              height : 200,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }} />
    } */}
            <Homenav />

            <div className="Mail-box1">

                <div className="Box3">
                    <form onSubmit={handleRequest} method="post">
                        <div className="form">
                            <div style={{ paddingTop: "3%", textAlign: "center" }} className="form-title">
                                <h4>{loading ? 'Sending...' : "Send Email"}</h4>
                            </div>
                            <div style={{ padding: "3%", paddingLeft: "6%" }} className="form-container">
                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="name-mail">
                                    <label style={{ padding: "1%", paddingLeft: "9%" }}>Name</label>
                                    <input style={{ textAlign: "center",padding:"1% 0%" }}
                                        id="message"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        size="40"
                                        required
                                        placeholder="Enter Your Name" />
                                </div>
                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="From">
                                    <label style={{ padding: "1%", paddingLeft: "10%" }}>From</label>
                                    <input style={{ textAlign: "center",padding:"1% 0%" }}
                                        type="email"
                                        id="mailFrom"
                                        value="mailersendit@gmail.com"
                                        size="40"
                                        readOnly
                                        disabled="disabled"
                                         />
                                </div>
                               
                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="Subject">
                                    <label style={{ padding: "1%", paddingLeft: "8%" }}>Subject</label>
                                    <input style={{ textAlign: "center",padding:"1% 0%" }}
                                        id="subject1"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                        size="40"
                                        type="text"
                                        placeholder="Add Subject" />
                                </div>

                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="tagline-mail">
                                    <label style={{ padding: "1%", paddingLeft: "8%" }}>Tagline</label>
                                    <input style={{ textAlign: "center",padding:"1% 0%" }}
                                        id="tagline"
                                        value={tagline}
                                        onChange={(e) => setTagline(e.target.value)}
                                        type="text"
                                        size="40"
                                        required
                                        placeholder="Enter the tagline" />
                                </div>

                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="headline-mail">
                                    <label style={{ padding: "1%", paddingLeft: "6%" }}>Headline</label>
                                    <input style={{ textAlign: "center",padding:"1% 0%" }}
                                        id="message"
                                        value={headline}
                                        onChange={(e) => setHeadline(e.target.value)}
                                        type="text"
                                        size="40"
                                        required
                                        placeholder="Enter the headline" />
                                </div>

                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="description-mail">
                                    <label  className="tyu">Compose Mail</label>
                                    <textarea
                                     
                                        className="message1"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text"
                                        required
                                        placeholder="Enter Content from here..."
                                        rows="10"
                                        cols="70" />

                                </div>

                                <button
                                    disabled={loading}
                                    onClick={handleRequest}
                                    type="submit"
                                    className="btn btn-success" id="send-btn">Send</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
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


export default Mailtemp;