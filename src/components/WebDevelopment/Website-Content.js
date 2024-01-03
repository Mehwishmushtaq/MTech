import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from "react-icons/io";
import WebContent from '../../assets/images/website-content.jpg'
import Faq from '../../assets/images/faq.jpg'



const WebsiteContent = () => {
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
                <h1><strong>Website Content</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                                <span>Smart Website Content Writing</span>
                                <span style={{ color: '#ff6b6b' }}> Services For Your Online Businesses</span>

                            </h2>
                            <p>
                                Website Content Writing Services alludes to the text-based, aural, or visual content distributed on a website. Content methods are any innovative component, for instance, text, applications, pictures, filed email messages, information, e-administrations, sound and video records, etc.
                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Activities</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Pictures</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Sound</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Video</h6>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <img
                                src={WebContent}
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
                <h4 className="text-center mb-4">
                <span style={{ color: '#ff6b6b' }}>M Technologies Unleashing Web Success</span>  with Expert Content Services
                </h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                            Website Content Writing Services are the key to driving traffic to websites. At M Technologies, we provide high-quality and snappy content, organized into different categories for seamless navigation, ensuring an effective website. Additionally, our focus on optimizing web content for search engines ensures it responds effectively to the keywords used in searches, maximizing your online visibility and attracting the right audience.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                There are two fundamental sorts of web content:
                                <br/>
                                <strong>Text:</strong> Text is straightforward. It is added on the webpage as text blocks or inside pictures. The best-composed content is unique text-based web content liberated from literary theft. Web content added as text can incorporate great inside joins that help peruses access additional data.
                                <br/>
                                <strong>Media:</strong> Another sort of web content is sight and sound. Media alludes to any content which isn’t text; a few models may include.                            
                                </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Container>
                <Row>
                    <h2>
                        <span>Frequently Asked Questions</span>
                        <br />
                        <span style={{ color: '#ff6b6b' }}> For website Content</span>
                    </h2>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What Are Picture Based Content We Provide?</Accordion.Header>
                                <Accordion.Body>
                                Images are viewed as the most famous alternative to consolidate sight and sound on websites. Our content writers make information easily understandable, even on picture-based websites, allowing users to effortlessly connect with the content. By seamlessly blending captivating visuals with user-friendly narratives, we create a memorable online experience that resonates with your audience's preferences and fosters a deeper connection with your brand. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is Website Content Marketing?</Accordion.Header>
                                <Accordion.Body>
                                Website Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience and, ultimately, to drive profitable customer action.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How M Technologies Help You For Website Content?</Accordion.Header>
                                <Accordion.Body>
                                M Technologies empowers your online presence through expert website content services. We deliver top-notch, SEO-optimized content, ensuring your website not only attracts but retains a steady flow of valuable traffic.
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

export default WebsiteContent;
