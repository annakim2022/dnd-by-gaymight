import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'
import './Malum.css';
import malum7 from './malum-stats7.jpg'
import malum_img from './malum-img.jpeg'

const Malum = () => {

    return (
        <div className='Malum'>
            <div className='outer-box'>
                <h2 className='class-name'>Malum</h2>
                <div className='box'> 
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'>
                            <Image fluid className='character-art' src={malum_img}></Image>
                            </div>
                        </Tab>
                        <Tab eventKey="character-sheet" title="Character Sheet">
                            {/* <div className='content'> */}
                            <Image fluid className='character-sheet' src={malum7}></Image>
                            {/* </div> */}
                        </Tab>
                        <Tab eventKey="background" title="Background">
                            <div className='content'>
                            <h4>Pre-Campaign</h4>
                            <p>Created in Huntokar's image, he was raised to protect the forest. However, although he cares for forest life, he was taught 
                                that taking life is sacred as well, and sometimes disaster brings new life to uphold the balance. He feels no guilt in killing 
                                creatures because death is not frightening to him, but he does not outright attack trespassers or ne'er do wellers unless they 
                                have made it known they are a potential threat. Given his young age and how deep he lived in the forest, there was only one 
                                occasion where he ran into an intelligent being that was not an animal. Well, animal-like, since a lost Tabaxi was wandering 
                                around looking for some ruins that hold a great monster. She wants to slay it for knowledge and to sell its parts. Malum warns 
                                against killing for sport, saying that she must uphold balance, but the Tabaxi continues on and does as she said she would. She 
                                skins the parent and takes its carcass, but leaves behind an egg without knowledge. Malum happens upon the egg and looks for its 
                                parent, but assumes the Tabaxi killed it. He is enraged that the Tabaxi didn't heed his warnings and is consumed by a fear to 
                                take revenge when Huntokar speaks to him saying the damage has been done, and creating strife would disrupt the balance further. 
                                He takes the egg to raise, pitying this creature whose mom died due to his improper warning. Being as young and inexperienced as 
                                he is, he grows anxious at the thought of not properly carrying out his duties again. Although not forbidden by Huntokar, Malum 
                                is reluctant to leave the forest for fear of his social ineptitude, but also because he sees no reason to since he knows the 
                                outside world cares not for Huntokar's goals or even knows who she is. Such a thought that what he's been working towards will 
                                seem pointless to others is frustrating to him, because his duty is the most important thing to him. When his curiosity of the 
                                outside world was still budding, he would listen to the conversations of birds, but they were often complaints about how their 
                                nests were ransacked for sport by young children, or even the goods things like humanoid people taking care and pampering animals 
                                which is disrupting the natural instincts of wildlife, and how there are laws to protect endangered species that are naturally 
                                dying in the environment.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>   
        </div>
    )
}

export default Malum;