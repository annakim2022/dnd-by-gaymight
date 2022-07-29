import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'
import '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/CharacterSheets/CharacterSheets.css';
import naomi_headshot from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/naomi_headshot.jpg'

const Naomi = () => {

    return (
        <div className='CharacterSheets'>
            <div className='outer-box'>
                <h2 className='class-name'>Naomi</h2>
                <div className='box'> 
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'>
                            <Image fluid className='character-art' src={naomi_headshot}></Image>
                            </div>
                        </Tab>
                        <Tab eventKey="character-sheet" title="Character Sheet">
                            TBD...
                            {/* <div className='content'> */}
                            {/* <Image fluid className='character-sheet' src={}></Image> */}
                            {/* </div> */}
                        </Tab>
                        <Tab eventKey="background" title="Background">
                            <div className='content'>
                            <h4>Pre-Campaign</h4>
                                TBD...
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>   
        </div>
    )
}

export default Naomi;