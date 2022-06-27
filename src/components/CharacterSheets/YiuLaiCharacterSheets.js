import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import img from './placeholder-image.png';
import './CharacterSheets.css';

const CharacterSheetsYiuLai = () => {

    return (
        <div className='CharacterSheets'>
        <h1 className='title'>Yiu Lai Character Sheets!</h1>  
        <Container fluid>
            <Row xs={1} sm={2} lg={3}>
                <Col>
                <Card className='bio-card'>
                    <Card.Body as={Link} to={'/haze'}>
                        <Card.Img variant="top" src={img} />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Haze</Card.Title>
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
                        <Card.Title>Ki'zah</Card.Title>
                        <Card.Text>
                            goes to home page
                        </Card.Text>
                    </Card.Body>   
                </Card>
                </Col> 
                <Col>
                <Card className='bio-card'>
                    <Card.Body as={Link} to={'/'}>
                        <Card.Img variant="top" src={img} />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Kepple</Card.Title>
                        <Card.Text>
                            goes to home page
                        </Card.Text>
                    </Card.Body>   
                </Card>
                </Col> 
                <Col>
                <Card className='bio-card'>
                    <Card.Body as={Link} to={'/rarri-pebblepocket'}>
                        <Card.Img variant="top" src={img} />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Rarri Pebblepocket</Card.Title>
                        <Card.Text>
                            CLICK IMAGE
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col> 
                <Col>
                <Card className='bio-card'>
                    <Card.Body as={Link} to={'/'}>
                        <Card.Img variant="top" src={img} />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Ssashira</Card.Title>
                        <Card.Text>
                            goes to home page
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col> 
                <Col>
                <Card className='bio-card'>
                    <Card.Body as={Link} to={'/'}>
                        <Card.Img variant="top" src={img} />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Viðolfnir</Card.Title>
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

export default CharacterSheetsYiuLai;