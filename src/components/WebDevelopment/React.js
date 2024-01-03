import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { FaReact, FaClock, FaCode, FaRocket } from 'react-icons/fa';
import ReactImg from '../../assets/images/react.png'
import Faq from '../../assets/images/faq.jpg'



const ReactService = () => {
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
                <h1><strong>React</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                                <span style={{ color: '#ff6b6b' }}>Dynamic Services</span>
                                <span> With React Development</span>
                            </h2>
                            <p>
                                The React web development service is a cutting-edge web application framework with a dynamic and flexible architecture. We take pride in being the leading React web development services in the industry.
                                <br />
                                A web system provides a solid foundation for your application, allowing you to focus on creating something extraordinary while we handle the intricacies.                           </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <h6><FaReact color='#22a6b3' size={20} className="mr-2" /> Expert Team Member</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaClock color='#22a6b3' size={20} className="mr-2" /> Time Management</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaCode color='#22a6b3' size={20} className="mr-2" /> Work Dedication</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaRocket color='#22a6b3' size={20} className="mr-2" /> Faster Enrollments</h6>
                                    </Col>
                                </Row>

                                <p className="text-justify mt-4">At M Technologies, our React web development services aren't just static tools; they grow with you. The framework is built to scale with your progress and experience. It encourages continuous learning and improvement, ensuring that your skills and projects evolve over time.
                                    <br />
                                    Whether you are a newcomer to JavaScript web development with React or have years of experience, at M Technologies, React web development services provide a framework that grows with you. We'll guide you through your initial steps as a web developer or elevate your skills to the next level. We can't wait to see the amazing projects you build.</p>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <img
                                src={ReactImg}
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
                        <span style={{ color: '#ff6b6b' }}> For React</span>
                    </h2>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Why should You Use React?</Accordion.Header>
                                <Accordion.Body>
                                React strives to streamline the development process by simplifying common tasks encountered in a wide array of web projects. With a focus on providing a delightful experience for developers, React aims to enhance efficiency without compromising the robust functionality of the applications being built.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Will React Shape the Future of Web Development?</Accordion.Header>
                                <Accordion.Body>
                                React currently holds a dominant position in the web development landscape. As the leading web application framework, React is poised to strengthen its standing even further. Looking ahead to 2023 and beyond, React's future is promising, marked by continuous expansion and heightened development opportunities.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How M Technologies Help You For React Development?</Accordion.Header>
                                <Accordion.Body>
                                The React JavaScript framework is renowned for its versatility, enabling swift and efficient programming delivery. At M Technologies, our adept team excels in translating your concepts into reality, harnessing the power of React Development Services.
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

export default ReactService;
