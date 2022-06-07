import React from 'react';
import './Home.css';
import {
    Link
  } from 'react-router-dom';


const Home = () => {

    return (
        
        
        <div className='Home'> 
            <h1>
                Home!
            </h1>
                {/* <div  className='tabs'>
                <Link to='/player-bios'>Player Bios</Link>
                </div>
                <div className='tabs'>
                <Link to='/character-sheets'>Character Sheets</Link>
                </div>
                <div className='tabs'>
                <Link to='/campaigns'>Campaigns</Link>
                </div>
                <div className='tabs'>
                <Link to='/homebrewed'>Homebrewed</Link>
                </div>    */}
        </div>
    )
}

export default Home;