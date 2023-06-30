import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navbar, Contact, Footer,Services,About,Home} from './components';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Services' element={<Services/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
