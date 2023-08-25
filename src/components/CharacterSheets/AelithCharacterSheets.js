import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import './CharacterSheets.css';

import shiver_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/shiver-img.jpeg'
import malum_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/malum-img.jpeg'
import aravala_headshot from "/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/aravala_headshot.jpg"
import naomi_headshot from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/naomi_headshot.jpg'
import yenna_headshot from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/yenna_headshot.jpg'


const CharacterSheetsAelith = () => {

    return (
        <div className='page'>
            <div className='card-box'>
            <h1 className='title'>Aelith Character Sheets</h1>
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/aravala-amonodel'}>
                                <Card.Img className='preview-img' variant="top" src={aravala_headshot} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Aravala Amonodel</Card.Title>
                                <Card.Text className='entry'>
                                    A young forest elf gives up her priviledged life in the deep woods to hunt down the elemental cult of evil that ravaged her lands. Her 
                                    warm silver eyes mark a stark contrast to her dark leather armor and flowing black hair. Blink and you'll find an animal in the place of the woman you were just speaking with.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/malum'}>
                                <Card.Img className='preview-img' variant="top" src={malum_img} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Malum</Card.Title>
                                <Card.Text className='entry'>
                                There's a legend of a cryptid creature that stalks beyond the dappled forest brush: a centaur with a deer head! Supposedly, he dons a 
                                silver breastplate etched an ancient god’s symbol, one not written about in any scripture...that is until an uncouth youth fitting the 
                                description stumbles out of the forest.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/naomi'}>
                                <Card.Img className='preview-img' variant="top" src={naomi_headshot} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Naomi</Card.Title>
                                <Card.Text className='entry'>
                                A beautiful Aasimar girl prostrates before a male statue etched with the sun and crescent moon, a matching locket around her neck. But when
                                she returns to her room, lavender perfume clings to strewn sheets from her one-night-stand, and inside the locket lies a black and white twisted mask.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/shiver'}>
                                <Card.Img className='preview-img' variant="top" src={shiver_img} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Shiver</Card.Title>
                                <Card.Text className='entry'>
                                Atop the rickety rafters of a cobblestone church, eerie noises spill from the beak of a cloaked figure: laughter, cats hissing, organ playing. Her 
                                eyes twinkle with each confused turn of the head from worshippers and clergymen until a curious child looks upwards only to see nothing there.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/yenna'}>
                                <Card.Img className="preview-img" variant="top" src={yenna_headshot} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Yenna</Card.Title>
                                <Card.Text className='entry'>
                                A young Half-Orc sits in lotus pose atop the head of a ginormous toppled statue, only their right palm turned upwards on their knee. Their yellow garb 
                                flutters in the wind as their white snake circlet slithers around their skin like a moving tattoo, yet they remain sturdy and unaffected.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>

    )
}

export default CharacterSheetsAelith;