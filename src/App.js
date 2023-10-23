import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import Mech from './screens/Mech';
import Premium from './screens/Premium';
import Connect from './screens/Connect';
import './App.css'

function App() {
  return(
  <BrowserRouter>
   <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/mech" element={<Mech/>}/>
      <Route path="/premium" element={<Premium/>}/>
      <Route path="/premium/connect" element={<Connect/>}/>
   </Routes>
  </BrowserRouter>
 );
}
export default App;
