import { auth,provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../App.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth=({setIsAuthprop})=>{

    const signInWithGoogle=async()=>{
        try{
         const result = await signInWithPopup(auth,provider);
         cookies.set("auth-token",result.user.refreshToken);
         setIsAuthprop(true);
        }catch(err){
            console.error(err);
        }
    };

    return( 
    <div className="login-page">
    <div className="login-card">
    <div className="auth">
        <h3 className="h3">Welcome To Auto Room!</h3>
        <p className="fpg">Sign In With Google To Continue</p>
        <button className="google" onClick={signInWithGoogle}><span className="G-logo">G </span>Sign in with Google</button>
    </div>
    </div>
    </div>
    );
};
export default Auth;