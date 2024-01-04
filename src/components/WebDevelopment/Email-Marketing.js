import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from "react-icons/io";
import EmailImg from '../../assets/images/email-marketing.jpg'
import Faq from '../../assets/images/faq.jpg'



const EmailMarketing = () => {
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
                <h1><strong>Email Marketing</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                                <span>Email Marketing Management</span>
                                <span style={{ color: '#ff6b6b' }}> Services Enabling To Grow Your Brand  </span>

                            </h2>
                            <p>
                            Boom your sales, not your workload. In Email Marketing Management Services, advertisers ought to accomplish more with less. To keep this persona in mind, CentoSquare provides email marketing management services, wherein we design customized emails that entice customers to click on your emails and enable your brand to grow faster.
                            <br/>
                            Here are the following reasons that make email marketing an effective tool of marketing;</p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Drive Sales</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Enhance User Engagement</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Faster & Easy</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Promotional Emails</h6>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <img
                                src={EmailImg}
                                alt="Sample"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Content Section 2 */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                            Additional Fact to believe; marketing class has yet to have the life span of Email Marketing and Management Services. In contrast, some marketing patterns go back and forth. And email stays the most impressive channel accessible to the advanced advertiser.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                            Unlike transient marketing trends, Email Marketing and Management Services demonstrate enduring effectiveness, making email the most powerful and lasting channel for digital marketers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Container>
                <Row>
                    <h2>
                        <span>Frequently Asked Questions For</span>
                        <br />
                        <span style={{ color: '#ff6b6b' }}> Email Marketing</span>
                    </h2>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How We Work On Our Email Marketing Drives Transformations?</Accordion.Header>
                                <Accordion.Body>
                                Most advertisers are laser-centered about driving changes. Whether or not they do such as leads, deals, participations, or a metric one of a kind to your business methodology. However, a definitive objective for advertisers is to transform possible clients into paying clients. What’s more, with regards to changes, there is certainly not a more impressive channel than email. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How Email Marketing Management Service Works?</Accordion.Header>
                                <Accordion.Body>
                                Email is the cash of the web, and anyone online has a functioning email address. And keeping in mind that Facebook and Twitter may appear to be pervasive. Furthermore, the continuous battle over information penetrates and security implies a lot of individuals are leaving some social media channels. So with regards to associating with our possibilities and clients. There’s no channel with a more extensive reach than email.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Do You Need Permission To Send Marketing Emails?</Accordion.Header>
                                <Accordion.Body>
                                Ensure we have permission to email the people on our list. Most country’s email marketing laws stipulate that people need to give you permission to email them in order for us to send them campaigns. Moreover, If we don’t have implied permission to email a person, then we’ll need express permission.
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

export default EmailMarketing;
