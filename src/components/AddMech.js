import React, { useState } from 'react'
import '../styles/Chat.css'

const initialState={
    mechname: "",
    contact: "",
    email: "",
    zip: "",
    rating:"",
    languages : "",
    location: "",
    experience: ""
}

export default function AddMech({addMechanic}) {

 const [mechanic,setMechanic] = useState(initialState);

 function handleSubmit(e){
    e.preventDefault();
    addMechanic(mechanic);
    setMechanic(initialState);
 }

 function handleChange(e){
     setMechanic({...mechanic, 
        [e.target.name]:e.target.value})
 }

  return (
    <>
    
<form style={{width:"80%"}} className="my-4" >
  <div className="form-group">
    <input
      type="text"
      className="mx-1 m-2 form-control"
      placeholder="Mechanic's name"
      name="mechname"
      onChange={handleChange}
      value={mechanic.mechname}
    />
  </div>
  <div className="mx-1 m-2 form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Contact no."
      name="contact"
      onChange={handleChange}
      value={mechanic.contact}
    />
  </div>
  <div className="mx-1 m-2 form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Experience"
      name="experience"
      onChange={handleChange}
      value={mechanic.experience}
    />
  </div>
  <div className="mx-1 m-2 form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Zip Code"
      name="zip"
      onChange={handleChange}
      value={mechanic.zip}
    />
  </div>
  <div className="mx-1 m-2 form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Languages"
      name="languages"
      onChange={handleChange}
      value={mechanic.languages}
    />
  </div>
  <div className="mx-1 m-2 form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Location"
      name="location"
      onChange={handleChange}
      value={mechanic.location}
    />
  </div>
  <div className="mx-1 m-2 form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Email"
      name="email"
      onChange={handleChange}
      value={mechanic.email}
    />
  </div>
  <div className="mx-1 m-2 form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Rating"
      name="rating"
      onChange={handleChange}
      value={mechanic.rating}
    />
  </div>
  <button className="mx-1 m-2 btn btn-warning" type="submit" onClick={handleSubmit}>Submit</button>
</form>


    </>
  )
}
