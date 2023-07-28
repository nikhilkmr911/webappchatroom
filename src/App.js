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
        <input className="input-box" placeholder="Select room..." ref={roomInputRef}/>
        <button onClick={()=> setRoom(roomInputRef.current.value)} >Enter Chat</button>
      </div>
      <div>
          <button onClick={signUserOut} className="sign-out-room">Sign Out</button>
        </div> 
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
