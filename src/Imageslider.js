import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Imageslider.css';
//import img1 from './image/bittu.jpg'
//import img2 from './image/chiku.jpg'
//import img3 from './image/Rishav.jpg'

function Imageslider(){
    return(
        <>

    
       {/*<div className="head">
            <h1> RISHAV KUMAR </h1>
        </div>*/}

        <div className="headbanner">
            <Carousel interval={3000}>
            <Carousel.Item>
                <img className="banner" src="https://wallpapercave.com/wp/wp6547433.jpg" alt="img"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner" src="https://wallpapercave.com/wp/wp3920147.jpg" alt="img"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner" src="https://wallpapercave.com/wp/wp8638038.png" alt="img"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner" src="https://wallpapercave.com/wp/wp4995607.png" alt="img"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner" src="https://wallpapercave.com/wp/wp6134542.jpg" alt="img"/>
            </Carousel.Item>
        </Carousel>
        </div>

        </>
    );
}

export default Imageslider;