import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'

// import Haze3 from './Haze-stats-3.jpg'
import haze from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/haze-img.jpg'

const Haze = () => {

    return (
        <div className='CharacterSheets'>
            <div className='outer-box'>
                <h2 className='page-title'>Haze</h2>
                <div className='box'>
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'>
                                <Image fluid className='character-art' src={haze}></Image>
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

export default Haze;