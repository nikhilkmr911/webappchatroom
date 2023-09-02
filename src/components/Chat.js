import { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { async } from "@firebase/util";
import { auth, db} from "../firebase-config";
import  "../styles/Chat.css";

export const Chat =({room})=> {

    const [newMessage,setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db,"messages");
    const ref=useRef(null)
    
    useEffect(()=>{
      ref.current?.scrollIntoView({behavior:"smooth"});
    },[messages]);

    useEffect(()=>{
      const queryMessages = query(messagesRef,where("room","==", room),orderBy("createdAt"));
      const unsubscribe=onSnapshot(queryMessages,(snapshot)=>{
        let messages = [];
        snapshot.forEach((doc)=>{
           messages.push({...doc.data(), id: doc.id});
        });
        setMessages(messages);
    });
    return () => unsubscribe();
    },[]);

    const handleSubmit= async (e)=>{
        e.preventDefault();  
        if(newMessage === "") return;
        console.log(newMessage)

        await addDoc(messagesRef, {
           text: newMessage,
           createdAt: serverTimestamp(),
           user: auth.currentUser.displayName,
           room,
        });
        setNewMessage("");
    };

    return (
        <div 
        className="chat-app" >
        <div className="header">
          <h2>👋🏻Customer Room for {room.toUpperCase()} owners</h2>
          <div  style={{backgroundColor:"#3e3c61"}}>Discuss Your doubts regarding Your Car Here</div>
        </div>
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <span className="user">{message.user}</span> {message.text} 
            </div>
          ))}
          <div ref={ref} />
        </div>
        <form onSubmit={handleSubmit} className="new-message-form">
            <input
              type="text"
              value={newMessage}
              onChange={(e)=>setNewMessage(e.target.value)} 
              className="new-message-input"
              placeholder="Type Your Message Here..."
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    </div>
    );
};