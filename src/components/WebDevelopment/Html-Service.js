import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { FaHtml5, FaCode, FaDesktop, FaCubes } from 'react-icons/fa';
import Html1 from '../../assets/images/html1.jpg'
import Faq from '../../assets/images/faq.jpg'



const HtmlServices = () => {
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
                <h1><strong>Html</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                                <span>Perfect Technology</span>
                                <span style={{ color: '#ff6b6b' }}> Solution For All HTML</span>
                            </h2>
                            <p>
                                Since its principal days, HTML has experienced a mind-blowing development. It is HTML principal, the markup language of the web. It runs locally in each program and is kept up by the World Wide Web Consortium.
                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-5">
                                <h4 className='mb-4'>Features that can be useful with HTML;</h4>
                                {/* First row of features */}
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <h6><FaHtml5 color='#22a6b3' size={30} className="mr-2" /> Markup Language</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaCode color='#22a6b3' size={30} className="mr-2" /> Scripting Language</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaDesktop color='#22a6b3' size={30} className="mr-2" /> Structure Website</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaCubes color='#22a6b3' size={30} className="mr-2" /> Basic Building Block</h6>
                                    </Col>
                                </Row>
                                <p className="text-justify mt-4">At M Technologies, our HTML developers provide better service and superior HTML coding. We have experience with data object modeling and CMS platforms such as CSS and JavaScript. We work diligently throughout development to accomplish our client’s project within the deadline.</p>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <img
                                src={Html1}
                                alt="Sample"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <Container>
                <Row>
                    <h2>
                        <span>Frequently Asked Questions</span>
                        <br />
                        <span style={{ color: '#ff6b6b' }}> For HTML</span>
                    </h2>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How M Technologies Work With HTML?</Accordion.Header>
                                <Accordion.Body>
                                    HTML or Hypertext Markup Language is a typical choice used for the development of websites, web pages and web-based applications. Business stakeholders, project management and program developers prefer HTML over other alternative program development options due to the advantageous characteristics of HTML.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Why Choose M Technologies For Your Html Website?</Accordion.Header>
                                <Accordion.Body>
                                    Choosing us is not M Technologies is one of the largest organization known for development of different web based projects. a bad decision, we have a huge number of expertise to develop your project and for HTML based website. Have faith with us, you will never regret.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How We Help You For Local Web Browser?</Accordion.Header>
                                <Accordion.Body>
                                    In html we have number of options for the local web browser, we can easily do that to make your website one step forward than before.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What Are The Benefits Of choosing M Technologies?</Accordion.Header>
                                <Accordion.Body>
                                    Choosing M Technologies is the ultimate decision you will take. We are facilitating our clients over the past few years. We are glad that every client is happy with our services. M Technologies is the only platform that allows you to track your projects while in development. Feel free to contact us on our given number or website. We will be available 24/7 to assist you.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                    <Col md={6} className='mb-1'>
                        <img src={Faq} alt="Your Alt Text" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            {/* Banner Section */}
            <section>
                <div style={{ background: '#e17055', padding: '20px', color: '#fff', textAlign: 'left' }}>
                    <Container>
                        <h1>Bringing Out The Best With Our Expertise</h1>
                        <p className='text-white'>Say goodbye to project hassles and hello to groundbreaking ideas to unlock innovation with M Technologies.</p>
                        <a href="/contact">
                            <Button variant='info'>
                                Start a Project
                            </Button>
                        </a>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default HtmlServices;
