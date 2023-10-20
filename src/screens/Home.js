import React,{useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Chat.css'
import Auth from '../components/Auth';
import Cookies from "universal-cookie";
import Chat from '../components/Chat';
import { signOut } from "firebase/auth"
import {auth} from "../firebase-config"
import ImageSlider from '../components/ImageSlider';
import Navbar from '../components/Navbar';

export default function Home() {

  const cookies = new Cookies();
  
  const[isAuth,setIsAuth]=useState(cookies.get("auth-token"))

  const [room,setRoom]=useState(null)
  const roomInputRef=useRef(null)

  const t1= `${process.env.PUBLIC_URL}/4.png`
  const t2= `${process.env.PUBLIC_URL}/9.png`
  const t3= `${process.env.PUBLIC_URL}/10.png`
  const t4= `${process.env.PUBLIC_URL}/15.png`
  const t5= `${process.env.PUBLIC_URL}/16.png`
  const t6= `${process.env.PUBLIC_URL}/27.png`
  const t7= `${process.env.PUBLIC_URL}/29.png`

  const slides =[
    { url: t1 , title:"image-1"},
    { url: t2 , title:"image-2"},
    { url: t3 , title:"image-3"},
    { url: t4 , title:"image-4"},
    { url: t5 , title:"image-5"},
    { url: t6 , title:"image-6"},
    { url: t7 , title:"image-7"}
  ]

 const containerStyles={
  width:"600px",
  height: "600px",
  margin: "0 auto"
 } 

  const signUserOut=async()=>{
    await signOut(auth);
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null);
  }

  if(!isAuth){
  return  (
  <div >
    <Auth setIsAuthprop={setIsAuth}/>
  </div>
  );
}

function roomNull(){
  setRoom(null);
}

 return (
  <> 
  {room ? (
   <Chat room={room}/> ): ( 
    
    <div className='room-page'>
    <div class="scroll-bg"></div>
    <Navbar signUserOut={signUserOut}/>
    <div className='room-card'>
    <div className="room"> 
        <input className="input-box" placeholder="Select Car Model..." ref={roomInputRef}/>
        <button onClick={()=> setRoom(roomInputRef.current.value)} >Enter Chat</button>
    </div>
    </div>
    <div style={{textAlign:"center", position:"relative", marginTop:"30px"}}> 
    
    
    <Link  className="m-3 mx-1 btn btn-primary" to="/mech">Mechanics</Link>
    <Link  className="m-3 mx-1 btn btn-primary" to="/premium">Premium QnA</Link>
    
    <h1 style={{ marginTop: "50px", marginBottom: "20px" }}>
         <span style={{ backgroundColor: "black", color: "#fff", borderRadius: "5px" ,fontSize:"80%", padding:"5px"}}>
           News/Articles
         </span>
    </h1>
  <div className='container'>  
   <div className='box'>
   <div>
   <div class="card shadow border border-4" style={{width: "16rem", height: "34rem"}}>
            <div className="card-header bg-white">
            <h4 className="card-title" style={{fontWeight:"bolder"}}>Feed</h4>
            </div>
            <div className="card-body card-content">
              <p className="card-text">The Hyundai Verna has grabbed five stars for both adult and child occupant protection. It is the first made-in-India Hyundai car to get a full 5-star rating in the safety assessment.<br/><a href="https://www.cardekho.com/india-car-news/2023-hyundai-verna-scores-5-stars-in-global-ncap-crash-tests-31518.htm#:~:text=The%20Hyundai%20Verna%20has%20grabbed,in%20adult%20occupant%20protection%20assessments." className="btn btn-warning">visit feed</a></p>
              <p className="card-text">Tata Motors has launched the Harrier facelift at Rs 15.49 lakh for the base Smart (O) MT variant, (introductory price, ex-showroom, India). The Harrier facelift gets a revised exterior and interior, and an updated features list.<br /><a href="https://www.autocarindia.com/car-news/tata-harrier-facelift-launched-at-rs-1549-lakh-429534" className="btn btn-warning">visit feed</a> </p>
            </div>
        </div>
    </div>
    <div style={containerStyles} >
      <ImageSlider slides={slides} />
    </div>
    <div>
    <div class="card shadow border-4" style={{width: "15rem", height: "20rem"}}>
            <div className="card-header bg-white" >
            <h4 className="card-title" style={{fontWeight:"bolder", color:"black"}}>New Launches!</h4>
            </div>
            <div className="card-body">
               <a href="https://www.hyundai.com/in/en/find-a-car/verna/highlights" className="btn" style={{fontWeight:"bold", color:"Highlight"}}>Hyundai Verna</a>
               <a href="https://cars.tatamotors.com/suv/harrier" className="btn" style={{fontWeight:"bold", color:"Highlight"}}>Tata Harrier</a>
               <a href="https://www.nexaexperience.com/fronx" className="btn" style={{fontWeight:"bold", color:"Highlight"}}>Suzuki fronx</a>
               <a href="https://www.hyundai.com/in/en/find-a-car/exter/highlights" className="btn" style={{fontWeight:"bold", color:"Highlight"}}>Hyundai Exter</a>
               <a href="https://www.hondacarindia.com/honda-elevate" className="btn" style={{fontWeight:"bold", color:"Highlight"}}>Honda Elevate</a>
               <a href="https://auto.mahindra.com/suv/thar" className="btn" style={{fontWeight:"bold", color:"Highlight"}}>Mahindra Thar</a>
            </div>
        </div>

    </div>
   </div> 
  </div>

    </div>
  </div>
  

      )}
        <div className="sign-out-chat-div">
          <button onClick={roomNull} className='m-3 mx-1 btn btn-warning'>Home</button>
          <Link  className="m-3 mx-1 btn btn-warning" to="/mech">Mechanics</Link>
          <Link  className="m-3 mx-1 btn btn-warning" to="/premium">Premium QnA</Link>
          <button onClick={signUserOut} className="sign-out-chat">Sign Out</button>
        </div>   
  </>
 );
}