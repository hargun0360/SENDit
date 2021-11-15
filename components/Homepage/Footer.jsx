import React from "react";
import face from '../../Images/facebook.png'
import insta from '../../Images/insta.png'
import twit from '../../Images/twitter.png'

function Footer() {
    return (<>

        <div className="Footer">
            <div className="Email-gen">
                <p className="parag1">&copy; Email Generator. All rights reserved.</p>
                <p>If you have any questions please contact us[SENDit@gmail.com](#)</p>
                <p className="parag2"><u>[Our blog](LINK_ADDRESS] | [Store](#) | [Support Service](#)</u></p>
                <p className="parag3"><u>Unsubscribe</u></p>
            </div>
            <div className="Head2">
                <h4>Follow us on...</h4>
            </div>


            <div className="social-icons">
                <div className="facebook">
                    <img src={face} />
                </div>
                <div className="instagram">
                    <img src={insta} />
                </div>
                <div className="twitter">
                    <img src={twit} />
                </div>
            </div>

        </div>

    </>);
}

export default Footer;