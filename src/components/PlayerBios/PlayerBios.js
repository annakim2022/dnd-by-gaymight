import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import img from './placeholder-image.png';
import anna from './kannabim.jpeg'
import cal from './cal.jpeg'
import sophie from './sophie.jpg'
import './PlayerBios.css';


function PlayerBios() {

    return (
        <div className='PlayerBios'>
            <h1 className='title'>PlayerBios!</h1>  
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img className="anna-pp" variant="top" src={anna}/>
                        <Card.Body>
                            <Card.Title>anna</Card.Title>
                            <Card.Text>
                                THE LINKS ON THIS CARD WORK
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/aravala-amonodel">Aravala Amonodel</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/rarri-pebblepocket">Rarri Pebblepocket</Card.Link>
                            </ListGroupItem>
                        </ListGroup>                                 
                    </Card> 
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img className="cal-pp" variant="top" src={cal}/>
                        <Card.Body>
                            <Card.Title>cal</Card.Title>
                            <Card.Text>
                                links go to home page
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/">Shiver</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/">Malum</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/">Haze</Card.Link>
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
                                links go to home page
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/">Yenna</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/">Kepple</Card.Link>
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
                                links go to home page
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/">Naomi</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img className="sophie-pp"variant="top" src={sophie}/>
                        <Card.Body>
                            <Card.Title>sophie</Card.Title>
                            <Card.Text>
                                links go to home page
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/">Valista</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/">Ki'zah</Card.Link>
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
                                our lovely DM!
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