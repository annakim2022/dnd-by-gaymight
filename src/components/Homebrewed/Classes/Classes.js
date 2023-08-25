import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

import img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/placeholder-image.png';
import kaleido from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/kaleido.jpeg'
import arsenal from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/arsenal.jpeg'
import mahou from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/wish.svg'

import './Classes.css';


const Classes = () => {

    return (
        <div className='page'>
            <div className='card-box'>
            <h1 className='title'>Classes</h1>
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                    <Card className='preview-card'>
                        <Card.Body as={Link} to={'/arsenalist'}>
                            <Card.Img className='preview-img' variant="top" src={arsenal} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Arsenalist</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>                              
                    </Card> 
                </Col> {/* 
                <Col>
                    <Card className='preview-card'>
                        <Card.Body as={Link} to={'/cultivator'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Cultivator</Card.Title>
                            <Card.Text>
                                goes to an empty page
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> 
                <Col>
                    <Card className='preview-card'>
                        <Card.Body as={Link} to={'/fortress'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Fortress</Card.Title>
                            <Card.Text>
                                goes to an empty page
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </Col>  */}
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/kaleido'}>
                                <Card.Img className='preview-img' variant="top" src={kaleido} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Kaleido</Card.Title>
                                <Card.Text className='entry'>
                                    Masters of mimicry with the inherent ability to touch and see the essence of living creatures, Kaleido can absorb the spells and
                                    signature abilities of others, channeling them into their own magic and adding flair to truly make it their own.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/mahou'}>
                                <Card.Img className='preview-img' variant="top" src={mahou} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Mahou</Card.Title>
                                <Card.Text>
                                    goes to an empty page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/prophet'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Prophet</Card.Title>
                                <Card.Text>
                                    goes to an empty page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
            </div>
        </div>
    )

}

export default Classes;