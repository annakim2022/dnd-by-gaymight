import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import img from './placeholder-image.png';
import './CharacterSheets.css';

const CharacterSheetsAelith = () => {

    return (
        <div className='CharacterSheets'>
            <h1 className='title'>Aelith Character Sheets!</h1>  
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                    <Card className='bio-card'>
                        <Card.Body as={Link} to={'/aravala-amonodel'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Aravala Amonodel</Card.Title>
                            <Card.Text>
                                CLICK IMAGE
                            </Card.Text>
                        </Card.Body>                             
                    </Card> 
                    </Col>  
                    <Col>
                    <Card className='bio-card'>
                        <Card.Body as={Link} to={'/aravala-amonodel'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Malum</Card.Title>
                            <Card.Text>
                                goes to home page
                            </Card.Text>
                        </Card.Body>   
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Body as={Link} to={'/aravala-amonodel'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Naomi</Card.Title>
                            <Card.Text>
                                goes to home page
                            </Card.Text>
                        </Card.Body>   
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Body as={Link} to={'/aravala-amonodel'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Shiver</Card.Title>
                            <Card.Text>
                                goes to home page
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Body as={Link} to={'/aravala-amonodel'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Valista</Card.Title>
                            <Card.Text>
                                goes to home page
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col> 
                    <Col>
                    <Card className='bio-card'>
                        <Card.Body as={Link} to={'/aravala-amonodel'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Yenna</Card.Title>
                            <Card.Text>
                                goes to home page
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