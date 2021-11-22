import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Homenav from '../Homepage/navbar'
import { BaseUrl } from '../../api/Baseurl'
import { useHistory } from 'react-router-dom'

import './Mailtemp.css'

function Mailtemp() {

    const history = useHistory();

    let bearer = 'Bearer ' + localStorage.getItem('tokendata');


    const [mailFrom, setMailFrom] = useState('')
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [subject, setSubject] = useState('')
    const [headline, setHeadline] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    // const [attachment, setAttachment] = useState('')

    const handleRequest = async (e) => {
        if (mailFrom && subject && name && tagline && headline !== "") {
            if (description !== "") {
                e.preventDefault()
                setLoading(true)
                const formData = new FormData();
                // formData.append("name", name);
                formData.append("file", selectedFile);

                const body = {
                    name,
                    to: history.location.state.mailTo,
                    from: mailFrom,
                    subject,
                    formData,
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
                                    <input style={{ textAlign: "center", padding: "1% 0%" }}
                                        id="message"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        size="40"
                                        placeholder="Enter Your Name" />
                                </div>
                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="From">
                                    <label style={{ padding: "1%", paddingLeft: "10%" }}>From</label>
                                    <input style={{ textAlign: "center", padding: "1% 0%" }}
                                        type="email"
                                        id="mailFrom"
                                        value={mailFrom}
                                        required
                                        size="40"
                                        onChange={(e) => setMailFrom(e.target.value)}
                                        placeholder="Enter Your Email" />
                                </div>
                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="Attachment">
                                    <label style={{ padding: "1%", paddingLeft: "3%" }}>Attachment</label>
                                    <input style={{ textAlign: "center", padding: "1% 0%" }}
                                        type="file"
                                        value={selectedFile}
                                        accept=".pdf"
                                        onChange={(e) => setSelectedFile(e.target.files[0])}

                                    />
                                </div>


                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="Subject">
                                    <label style={{ padding: "1%", paddingLeft: "8%" }}>Subject</label>
                                    <input style={{ textAlign: "center", padding: "1% 0%" }}
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
                                    <input style={{ textAlign: "center", padding: "1% 0%" }}
                                        id="tagline"
                                        value={tagline}
                                        onChange={(e) => setTagline(e.target.value)}
                                        type="text"
                                        size="40"
                                        placeholder="Enter the tagline" />
                                </div>

                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="headline-mail">
                                    <label style={{ padding: "1%", paddingLeft: "6%" }}>Headline</label>
                                    <input style={{ textAlign: "center", padding: "1% 0%" }}
                                        id="message"
                                        value={headline}
                                        onChange={(e) => setHeadline(e.target.value)}
                                        type="text"
                                        size="40"
                                        placeholder="Enter the headline" />
                                </div>

                                <div style={{ padding: "1%", paddingLeft: "6%" }} className="description-mail">
                                    <label className="tyu">Compose Mail</label>
                                    <textarea
                                        className="message1"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text"
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

        </>
    );
}


export default Mailtemp;