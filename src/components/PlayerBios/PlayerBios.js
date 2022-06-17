import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './PlayerBios.css';
import img from './placeholder-image.png';
import { CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

function PlayerBios() {

    return (
        <div className='PlayerBios'>
            <h1 className='title'>PlayerBios!</h1>  
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>anna</Card.Title>
                            <Card.Text>
                                some stuff about anna
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Aravala Amonodel</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/yiu-lai/character-sheets">Rarri Pebblepocket</Card.Link>
                            </ListGroupItem>
                        </ListGroup>                                 
                    </Card> 
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>cal</Card.Title>
                            <Card.Text>
                                some stuff about cal
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Shiver</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Malum</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/yiu-lai/character-sheets">Haze</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>daniel</Card.Title>
                            <Card.Text>
                                some stuff about daniel
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Yenna</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Kepple</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>ella</Card.Title>
                            <Card.Text>
                                some stuff about ella
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Naomi</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>sophie</Card.Title>
                            <Card.Text>
                                some stuff about sophie
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Valista</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/aelith/character-sheets">Ki'zah</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>yves</Card.Title>
                            <Card.Text>
                                some stuff about yves
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                    </Col> 
                </Row>
            </Container>   


        </div>
    )
}

export default PlayerBios;