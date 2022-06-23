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
                    <Carousel.Caption className='announcements'>
                    <h3>Hello Friends!</h3>
                    <p><b>Check out the Hombrewed: Races: Animated card! It doesn't lead back here anymore :) Also, if you haven't already, take a 
                        look at the Homebrewed: Classes: Arsenalist page - it's one of the few that are complete.</b></p>
                    <p>Reminder: please don't share this website with anyone. idk how servers really work yet and don't 
                        know how many ppl can open this without crashing it lmao.</p>
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
                    <h3>Things That Work (even tho they're mostly empty)</h3>
                    <h6>Home, Player Bios</h6>
                    <h6>Yiu Lai: Character Sheets</h6>
                    <h6>Aelith: Character Sheets</h6>
                    <h6>Homebrewed: Races, Classes
                    </h6>
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
                    <h6>Yiu Lai: Session Summaries, NPCs, Random Lore</h6>
                    <h6>Aelith: Session Summaries, NPCs, Random Lore</h6>
                    <h6>A lot of random stuff I haven't gotten around to fixing yet... so please let me know if something breaks :,)</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    )
}

export default Home;
