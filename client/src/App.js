import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import ErrorPage from './components/ErrorPage'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
     
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/about' element={<About/>} />
      <Route path='*' element={<ErrorPage/>} />
      
    </Routes>
    </>
    
    
   
   
    
  )
}

export default App
