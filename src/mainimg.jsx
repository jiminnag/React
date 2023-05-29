import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Mainimg() {
    return (
        <div className='subimg' id='mainimg'>
            <Carousel>
                <Carousel.Item>
                    <div style={{ width: '1200px', height: '470px' }}>
                        <img src="https://packagefactory.co.kr/main/main_img.jpg" style={{ width: '1200px', height: '470px' }}></img>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '1200px', height: '470px' }}>
                        <img src="https://packagefactory.co.kr/main/main_img2.jpg" style={{ width: '1200px', height: '470px' }}></img>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '1200px', height: '470px' }}>
                        <img src="https://packagefactory.co.kr/main/main_img3.jpg" style={{ width: '1200px', height: '470px' }}></img>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '1200px', height: '470px' }}>
                        <img src="https://packagefactory.co.kr/main/main_img4.jpg" style={{ width: '1200px', height: '470px' }}></img>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Mainimg;