import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import anna from './kannabim-img.jpeg'
import cal from './cal-img.jpeg'
import sophie from './sophie-img.jpg'
import daniel from './daniel-img.png'
import yves from  './yves-img.png'
import ella from './ella-img.png'
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
                                THE LINKS ON THIS CARD WORK
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/shiver">Shiver</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/malum">Malum</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/haze">Haze</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img className='daniel-pp' variant="top" src={daniel}/>
                        <Card.Body>
                            <Card.Title>daniel</Card.Title>
                            <Card.Text>
                                Kepple link works
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/">Yenna</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Card.Link href="/kepple">Kepple</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img className='ella-pp' variant="top" src={ella}/>
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
                            <ListGroupItem>
                            <Card.Link href="/ssashira">Ssashira</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img className="sophie-pp" variant="top" src={sophie}/>
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
                            <Card.Link href="/kizah">Ki'zah</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Img className='yves-pp' variant="top" src={yves}/>
                        <Card.Body>
                            <Card.Title>yves</Card.Title>
                            <Card.Text>
                                our lovely DM!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                            <Card.Link href="/vdolfnir">Vðolfnir</Card.Link>
                            </ListGroupItem>
                        </ListGroup>     
                    </Card> 
                    </Col> 
                </Row>
            </Container>   
        </div>
    )
}

export default PlayerBios;