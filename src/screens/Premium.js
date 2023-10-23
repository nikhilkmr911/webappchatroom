import React from 'react'
import {Link} from 'react-router-dom';
import premiumData from '../premiunData'
import Navbar from '../components/Navbar'

export default function Premium() {
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:"center", color:"white",marginBottom:"50px"}}>Premium QnA Section</h1>

    <h3 style={{color:"white",marginLeft:"5px"}}>Get your questions answered by Experts !!</h3>
    <p style={{color:"white",marginLeft:"5px", fontSize:"18px",fontFamily:"sans-serif"}}>Go to Connect button to interact with your favourite expert and get your answers via phone call within 24 hours !!</p>
    
    <div>
    {
      premiumData.map((data)=>(
        <div key={data.id} class="card shadow" style={{width: "30rem", height: "20rem"}}>
            <div className="card-header bg-white">
            <h5 className="card-title">{data.name}<span>  </span><a href={data.youtubelink} className="btn btn-danger">YouTube</a> <span><a href={data.instalink} className="btn btn-warning">InstaGram</a></span></h5>

            </div>
            <div className="card-body">
              <p className="card-text">Rating: {data.rating}</p>
              <p className="card-text">Experience: {data.experience} years</p>
              <p className="card-text">Languages: {data.languages}</p>
              <p className="card-text">Youtube Family: {data.youtube} family</p>
            </div>
              <div className="card-footer bg-white">
                 <a href={`mailto:${data.email}`} style={{marginRight:"100px", backgroundColor:"#ffffff"}} className="btn">📧{data.email}</a>
                 <Link  className="m-3 mx-1 btn btn-primary" to="/premium/connect">Connect</Link>
            </div>
        </div>
      ))}
    </div>

    </>
  )
}
