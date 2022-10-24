import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'

import aravala15 from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/aravala-stats-15.jpg'
import aravala_fullbody from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/aravala-image.jpg'
import aravala_headshot from "/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/aravala_headshot.jpg"

const Aravala = () => {

    return (
        <div className='CharacterSheets'>
            <div className='outer-box'>
                <h2 className='page-title'>Aravala Amonodel</h2>
                <div className='box'>
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'><Image fluid className='character-art' src={aravala_headshot}></Image></div>
                            <div className='content'><Image fluid className='character-art' src={aravala_fullbody}></Image></div>
                        </Tab>
                        <Tab eventKey="character-sheet" title="Character Sheet">
                            {/* <div className='content'> */}
                            <Image fluid className='character-sheet' src={aravala15}></Image>
                            {/* </div> */}
                        </Tab>
                        <Tab eventKey="background" title="Background">
                            <div className='content'>
                                <h4>Pre-Campaign</h4>
                                <p className='text'>Born into one of the oldest and most prestigious noble elf families in the Sylvan Province(?), Aravala Amonodel grew up
                                    learning how to bend high society to her will. Her family name, Amonodel, translates to Moonflower in the common language,
                                    and speaks to the rare silver eyes that have been passed down since the first wood elves came to grace the forests that
                                    that make up her home. Despite her silver tongue, Aravala prefers the company of animals and wildlife to the politics of
                                    high society. Her reverance and love of nature stems from the Old Faith, which is devoutly practiced by her people.</p>
                                <p>Aravala declared her adulthood at age 148, the day a malicious cult of wind elementals attacked the wood elves' forest,
                                    laying waste to her home with horrifying tornadoes made of unnatural powers. She selected her adult name, Aravala
                                    (reminiscent of her childhood name Ara), in a vow to be valorous against the elementals who devestated the forest. The
                                    whistle that she wears around her neck is made from the wood of the fallen rowan trees that used to surround her family's
                                    estate before the cult destroyed it.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Aravala;