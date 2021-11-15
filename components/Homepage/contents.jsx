import React from 'react'
import Content from './Content'
import contentimg1 from '../../Images/start.png'
import Contentsec from './mid';
import contentimg2 from '../../Images/mid.png'
import contentimg3 from '../../Images/end.png'
import Contentthird from './End';

function Contents(){
    return(<> 
    
        <Content image={contentimg1} title="Set Your Profile Before Sending Mail" Content="If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos." link="/Signup"/>
        <Contentsec image={contentimg2} title="Shedule Your Mail" Content="If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos." link="/Signup"/>
        <Contentthird image={contentimg3} title="Start Typing, Send Files & You are done!" Content="If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos." link="/Signup"/>

     </>);
}

export default Contents;