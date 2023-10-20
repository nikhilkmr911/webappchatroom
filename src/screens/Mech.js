import React, { useState, useEffect } from 'react';
import DB from '../data.js';
import '../styles/Chat.css';
import AddMech from '../components/AddMech.js';
import Navbar from '../components/Navbar.js';

export default function Mech() {
  const [mechanics, setMechanics] = useState([]);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedMechanics = JSON.parse(localStorage.getItem('mechanics'));
    if (storedMechanics) {
      setMechanics(storedMechanics);
    } else {
      setMechanics(DB); // If no data in local storage, use default data
    }
  }, []);

  function addMechanic(mechanic) {
    const updatedMechanics = [...mechanics, { ...mechanic, id: mechanics.length + 1 }];
    setMechanics(updatedMechanics);
    localStorage.setItem('mechanics', JSON.stringify(updatedMechanics)); // Store data in local storage
  }
  return (
    <>
      <Navbar/>
      <h1 style={{textAlign:"center", color:"white",marginBottom:"50px"}}>Mechanics Section</h1>
      <h3 style={{color:"white",marginLeft:"5px"}}>Add Your Favourite Local Mechanics below</h3>

      <AddMech addMechanic={addMechanic}/>
      
      {
      mechanics.map((mechanic)=>(
        <div key={mechanic.id} class="card shadow" style={{width: "30rem", height: "20rem"}}>
            <div className="card-header bg-white">
            <h5 className="card-title">{mechanic.mechname}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Location: {mechanic.location}</p>
              <p className="card-text">Rating: {mechanic.rating}</p>
              <p className="card-text">Experience: {mechanic.experience} years</p>
              <p className="card-text">Languages: {mechanic.languages}</p>
              <p className="card-text">ZIP code: {mechanic.zip}</p>
            </div>
              <div className="card-footer bg-white">
                 <button style={{marginRight:"100px"}} className="btn btn-warning">{mechanic.email}</button>
                 <button className="btn btn-danger">{mechanic.contact}</button>
            </div>
        </div>
        
      ))}
    </>
  )
}
