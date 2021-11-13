import React, { useState } from 'react';
import axios from 'axios'
import Homenav from '../Homepage/navbar'
import {BaseUrl} from '../../api/Baseurl'

function Mailtemp() {

    const [mailFrom, setMailFrom] = useState('')
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [subject, setSubject] = useState('')
    const [headline, setHeadline] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)


    const handleRequest = async (e) => {
        if (mailFrom && subject && name && tagline && headline !== "") {
            if (description !== "") {
                e.preventDefault()
                setLoading(true)
                console.log({ name,
                    mailFrom,
                    subject,
                    tagline,
                    headline,
                    description })

                const body = {
                    name,
                    mailFrom,
                    subject,
                    tagline,
                    headline,
                    description
                }

                await axios.post(BaseUrl() + "", body, {
                    headers: {
                        'Content-type': 'application/json'
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
            <div className="Mail-box">
            <div className="Mail-box">
            <div className="Box2">
                <form onSubmit={handleRequest} method="post">
                    <div className="form">
                        <div className="form-title">
                            <h4>{loading ? 'Sending...' : "Send Email"}</h4>
                        </div>
                        <div className="form-container">
                            <div className="name-mail">
                                <label>Name</label>
                                <input
                                    id="message"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Enter Your Name" />
                            </div>
                            <div className="From">
                                <label>From</label>
                                <input
                                    type="email"
                                    id="mailFrom"
                                    value={mailFrom}
                                    required
                                    onChange={(e) => setMailFrom(e.target.value)}
                                    placeholder="Enter Your Email" />
                            </div>

                            <div className="Subject">
                                <label>Subject</label>
                                <input
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    type="text"
                                    placeholder="Add Subject" />
                            </div>

                            <div className="tagline-mail">
                                <label>Tagline</label>
                                <input
                                    id="tagline"
                                    value={tagline}
                                    onChange={(e) => setTagline(e.target.value)}
                                    type="text"
                                    placeholder="Enter the tagline" />
                            </div>

                            <div className="headline-mail">
                                <label>Headline</label>
                                <input
                                    id="message"
                                    value={headline}
                                    onChange={(e) => setHeadline(e.target.value)}
                                    type="text"
                                    placeholder="Enter the headline" />
                            </div>

                            <div className="description-mail">
                                <label>Compose Mail</label>
                                <input
                                    id="message"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text"
                                    placeholder="Enter Content from here..." />
                            </div>

                            <button
                                disabled={loading}
                                onClick={handleRequest}
                                type="submit"
                                className="btn btn-success">Send</button>

                        </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </>
    );
}


export default Mailtemp;