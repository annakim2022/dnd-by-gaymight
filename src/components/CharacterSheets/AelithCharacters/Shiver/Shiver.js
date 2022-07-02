import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'
import '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/CharacterSheets/CharacterSheets.css';
import shiver2 from './shiver-stats2.jpg'
import shiver20 from './shiver-stats20.jpg'
import shiver_img from './shiver-img.jpeg'
import shiver_img2 from './shiver-img2.jpg'

const Shiver = () => {

    return (
        <div className='CharacterSheets'>
            <div className='outer-box'>
                <h2 className='class-name'>Shiver</h2>
                <div className='box'> 
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'>
                            <h4>Pre-Campaign</h4>
                            <Image fluid className='character-art' src={shiver_img}></Image>
                            <p></p>
                            <h4>After Death</h4>
                            <Image fluid className='character-art' src={shiver_img2}></Image>
                            </div>
                        </Tab>
                        <Tab eventKey="character-sheet" title="Character Sheet">
                            <div className='content'>
                            <h4>Pre-Campaign</h4>
                            <Image fluid className='character-sheet' src={shiver2}></Image>
                            <p></p>
                            <h4>After Death</h4>
                            <Image fluid className='character-sheet' src={shiver20}></Image>
                            </div>
                        </Tab>
                        <Tab eventKey="background" title="Background">
                            <div className='content'>
                            <h4>Pre-Campaign</h4>
                            <p>She was born into a neglectful household. After all, Kenku are known to long for the sky, often losing their mind desperately 
                                trying to attain such a dream. Her parents had traversed rocky mountains in order to reach the peak and try to fly off, dying 
                                in the process from their stupidity. Abandoned in the harsh Northern winters, she was taken in by a deaf human nun named Isela, 
                                who gave named the Kenku Shiver because she was born shivering due to the freezing snowy temperatures, and even past childhood 
                                had a habit of shuddering. They grew up in poverty, Shiver learning sign language and crude snippets of spoken owrd from the 
                                townsfolk. Isela being a righteous and religious woman, forbade Shiver from stealing. However, as years passed, the funds to the 
                                church grew thin with the lack of patronage. Shiver began to stoop to more cunning methods of helping make ends meet, a fact 
                                which horrified Isela. So, Isela wrote a letter to the holy church, asking for shelter in the city where there are more funds to 
                                look after the two of them. After getting a letter of warm welcome, she and Shiver rode a carriage to the city, but along the way 
                                were attacked by bandits who overturned the carriage and stole everything from the two, before setting fire to the carriage to 
                                burn the evidence. Shiver awoke after the fire had already spread, to see her dead adoptive mother whose head had been split in 
                                the tumble. She attempts to save her body from the wreckage while sobbing profusely, but in doing so burns her left forearm 
                                terribly on the scorching metal rings of the carriage wheels. She stays and watches the wreckage burn, digging through the rubble 
                                to try and salvage anything last memories of Isela, only to find the badge of the great holy church on the ground, along with a 
                                singed cape. It seems one of the bandits had gotten too close to the fire and left their burned cape behind, hoping it would burn 
                                with the carriage. Shiver, dons the cape, swearing to find out why the church had betrayed them so, especially seeing how faithful 
                                Isela was. She hides her burnt feathers underneath the caplet and makes a grave for Isela before walking to the city with a new 
                                resolve, although still inexperienced and shy in regards to the world. When she arrives, she easily spots the tall, gaudy white 
                                building of the main church, and approaches. She knows the prayers and courtesies of the church, as it is practically all she heard 
                                from the visitors to the church back home. She attempts to speak with some of the clergy, but is scorned due to her lack of 
                                communication skills. She takes to living in the eaves of the church, eavesdropping on conversations in order to learn information, 
                                and overhears a couple men in cassocks laughing about how they got a quick buck and avoided having more mouths to feed by burning 
                                the carriage with Isela and Shiver in it. In that moment, Shiver loses all faith in religion and the church, and vows that she will 
                                wipe out the corruption that has seeped inside it. However, she doesn't know fighting skills much outside of basic self defense, 
                                and doesn't have the money to treat her injured arm. That's when she spots a regular to the church, a tall half-elf with black hair 
                                who wears a dark cloak and wordlessly comes to pray on a daily basis. Curious because he doesn't seem like the religious type, 
                                Shiver goes to speak to the man. He says his name is Calion, and he knows she had been watching him from up in the rafters. He 
                                assumes she is a poor orphan, and offers to train her in the ways of pickpocketing because she has grown thin and weak. Turns out, 
                                he is actually an assassin by trade, and after learning of her distaste of the church, offers to fully take her as an apprentice. 
                                Apparently, the reason he prays at the church is to wish a restful afterlife for those he has killed, because for most of them, he 
                                will be the only one who mourns or remembers their deaths. He became an assassin because he knows truly how fleeting life is after 
                                watching his human loved ones grow old and pass. He knows life is fleeting, and doesn't mind taking it from those he thinks don't 
                                deserve its beauties. Shiver becomes his partner-in-crime, all while setting her eyes on the church and ridding the world of its 
                                corruption, keeping Isela's last wish alive. She knows Isela wanted nothing more than for Shiver to live a fulfilled life, and 
                                make something of herself. Her shyness and insecurities about her voice and burnt feathers stay (although most people assume she's 
                                just being curt), but she picks up the somewhat snarky attitude Calion uses with his comrades.</p>
                                <h4>After Death</h4>
                                <p>After Olidamara granted her passage to the afterlife, Shiver found herself in limbo, where she reunites with Isela, the priestess 
                                who raised her. Isela has filled the position as the horseman of Death seeing as the position is filled by a follower of Moradin, 
                                the creator of life. However, seeing Isela is unhappy having to take the lives of the innocent, Shiver offers to take up the p
                                osition as her apprentice so she can one day retire and rest peacefully. Shiver is training to replace her mentor, when she grows 
                                closer to the other horsemen of the apocalypse. Aodh, the embodiment of War, soon comes to fall in love with her after learning she 
                                perished in battle, and seeing how caring she is towards Isela. Shiver is wary around him, because he controls the domain of fire, 
                                a sensitive subject for her. However, the two fall in love and often carry out their duties together. Shiver now worships Olidamara 
                                after he ensured her safe passage to the afterlife, and the two occassionally talk, although Shiver finds him somewhat grating. Also, 
                                after speaking and hearing thousands of souls of the dead, she is fluent in speech, although her voice is still a jumble of others' 
                                voices.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>   
        </div>
    )
}

export default Shiver;