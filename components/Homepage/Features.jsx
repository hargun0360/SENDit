import React from 'react'
import Featurebox from './Featurebox'
import boximg1 from '../../Images/mail.png'
import boximg2 from '../../Images/template.png'
import boximg3 from '../../Images/chat.png'

function Features(){
    return(<> 
        <div className="features">

            <div className="a-container">

                    <Featurebox image={boximg1} title="Send Mail" content="Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button" link="/SignUp" />
                    <Featurebox image={boximg2} title="Use Template" content="Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button" link="/SignUp" />
                    <Featurebox image={boximg3} title="Chat" content="Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button" link="/SignUp" />
            </div>

        </div>    
    </>);
}

export default Features;