import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const Portfolio = () => {
    const headerStyle = {
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
    };
    return (
        <div>
            <header style={headerStyle}>
                <h1>Portfolio</h1>
            </header>
            <Container className="mt-5">
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 w-100">
                            <a href="https://mehwishmushtaq.github.io/tyre-service/">
                                <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title className="h5">Tyre Fitting Service</Card.Title>
                                <Card.Text className="small">
                                    Website Tyre Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 w-100">
                            <a href="https://mehwishmushtaq.github.io/tyre-service/">
                                <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title className="h5">Tyre Fitting Service</Card.Title>
                                <Card.Text className="small">
                                    Website Tyre Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 w-100">
                            <a href="https://mehwishmushtaq.github.io/tyre-service/">
                                <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title className="h5">Tyre Fitting Service</Card.Title>
                                <Card.Text className="small">
                                    Website Tyre Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 w-100">
                            <a href="https://mehwishmushtaq.github.io/tyre-service/">
                                <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title className="h5">Tyre Fitting Service</Card.Title>
                                <Card.Text className="small">
                                    Website Tyre Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 w-100">
                            <a href="https://mehwishmushtaq.github.io/tyre-service/">
                                <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title className="h5">Tyre Fitting Service</Card.Title>
                                <Card.Text className="small">
                                    Website Tyre Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 w-100">
                            <a href="https://mehwishmushtaq.github.io/tyre-service/">
                                <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Title className="h5">Tyre Fitting Service</Card.Title>
                                <Card.Text className="small">
                                    Website Tyre Service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;
