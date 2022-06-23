import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import img from './placeholder.png'

const Home = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

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
                    <h3>Welcome Friends!</h3>
                    <h6>Surprise! haha. This slide is for announcements. Please explore the website! It's very empty and I'll need 
                        everyone's help populating it, but it's <i>mostly</i> functional and <i>shouldn't</i> break (fingers crossed).</h6>
                    <h6>Also please please please! Don't share the link with anyone. idk how servers really work yet and don't 
                        know how many ppl can open this without it crashing lmao.</h6>
                    <h6>p.s. If you're here 'cause you clicked a link that should've taken you somewhere else, that link prob doesn't work yet oop.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-img"
                    src={img}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Things That Work</h3>
                    <h6>Home, Player Bios</h6>
                    <h6>Yiu Lai -> Character Sheets</h6>
                    <h6>Aelith -> Character Sheets</h6>
                    <h6>Homebrewed -> Races, Classes</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-img"
                    src={img}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Things That <b>DO NOT</b> Work (Yet!)</h3>
                    <h6>Yiu Lai -> Session Summaries, NPCs, Random Lore</h6>
                    <h6>Aelith -> Session Summaries, NPCs, Random Lore</h6>
                    <h6>A lot of random stuff I haven't gotten around to fixing yet... so please let me know if something breaks :,)</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    )
}

export default Home;
