import React from "react";
import { CardGroup, Card, Col, Row } from "react-bootstrap";
import GrittyWear from "../img/gritty-wear-screenshot.png";
import ArsAnimatio from "../img/ars-animatio-screenshot.png";

function Projects() {
    return (
        <CardGroup fluid="md">
            <Row>         
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={GrittyWear} />
                            <Card.Body>
                                <Card.Title>Gritty Wear</Card.Title>
                                <Card.Text>
                                    A Gritty t-shirt shop with a twist
                                </Card.Text>
                                <Card.Link href="https://github.com/s-s-lee/Gritty-Wear">GitHub</Card.Link>
                                <Card.Link href="https://grittywear.herokuapp.com/">Deployed</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>                
            </Row>
            <Row>         
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={ArsAnimatio} />
                            <Card.Body>
                                <Card.Title>Ars Animatio</Card.Title>
                                <Card.Text>
                                    A search engine to make you laugh
                                </Card.Text>
                                <Card.Link href="https://github.com/s-s-lee/Ars-Animatio">GitHub</Card.Link>
                                <Card.Link href="https://s-s-lee.github.io/Ars-Animatio/">Deployed</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>                
            </Row>
            {/* <Card className="col-sm-6">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Gritty Wear</Card.Title>
                    <Card.Text>
                        A Gritty t-shirt shop with a twist!
                    </Card.Text>
                    <Card.Link href="#">GitHub</Card.Link>
                    <Card.Link href="#">Deployed</Card.Link>
                </Card.Body>
            </Card> */}
        </CardGroup>
    );
}

export default Projects;