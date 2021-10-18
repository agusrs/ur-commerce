import { Paper } from '@material-ui/core';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
    return (
        <Paper elevation={3}>
            <Carousel infiniteLoop emulateTouch showStatus={false} showThumbs={false} >
                <div key="1" style={{ padding: 20, height: 150 }} >
                    Hola1
                </div>
                <div key="2" style={{ padding: 20, height: 150 }} >
                    Hola2
                </div>
                <div key="3" style={{ padding: 20, height: 150 }} >
                    Hola3
                </div>
                <div key="4" style={{ padding: 20, height: 150 }} >
                    Hola4
                </div>
            </Carousel>
        </Paper>
    )
}

export default HomeCarousel
