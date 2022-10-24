import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import './CharacterSheets.css';
import img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/placeholder-image.png';

import shiver_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/shiver-img.jpeg'
import malum_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/malum-img.jpeg'
import aravala_headshot from "/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/aravala_headshot.jpg"
import naomi_headshot from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/naomi_headshot.jpg'
import yenna_headshot from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/yenna_headshot.jpg'



const CharacterSheetsAelith = () => {

    return (
        <div className='CharacterSheets'>
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
                                    Having left her prestigious family behind, a young forest elf takes up the way of the Druid to explore the world she was
                                    unable to experience during her sheltered life. Her warm silver eyes mark a stark contrast to her dark leather armor,
                                    flowing black hair and cape, and numerous piercings. Blink and you might find an animal in the place of the woman you were
                                    just speaking with.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/malum'}>
                                <Card.Img className='preview-img' variant="top" src={malum_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Malum</Card.Title>
                                <Card.Text>
                                    Cal is writing he swears.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/naomi'}>
                                <Card.Img className='preview-img' variant="top" src={naomi_headshot} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Naomi</Card.Title>
                                <Card.Text>
                                    Cal is writing he swears.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/shiver'}>
                                <Card.Img className='preview-img' variant="top" src={shiver_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Shiver</Card.Title>
                                <Card.Text>
                                    Cal is writing he swears.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/valista'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Valista</Card.Title>
                                <Card.Text>
                                    Cal is writing he swears.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/yenna'}>
                                <Card.Img className="preview-img" variant="top" src={yenna_headshot} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Yenna</Card.Title>
                                <Card.Text>
                                    Cal is writing he swears.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default CharacterSheetsAelith;