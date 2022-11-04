import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/call-from-beyond-full-party.jpg'

const Home = () => {

    return (
        <div className='Home'>
            <Carousel variant="light" className="carousel">
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        class='d-block w-100'
                        src={img}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className='carousel-box'>
                            <p className='main'>Check out the Homebrewed -&gt; Classes -&gt; Kaleido page! Construction is ~complete~ &nbsp;d( ≧ ∇ ≦ )</p>
                            <p className='sub'>note: all other races and classes will redirect back to home</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        class='d-block w-100'
                        src={img}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div div className='carousel-box'>
                            <p className='main'>Session Summaries are TBA...</p>
                            <p className='sub'>Eventually, I will get around to consolidating all of my notes.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="carousel-img"
                    class='d-block w-100'
                    src={img}
                    alt="Third slide"
                    />
                    <Carousel.Caption className='carousel-text'>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>

    )
}

export default Home;
