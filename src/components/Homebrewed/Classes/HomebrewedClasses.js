import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

import img from './placeholder-image.png';
import './HomebrewedClasses.css';

const HomebrewedClasses = () => {

    return (
        <div className='HomebrewedClasses'> 
        <h1 className='title'>Homebrewed Classes!</h1>   
         <Container fluid>
            <Row xs={1} sm={2} lg={3}>
                {/* <Col>
                    <Card className='class-card'>
                        <Card.Body as={Link} to={'/arsenalist'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Arsenalist</Card.Title>
                            <Card.Text>
                                CLICK IMAGE
                            </Card.Text>
                        </Card.Body>                              
                    </Card> 
                </Col> 
                <Col>
                    <Card className='class-card'>
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
                    <Card className='class-card'>
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
                    <Card className='class-card'>
                        <Card.Body as={Link} to={'/kaleido'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Kaleido</Card.Title>
                            <Card.Text>
                                goes to an empty page
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </Col> 
                <Col>
                    <Card className='class-card'>
                        <Card.Body as={Link} to={'/mahou'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Mahou</Card.Title>
                            <Card.Text>
                                goes to an empty page
                            </Card.Text>
                        </Card.Body> 
                    </Card>
                </Col> 
                <Col>
                    <Card className='class-card'>
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
                </Col> 
            </Row>
        </Container>   
           
    </div>
    )
    
}

export default HomebrewedClasses;