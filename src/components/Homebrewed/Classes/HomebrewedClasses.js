import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

import img from './placeholder-image.png';
import './HomebrewedClasses.css';

const HomebrewedClasses = () => {

    return (
        <div className='HomebrewedClasses'> 
        <h1 className='title'>Homebrewed Classes!</h1>   
         <Container fluid>
            <Row xs={1} sm={2} lg={3}>
                <Col>
                    <Card className='class-card'>
                        <a href='/homebrewed/classes/arsenalist'>
                        <Card.Img variant="top" src={img}/>
                        </a>
                        <Card.Body>
                            <Card.Title>Arsenalist</Card.Title>
                            <Card.Text>
                                blurb
                            </Card.Text>
                        </Card.Body>                              
                    </Card> 
                </Col> 
                <Col>
                    <Card className='class-card'>
                        <a href='/'>
                        <Card.Img variant="top" src={img}/>
                        </a>
                        <Card.Body>
                            <Card.Title>Cultivator</Card.Title>
                            <Card.Text>
                                blurb
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> 
                <Col>
                    <Card className='class-card'>
                        <a href='/'>
                        <Card.Img variant="top" src={img}/>
                        </a>
                        <Card.Body>
                            <Card.Title>Fortress</Card.Title>
                            <Card.Text>
                                blurb
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </Col> 
                <Col>
                    <Card className='class-card'>
                        <a href='/'>
                        <Card.Img variant="top" src={img}/>
                        </a>
                        <Card.Body>
                            <Card.Title>Kaleido</Card.Title>
                            <Card.Text>
                                blurb
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </Col> 
                <Col>
                    <Card className='class-card'>
                        <a href='/'>
                        <Card.Img variant="top" src={img}/>
                        </a>
                        <Card.Body>
                            <Card.Title>Mahou</Card.Title>
                            <Card.Text>
                                blurb
                            </Card.Text>
                        </Card.Body> 
                    </Card>
                </Col> 
                <Col>
                    <Card className='class-card'>
                        <a href='/'>
                        <Card.Img variant="top" src={img}/>
                        </a>
                        <Card.Body>
                            <Card.Title>Prophet</Card.Title>
                            <Card.Text>
                                blurb
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col> 
            </Row>
        </Container>   
           
    </div>
    )
    
}

export default HomebrewedClasses;