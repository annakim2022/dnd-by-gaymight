import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import './CharacterSheets.css';
import rarri_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/rarri-img.jpeg';
import kepple_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/kepple-img.jpeg';
import kizah_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/kizah-img.JPG'
import haze_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/haze-img.jpg';
import ssashira_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/ssashira-img.jpeg';
import vdolfnir_img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/vdolfnir-img.jpeg';



const CharacterSheetsYiuLai = () => {

    return (
        <div className='CharacterSheets'>
            <h1 className='title'>Yiu Lai Character Sheets</h1>
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/haze'}>
                                <Card.Img className='preview-img' variant="top" src={haze_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Haze</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/kizah'}>
                                <Card.Img className='preview-img' variant="top" src={kizah_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Ki'zah</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/kepple'}>
                                <Card.Img className='preview-img' variant="top" src={kepple_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Kepple</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/rarri-pebblepocket'}>
                                <Card.Img className='rarri-preview' variant="top" src={rarri_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Rarri Pebblepocket</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/ssashira'}>
                                <Card.Img className='preview-img' variant="top" src={ssashira_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Ssashira</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/vdolfnir'}>
                                <Card.Img className='preview-img' variant="top" src={vdolfnir_img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Viðolfnir</Card.Title>
                                <Card.Text>

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