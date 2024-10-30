import React from 'react'
import '../assets/Css/carousel.css'
import card1 from '../assets/Photos/bekary/carousel1.jpeg'
import card2 from '../assets/Photos/CoqauVin.webp'
import card3 from '../assets/Photos/TartteTatin.webp'

const Carousel = () => {
    return (

        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true" >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={card1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Bakery</h1>
                        <h3>"Warm, Wholesome, and Freshly Baked Bliss!"</h3>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={card2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Main Course</h1>
                        <h3>"Savor the Heart of Every Meal with Bold Flavors!"</h3>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={card3} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Dessert</h1>
                        <h3>"Indulge in Sweet Moments of Pure Delight!"

</h3>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev" style={{ marginLeft: "0px" }}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next" style={{ marginLeft: "-165px" }}>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel