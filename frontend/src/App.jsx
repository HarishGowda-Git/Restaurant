import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import nav from './assets/Photos/hotel-background.jpg'



const App = () => {
  return (
    <>
       <img src={nav} alt="" id='back-img'/>
      <Navbar />
    </>
  )
}

export default App