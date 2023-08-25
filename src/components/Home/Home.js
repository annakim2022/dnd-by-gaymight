import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import yiu_lai_group from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/yiu_lai_group.jpg'
import group_pic from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/group_pic.jpg'

const Home = () => {

    return (
        <div className='Home'>
            <div className='home-box'>

            <Carousel variant="light" className="carousel">
                <Carousel.Item>
                    <div className="carousel-img">
                    <img
                        
                        class='d-block w-100'
                        src={yiu_lai_group}
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <div className='carousel-box'>
                            <p className='main'>Check out the Homebrewed -&gt; Classes -&gt; Kaleido page! Construction is ~complete~ &nbsp;d( ≧ ∇ ≦ )</p>
                            <p className='sub'>note: all other races and classes will redirect back to home</p>
                        </div>
                    </Carousel.Caption> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-img">
                    <img
                        
                        class='d-block w-100'
                        src={group_pic}
                        alt="Second slide"
                    />
                    </div>
                    {/* <Carousel.Caption>
                        <div div className='carousel-box'>
                            <p className='main'>Session Summaries are TBA...</p>
                            <p className='sub'>Eventually, I will get around to consolidating all of my notes.</p>
                        </div>
                    </Carousel.Caption> */}
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
        </div>
    )
}

export default Home;
