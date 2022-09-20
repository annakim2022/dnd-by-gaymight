import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import img from './placeholder.png'

const Home = () => {

    return (
          
        <div className='Home'>   
        <div className='announcements'>
            <Carousel variant="dark" className="carousel">
                <Carousel.Item>
                    <img
                    className="carousel-img"
                    src={img}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Check out the Homebrewed -&gt; Classes -&gt; Kaleido page! Construction is ~complete~ &nbsp;d( ≧ ∇ ≦ )</h3><br></br>
                    <p>note: all other races and classes will redirect back to home</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-img"
                    src={img}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Session Summaries are TBA...</h3><br></br>
                    <h6>Eventually, I will get around to consolidating all of my notes.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="carousel-img"
                    src={img}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
        </div>
    )
}

export default Home;
