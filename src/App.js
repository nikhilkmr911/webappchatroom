import React,{useState,useRef} from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from "universal-cookie";
import { Chat } from './components/Chat';
import { signOut } from "firebase/auth"
import {auth} from "./firebase-config"

const cookies = new Cookies();

function App() {
  const[isAuth,setIsAuth]=useState(cookies.get("auth-token"))
  const [room,setRoom]=useState(null)
  const roomInputRef=useRef(null)

  const signUserOut=async()=>{
    await signOut(auth);
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null);
  }

  if(!isAuth){
  return  (
  <div>
    <Auth setIsAuthprop={setIsAuth}/>
  </div>
  );
}
 return (
  <> 
  {room ? (
   <Chat room={room}/> ):( 
    <div className='room-page'>
    <div className='room-card'>
    <div className="room"> 
        <input className="input-box" placeholder="Select Car Model..." ref={roomInputRef}/>
        <button onClick={()=> setRoom(roomInputRef.current.value)} >Enter Chat</button>
    </div>
    <div>
          <button onClick={signUserOut} className="sign-out-room">Sign Out</button>
    </div> 
    </div>
    <div className='room-card-2'>
    <div style={{fontFamily:"sans-serif",color:"black",fontWeight:"bold",backgroundColor:"#f0e9bb"}}>Premium QnA</div>
    <div style={{fontFamily:"cursive",color:"brown"}}>Auto Experts</div>
    <div >Get Your Quesions Answered within 24hours from your favourite auto expert.</div>
    <div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic' />
      <span style={{color:"black"}}>Free Advice </span>
      -freead1232gmail.com</p></div><div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
      <span style={{color:"black"}}>man&motor</span>
      -manmot14gmail.com</p></div><div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic' />
      <span style={{color:"black"}}>AutoTechnic</span>
      -autotc1662gmail.com</p></div>
      <div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic' />
      <span style={{color:"black"}}>AskCarGuru</span>
      -askgur9992gmail.com</p></div>
      <div style={{fontFamily:"cursive",color:"black",fontWeight:"500",backgroundColor:"#f0e9bb"}}>Get a Call From the expert for the same</div>
    </div>

    <div className='room-card-3'>
    <div style={{fontFamily:"cursive",color:"brown"}}>Best Local Mechanics</div>
      <div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic' />
      AutoLogue
      9984756267</p></div>
      <div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
      CarDecorr
      9864325656</p></div>
      <div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic' />
      DetailHub
      7689864763</p></div>
      <div style={{color:"gray"}}><p><img className='pic' src='https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' />
      MksGarage
      6758986732</p></div>

    </div>
    </div>

      )}
        <div className="sign-out-chat-div">
          <button onClick={signUserOut} className="sign-out-chat">👤 Sign Out</button>
        </div>  
  </>
 );
}
export default App;
