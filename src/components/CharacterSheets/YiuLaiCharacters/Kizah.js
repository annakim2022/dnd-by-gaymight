import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'

import kizah from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/kizah-img.JPG'

const Kizah = () => {

    return (
        <div className='page'>
            <div className='outer-box'>
                <h2 className='page-title'>Kizah</h2>
                <div className='box'>
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'>
                                <Image fluid className='character-art' src={kizah}></Image>
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
                                <p className='text'>I was born to a middle class family of wood elves who, over the years, had many children and were reasonably 
                                well respected. They lived in a town that had a strong connection with the natural world and several fey residents. One night when 
                                I was about 2, a coven of hags attacked in an effort to gather children to turn them and ensure their coven's longevity. I was then 
                                kidnapped and taken to the feywild to undergo a blood ritual. Luckily, midway through the process, a band of adventurers interrupted 
                                and fought off the hags, rescuing the four of us who had not yet been fully turned. I had already taken on some of the hag’s blood 
                                and became a Hexblood. One other child had also become a Hexblood but the other two were still untouched. This all happened when I 
                                was very young and though I have heard retellings of my past many times, I have no personal memory of these events.</p>
                                <p>Not knowing where we were from, the adventurers brought us to a border town of bullywugs who agreed to foster us. In a very “takes 
                                a village to raise a child” kind of way, my siblings and I were allowed to wander around the village and most residents were happy to 
                                provide food/housing when needed. Eventually we all ended up finding some kind of primary residence where they preferred to live but 
                                still remained close as we were bound by our lack of fey origin. My chosen residence was with Tups, a bullywug ranger who patrolled 
                                the area and was sent out of the village to track beasts and forage when needed. I was an antsy child and very much wanted to explore, 
                                idolizing and mimicking Tups in the hopes of being taken out of the village on a journey. He was very patient with me during those 
                                years though I’m sure I did nothing to make it easier. I was also endlessly fascinated by the tales from the adventurers who rescued 
                                me as they returned to the village periodically and had ventured much farther than anyone else. When I got older, I was eventually 
                                permitted to take low risk travels with Tups. I was really afraid of messing up and not being invited on another fun quest, so I tried 
                                my best to copy Tups perfectly. This resulted in the manifestation of their Kaleido powers and the unintentional absorption of a piece 
                                of his essence. I did feel kind of bad about it because it wasn’t on purpose but I was thrilled to feel like I was becoming more adept, 
                                with the greater potential to explore the rest of the fey wilds. Over the years, two of my siblings, Quithanna and Ilythyrra, had 
                                decided to return to the material plane. Quithanna left to search for her birth family, Ilythyrra felt a call to return to the material 
                                plane, somewhere she might better fit in and connect with the world around her. My last sibling, Zegia, plans to stay in the fey wild 
                                permanently as she has a deep connection with an arch fey and feels blessed by the plane she’s currently living in. I don’t care much 
                                about this plane versus that but I’ve always felt drawn to the unknown, seeking to explore, adventure, and understand the world better. 
                                As such, I wanted to feel satisfied in their exploration of the feywilds before considering leaving for another plane. It is unlikely 
                                that I’ll ever settle down anywhere as I would quickly become bored if I were stuck in one place for too long. After a number of years 
                                acquiring more powers through the tracking and analysis of beasts and creatures in the fey wild, several solo excursions around the 
                                village, and more time traveling with their guardian, I felt a greater pull to discover what lay on the darker section of the feywilds. 
                                The band of adventurers I had become acquainted with were in the village for a bit and planned to venture back to the more sinister 
                                areas. Hearing this, I decided to tail them, being guided by people who had been there before but also with some degree of independence. 
                                At first, things went smoothly, and I discovered several new creatures with more power than I ever  thought I would find. Things took a 
                                turn when I followed the adventurers into a bog where several hags lived. The two sides fought, and in the fray one of them found me. I 
                                was able to avoid several attacks and became overconfident, believing I had properly gauged enough of their power to try and capture 
                                some of the hag’s abilities. However, when I struck, the power was beyond my capabilities and upon contact a wave of necrotic energy 
                                engulfed my right arm, leaving it permanently blacked and disfigured. The adventuring party was able to defeat the hags and prevent me 
                                from taking any more damage and they, a little angrily, returned me to the village again. Ego wounded and severely injured, I spent 
                                time recovering in the village. Though Zegia did her best to heal me, my right arm now experiences tremors from time to time and stings 
                                when exposed to too much wind and sunlight, so it stays bandaged nearly all the time. After my arm was recovered, I decided to leave 
                                the feywild to explore the material plane and stop relying on others to save me all the time. I do plan to return to explore the 
                                feywilds eventually, once I’m stronger and can better handle the dangers that lurk within.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Kizah;