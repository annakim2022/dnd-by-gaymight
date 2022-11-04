import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './Races.css';

const Animated = () => {

    return (
        <div className='page'> 
            <div className='outer-box'>
                <h2 className='race-name'>Animated</h2>
                <div className='box'> 
                    <Tabs defaultActiveKey='traits'>
                        <Tab eventKey="traits" title="Racial Traits">
                            <div className='content'>
                            <p>
                                <b>Ability Score Increase: </b> Choose an ability score to increase by 2 and another to increase by 1.<br></br>
                                <b>Age: </b> Not fettered by the aging of the body, Animated live until the soul within them dies. This often happens naturally 
                                    around age 500, but can be prolonged nearly indefinitely. <br></br>
                                <b>Alignment: </b> Most Animated share the alignments of their creators. <br></br>
                                <b>Size: </b> You can be any height you desire, your size is Medium. Your Toy form is Tiny. <br></br>
                                <b>Speed: </b> You have a base speed of 30 feet. <br></br>
                                <b>Toy Boat, Toy Boat, Toy Boat: </b> You can transform into your Toy form as an action. This form can be hidden by someone else 
                                    as a bonus action. You cannot move or speak while in this form. <br></br>
                                <b>Constructed: </b> You gain proficiency in Constitution saving throws. <br></br>
                                <b>Not Skin: </b> When wearing leather or other non-metal armor, you gain a +1 bonus to your AC. <br></br>
                                <b>Languages: </b> You speak the language(s) of your creator and Common.
                            </p>

                            <h3>Another Life</h3>
                            <p>It is widely believed that the Animated have been granted another chance at life after dying in their first. Though merely 
                                urban legend, Animated themselves have no evidence to prove or disprove this theory, so the truth is still unknown. 
                                Similar to Warforged, Animated have souls and are able to craft bodies for new Animateds, though there is no Soul 
                                Stone-like vessel for the soul, it is bound to the material of the Animated like a human or elf’s soul is to their flesh. 
                                Given the manufactured nature of their bodies, the Animated can choose the form that their humanoid during the first 
                                several years after they first enter it. </p>

                            <p> The Animated have two forms. The first is a small, toy-like object that is the original form of the individual. This form, 
                                when completed by the Animated’s parents, will be imparted with a child-like soul. This form is unable to move or speak, 
                                but the Animated still has all five of its senses and is capable of retaining information and forming memories from the 
                                time they spend in this form. The second form is the larger, humanoid form that the Animated becomes when they are “born”. 
                                The first time they enter this form from their toy-like form, they will appear as a child, often ranging in age anywhere 
                                from 6 months to 4 years. From this point on they can switch between forms, effectively slowing their visible aging process. </p>

                            
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Animated;