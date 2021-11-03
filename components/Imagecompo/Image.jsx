import React from 'react'
import './image.css'
import imge from './Mail.png'
import imge1 from './Polygon.png'

function Image(){
    return(
        <div className="image-box">
         <figure>
               <img className="image" src={imge} alt="mail" /> 
        </figure> 
    </div>
    );
}

export default Image;