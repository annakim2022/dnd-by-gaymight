import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'

import rarri3 from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/rarri-stats-3.jpg'
import rarri_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/rarri-img.jpeg'

const Rarri = () => {

    return (
        <div className='CharacterSheets'>
            <div className='outer-box'>
                <h2 className='page-title'>Rarri Pebblepocket</h2>
                <div className='box'>
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'>
                                <Image fluid className='character-art' src={rarri_img}></Image>
                            </div>
                        </Tab>
                        <Tab eventKey="character-sheet" title="Character Sheet">
                            {/* <div className='content'> */}
                            <Image fluid className='character-sheet' src={rarri3}></Image>
                            {/* </div> */}
                        </Tab>
                        <Tab eventKey="background" title="Background">
                            <div className='content'>
                                <h4>Pre-Campaign</h4>
                                <p>I’m a bit of an eccentric tinkerer. I am the middle child in a gnomish family of 11 children who grew up in a small town.
                                    My parents are loving but constantly occupied by my younger siblings, and ever since I could walk I have mostly been left
                                    to my own devices to keep myself entertained. My favorite pastime became scavenging for scraps of any kind in the streets
                                    around town that I could use to build little toys for myself and my siblings. I’ve enjoyed this free lifestyle and have
                                    gotten into all sorts of trouble with my little inventions that have mostly been used to prank my family, much to their
                                    dismay.</p>

                                <p>When I was about 8 years old, a traveling half-elf artificer visited our small town with many strange machines that I
                                    couldn’t resist investigating. I snuck into her wares when she wasn’t looking and accidentally blew up one of her creations
                                    out of curiosity. Instead of getting upset, however, the artificer asked my parents if she could take me in as an
                                    apprentice. She, too, is a bit eccentric, traveling around her wares unlike most tinkerers who stayed in towns to build
                                    their businesses. My parents, as much as they would miss me, sent me off happily, knowing that I would be well taken care
                                    of and free to pursue my interests.</p>

                                <p>My mentor, Eriden, taught me the ways of smithing and elvish jewelry making, as well as how to imbue those objects with
                                    magic over the course of the next 12 years as I traveled with her. Eventually, I became adept enough at both that I
                                    crafted myself a large metal pet in the shape of a dragon, with rubies for eyes (the rubies were a coming-of-age gift from
                                    Eriden when I turned 18). It’s taken me the last 4 years to finally get him to look somewhat like a dragon and to actually
                                    listen to my commands. Upon this milestone, I named my creation “Fizzledazzle” (“Fizz” for short) and have since developed
                                    an emotional attachment to him. As of now, he’s mostly made of various types of steel, but there is a smattering of gold
                                    scales from when I got lucky on a scavenging hunt. I’m currently working on getting him to fly, but so far it’s been an
                                    unfruitful endeavor, as I’ve never actually seen a live dragon before and created Fizz based on illustrations I’ve happened
                                    to acquire and my own wild imagination. I dream of the day when I get to soar the skies with Fizz.</p>

                                <h5>Meeting Kepple</h5>
                                <p>One day, when I’m about 17, Eriden takes me to Lorehold, an Institution of Knowledge for practitioners of the arcane, and
                                    leaves me alone while she takes care of some business. She tells me the Institution is a great resource for artificers and
                                    tells me I would learn a lot from the priceless library on campus. After we part ways, I ask some random passersby for
                                    directions to the library but they snub me because I don’t look like I belong here with my travel-worn clothes and eccentric
                                    tinkering magic (at this point Fizz still looks like a lumpy lizard that waddles around in random circles around me). I get
                                    mad at their pompousness and decide to find the library on my own. I’m seething and stomping around, pretty lost since this
                                    campus is huge, when a Half-Gorian approaches me carefully and asks if I’m looking for something. At first I want to act
                                    tough and say I don’t need his help, but I really want to find the library, so I swallow my pride, introduce myself, and ask
                                    him where the library is. Kepple, or Kep as he tells me to call him, kindly leads me to the massive collection of tomes
                                    situated in a remote location on campus. He tells me the library is especially hard to find since they placed it in a more
                                    protectable location than the rest of campus. I thank him for his help. At this point, I can’t control my curiosity, and
                                    finally ask him about his arms. In all of my travels, I’ve never met a Half-Gorian before, so I’m really interested in the
                                    mechanics of having four arms. We end up studying at the library and spend the rest of the day together after that. Kepp
                                    tells me about a pet project of his that involves infusing magic into his marbles, and I help him out with the knowledge of i
                                    nfusing jewels I’ve developed under Eriden. We also share an excitement for riding (me on Fizz and him on Leonard, his horse),
                                    and in exchange for my help with his marbles, Kepp adjusts one of the saddles he made for himself and gifts it to me. Eriden
                                    comes and finds me at the end of the day, and Kepp and I part in high spirits. I’m delighted to have made a friend, since it
                                    doesn’t happen often with how frequently Eriden and I change locations.</p>

                                <h5>Parting with Eriden</h5>
                                <p>On the morning of my 20th birthday, Eriden and I are staying in a bustling town when Eriden informs me that she has nothing
                                    more to teach me and that I must now venture out on my own if I am to grow as an Artificer. She and I part ways - our
                                    adventures together end as abruptly as they started almost 12 years ago. Though I am not upset at this turn of events (I’ve
                                    long since grown accustomed to Eriden’s fickle and often inexplicable ways), I am a bit at a loss for what to do next. Feeling
                                    terribly lonely during the first few days of traveling without Eriden, I magically infuse a multi-colored gem to create a
                                    homunculus servant in the form of a tiny faerie dragon that can change colors depending on how I'm feeling that day. I name my
                                    new companion “Razzledazzle” (“Razz” for short). I can get Razz to fly because she’s a lot smaller than Fizz, but Fizz is a
                                    little jealous of this, and nips at her constantly, so she’s taken to hiding in my hair. I travel aimlessly for a while with
                                    Razz and Fizz as my only companions, selling what I tinker to cover food and travel costs. Just as I begin to contemplate if I
                                    should go back to my family, I meet our party.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Rarri;