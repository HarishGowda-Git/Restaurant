import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import nav from '../assets/Photos/hotel-background.jpg'
import Cards from './cards'
import '../assets/Css/body.css'
import Carousel from './carousel'
const Body = () => {
    const [tab, settab] = useState("reserve");
    const handletab = (val) =>{
        settab(val);
    }
    return (
        <>

            <img src={nav} alt="" id='back-img' />
            <Navbar />
            <div className="body-container">
                <Carousel />
                <br />
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                       <h3><a class="nav-link active" aria-current="page" onClick={handletab(reserve)}>Reservation</a></h3>
                    </li>
                    <li class="nav-item">
                    <h3><a class="nav-link active" aria-current="page" href="#">Menu</a></h3> 
                    </li>
                    <li class="nav-item">
                    <h3><a class="nav-link active" aria-current="page" href="#">Events</a></h3>
                    </li>
                 
                </ul>
            </div>
        </>
    )
}

export default Body