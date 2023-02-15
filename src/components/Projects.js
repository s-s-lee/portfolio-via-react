import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Projects() {
    return (
        <CardGroup>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Gritty Wear</Card.Title>
                    <Card.Text>
                        A Gritty t-shirt shop with a twist!
                    </Card.Text>
                    <Card.Link href="#">GitHub</Card.Link>
                    <Card.Link href="#">Deployed</Card.Link>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default Projects;