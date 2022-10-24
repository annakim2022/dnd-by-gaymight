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
                    <Carousel.Caption className='carousel-text'>
                        <div className='carousel-box'>
                            <h3>Check out the Homebrewed -&gt; Classes -&gt; Kaleido page! Construction is ~complete~ &nbsp;d( ≧ ∇ ≦ )</h3><br></br>
                            note: all other races and classes will redirect back to home
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
                    <Carousel.Caption className='carousel-text'>
                        <div div className='carousel-box'>
                            <h3>Session Summaries are TBA...</h3><br></br>
                            Eventually, I will get around to consolidating all of my notes.
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
