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
                    <h3>Hello Friends!</h3>
                    <p><b>Check out the Homebrewed -&gt; Classes -&gt; Kaleido page! Construction is ~complete~ &nbsp;d( ≧ ∇ ≦ )</b></p>
                    <p>Reminder: If you want your character sheets and backstories uploaded, send them to me! Images should be in jpeg format.</p>
                    <h6>p.s. If you're here because you clicked a link that should've taken you somewhere else, that link prob doesn't work yet oop.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-img"
                    src={img}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Pages That Have Things</h3>
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
                    <h3>Pages That Don't Have Things (Yet!)</h3>
                    <h6>Yiu Lai: Session Summaries, NPCs, Random Lore</h6>
                    <h6>Aelith: Session Summaries, NPCs, Random Lore</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    )
}

export default Home;
