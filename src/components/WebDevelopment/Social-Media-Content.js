import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from "react-icons/io";
import SocialContentImg from '../../assets/images/social-media-img.jpg'
import Faq from '../../assets/images/faq.jpg'



const SocialMediaContent = () => {
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
                <h1><strong>Social Media Content</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                                <span>Lets Wow Your Online Presence with Social Media Content</span>
                                <span style={{ color: '#ff6b6b' }}> Services</span>

                            </h2>
                            <p>
                            Social media content writing services involve creating written content for platforms like Facebook, Twitter, Instagram, LinkedIn, and others. It includes creating posts, captions, hashtags, and other written content designed to engage and attract a specific audience.Some significant services we’ve offered in social media content writing include;
                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Posts</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Captions</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Hashtags</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Stories</h6>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <img
                                src={SocialContentImg}
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
                <span style={{ color: '#ff6b6b' }}>M Technologies Unleashing </span> Web Success With  Expert 
                <br/>
                Social Media Content Services
                </h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                            At M Technologies, we help businesses and individuals create engaging, shareable content that helps to build their brand and reach their target audience. With a focus on creativity and strategic storytelling, we empower your content to not only captivate but also resonate across various social media platforms, fostering meaningful connections and driving digital success. 
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                            Content on social media channels can have an extensive reach and, in light of its nearness to the client, can regularly demonstrate more compelling than exemplary promotion. Positive social media remarks can even lift Google rankings in specific conditions. Nonetheless, social media also adheres to its own standards, requiring its own committed methodology.                          
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
                        <span style={{ color: '#ff6b6b' }}> Social Media Content</span>
                    </h2>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How We Track Down The Right Words?</Accordion.Header>
                                <Accordion.Body>
                                Social media content offers organizations various promoting potential outcomes. However, how might you track down the correct procedure for your online presence on Facebook, Twitter, or Instagram? Lamentably, there is no unmistakable response to this inquiry. Which social media content is proper for any organization will consistently rely upon the advertising reason just as upon the merchandise or administrations each organization has to bring to the table. We have some techniques to help you with the keywords for a good ranking.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How We Recruit Our Clients?</Accordion.Header>
                                <Accordion.Body>
                                On a fundamental level, it is feasible to distribute social media content for showcasing purposes with simply a little level of client association. Our guidance and tests can be shared and remarked upon.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How M Technologies Help You For Social Media Content?</Accordion.Header>
                                <Accordion.Body>
                                M Technologies transforms your social media presence by crafting compelling and shareable content that resonates with your audience. Our expertise lies in building engaging narratives and visuals, helping you establish a powerful brand identity on various social platforms.
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

export default SocialMediaContent;
