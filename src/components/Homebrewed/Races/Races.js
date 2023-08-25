import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from 'react-router-dom';
import img from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/placeholder-image.png';
import './Races.css';

const Races = () => {

    return (
        <div className='page'>
            <div className='card-box'>
            <h1 className='title'>Races</h1>
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    {/* <Col>
                        <Card className='preview-card'>
                        <Card.Body as={Link} to={'/animated'}>
                            <Card.Img variant="top" src={img} />
                        </Card.Body>
                            <Card.Body>
                                <Card.Title>Animated</Card.Title>
                                <Card.Text>
                                    CLICK IMAGE
                                </Card.Text>
                            </Card.Body>                              
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Bakeneko</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Cerpicae</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>    
                        </Card>
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Descendants of the U'o</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>    
                        </Card>
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Doidentan</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body> 
                        </Card>
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Dullahan</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Dvati</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Fabric Warforged</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>  */}
                    {/* <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Frijian</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Gorgon</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>  */}
                    {/* <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Half-Gorian</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Mobythrian</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Mujina</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Pellucian</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Progenerati</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Solari</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Swarm of the Many</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Vampire</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Vicari</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col> 
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body as={Link} to={'/'}>
                                <Card.Img variant="top" src={img} />
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Yumerrier</Card.Title>
                                <Card.Text>
                                    goes to home page
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>  */}
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Races;