import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import anna from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/anna.jpg'
import cal from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/cal.jpg'
import daniel from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/daniel.jpg'
import yves from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/yves.jpg'
import ella from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/ella.jpg'

import './PlayerBios.css';

function PlayerBios() {

    return (
        <div className='page'>
            <div className='card-box'>
            <h1 className='title'>Players</h1>
            <Container fluid>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body>
                                <Card.Img className="anna-pp" variant="top" src={anna} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Anna (she/her)</Card.Title>
                                <Card.Text className="entry">
                                    <li>highest stat: STR (athletics)</li>
                                    <li>lowest stat: WIS (perception)</li>
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
                        <Card className='preview-card'>
                            <Card.Body>
                                <Card.Img className="cal-pp" variant="top" src={cal} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Cal (he/him/she/her)</Card.Title>
                                <Card.Text className="entry">

                                    <li>highest stat: INT (investigation)</li>
                                    <li>lowest stat: STR (athletics)</li>

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
                        <Card className='preview-card'>
                            <Card.Body>
                                <Card.Img className='daniel-pp' variant="top" src={daniel} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Daniel (he/him)</Card.Title>
                                <Card.Text className="entry">

                                    <li>highest stat: INT (insight)</li>
                                    <li>lowest stat: CHA (intimidation)</li>

                                </Card.Text>
                            </Card.Body>
                            <ListGroup>
                                <ListGroupItem>
                                    <Card.Link href="/yenna">Yenna</Card.Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Card.Link href="/kepple">Kepple</Card.Link>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body>
                                <Card.Img className='ella-pp' variant="top" src={ella} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Ella (she/her)</Card.Title>
                                <Card.Text className="entry">

                                    <li>highest stat: CHA (persuasion)</li>
                                    <li>lowest stat: CON</li>

                                </Card.Text>
                            </Card.Body>
                            <ListGroup>
                                <ListGroupItem>
                                    <Card.Link href="/naomi">Naomi</Card.Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Card.Link href="/ssashira">Ssashira</Card.Link>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                   
                    <Col>
                        <Card className='preview-card'>
                            <Card.Body>
                                <Card.Img className='yves-pp' variant="top" src={yves} />
                            </Card.Body>
                            <Card.Body className='blurb'>
                                <Card.Title>Yves (they/them)</Card.Title>
                                <Card.Text className="entry">

                                    <li>highest stat:</li>
                                    <li>lowest stat:</li>

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
        </div>
    )
}

export default PlayerBios;