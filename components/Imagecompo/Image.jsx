import React from 'react'
import './image.css'
import imge from './Mail.png'

function Image(){
    return(
        <div className="image-box">
         <figure>
               <img className="image" scr={imge} alt="mail" /> 
  
        </figure> 
    </div>
    );
}

export default Image;