import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css' // Import your CSS file for styling

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://img.freepik.com/free-photo/beautiful-vertical-shot-taj-mahal-building-agra-india-clear-sky_181624-21517.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=ais" alt="phone" className="carousel-image"/>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/beautiful-girl-sitting-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1163.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=ais" alt="phone" className="carousel-image"/>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/landscape-view-huge-maheshwar-fort-ahilya-fort-this-monument-is-banks-narmada-river-maheshwar-madhya-pradesh-india_136354-12387.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=ais" alt="phone" className="carousel-image"/>
                    </div>
                    <div>

                    <img src="https://img.freepik.com/premium-photo/canopy-india-gate-sunset-new-delhi-view-from-national-war-memorial_400112-339.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=ais" alt="phone" className="carousel-image"/>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww" alt="phone" className="carousel-image"/>
                    
                </div>
                
            </Carousel>
        </div>
    );
}
