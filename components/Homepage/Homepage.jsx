import React from 'react'
import About from './About';
import Footer from './Footer';
import Header from './Header';
// import { useHistory } from 'react-router-dom'


function Homepage(){
    // const history = useHistory();
    // useEffect(()=>{
    //     if(localStorage.getItem('tokendata')){
    //         history.push("/")
    //     }
    // })
    return(<> 
        <Header />
        <About />
        <Footer />  
    
    </>);
}


export default Homepage;