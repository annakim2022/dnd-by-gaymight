import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'

import valista15 from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/valista-stats-15.jpg'
import valista_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/valista-img.jpg'


const Valista = () => {

    return (
        <div className='page'>
            <div className='outer-box'>
                <h2 className='page-title'>Valista</h2>
                <div className='box'>
                    <Tabs defaultActiveKey='character-art'>
                        <Tab eventKey="character-art" title="Character Art">
                            <div className='content'>
                                <Image fluid className='character-art' src={valista_img}></Image>
                            </div>
                        </Tab>
                        <Tab eventKey="character-sheet" title="Character Sheet">
                            <div className='content'>
                                <Image fluid className='character-sheet' src={valista15}></Image>
                            </div>
                        </Tab>
                        <Tab eventKey="background" title="Background">
                            <div className='content'>
                                <h4>Pre-Campaign</h4>
                                <p className='text'>Born in the city of Crieburn in the Mordovian Kingdom, Valista is no stranger to instability. Several hundred years ago, Crieburn
                                    was the site of a minor civil war between clans vying for rule over the territory and its rich natural resources.  In an effort to
                                    gain the upper hand in the ongoing conflict, one of the clans struck a deal with an unknown demon, creating a planar rift on the
                                    outskirts of the city to draw forth this great power. The clan ultimately lost the war leaving their bloodline permanently marked
                                    as tieflings. This visual evidence of both demonic influence and the lineage of usurpers and threats to power has led to the
                                    ostracizing of the Crieburn tiefling population. As such, the tiefling community lives in a secluded area of the city, close to the
                                    rift their ancestors created. This rift in the land bleeds magic from the underworld, granting few of those living within proximity
                                    the powers of a sorcerer. This is the case for Valista, a female tiefling gifted with wild magic.</p>
                                <p>Like many tieflings in her city, Valista spent most of her childhood steering clear of the men in the city and stealing when necessary.
                                    Because magic manifests in the mid teenage years, young tieflings do not exhibit any magic and are seen as more trustworthy and less
                                    of a threat than older folk. As a countermeasure to the responsibility placed on children, young tieflings typically form little gangs
                                    for safety, gangs that they maintain through teen years. These gangs often coordinate to steal necessary goods or just things that they
                                    want as shopkeepers frequently turn down their patronage. Their network of thieves is extensive and it does little to help their
                                    reputation. Valista’s magic began manifesting at age 14 where surges would sporadically happen which marked her as a danger to others.
                                    Those in her close community don’t really care but the humans in the city proper often choose not to interact with known magic users,
                                    viewing them as cursed. Valista maintained gang activity for survival with the magic surges creating both diversions as well as
                                    detrimental unpredictability. However, after a particularly violent surge that collapsed a storefront and nearly killed members of her
                                    gang, Valista made the decision to leave Crieburn to seek greater control over her magic to prevent posing a risk to the few whose
                                    company she tolerates in addition to escaping the poor conditions that tieflings in Crieburn experience. She views this magic as a
                                    curse and a burden as it has caused her to turn her back on those closest to her. At the age of 18 she fled the Mordovian Kingdom and
                                    began heading East to Storthal.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Valista;