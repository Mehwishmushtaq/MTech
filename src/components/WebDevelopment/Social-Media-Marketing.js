import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from "react-icons/io";
import SocialMarketingImg from '../../assets/images/smm-img.jpg'
import Faq from '../../assets/images/faq.jpg'
import Banner from "../../assets/images/tech-banner.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';



const SocialMediaMarketing = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'linear',
            offset: 200,
        });
    }, []);

    const headerStyle = {
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        height: '50vh'
    }
    return (
        <div>
            <header style={headerStyle}>
                <h1><strong>Social Media Marketing</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 data-aos='fade-right'>
                                <span style={{ color: '#01a3a4' }}> Spark, Initiate, and Arise For the Right </span>
                                <span>Decision for Your Social Media Marketing Services</span>

                            </h2>
                            <p data-aos='fade-left'>
                                Social media marketing services, or SMM, is web marketing that includes making and sharing substance on social media networks to market goods and services to make the talk of the town.
                                <br />
                                Here, at M Technologies, our social media marketing services incorporate activities like posting text and picture updates, recordings, and other substance that drives crowd commitment, just as paid social media promoting. Here are some targets which we are working on.
                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row data-aos='zoom-out-down' className="mb-4">
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Increasing Site Traffic</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Scripting Language</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Positive Brand Affiliation</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Digital Visibility Strategies.</h6>
                                    </Col>
                                    <p data-aos='fade-left'>
                                        We’ve made this easy to give you a prologue to social media marketing and some starter social and preparing to improve your business’s social presence. With M Technologies, you can build your social media marketing master plan.
                                    </p>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6} data-aos='fade-right'>
                            <img
                                src={SocialMarketingImg}
                                alt="Sample"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Content Section 2 */}
            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                We’ve made this easy to give you a prologue to social media marketing and some starter social and preparing to improve your business’s social presence. With M Technologies, you can build your social media marketing master plan.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                Prioritize your business objectives before diving into social media marketing. Launching a campaign without a clear strategy is like wandering in a forest without a guide — it may be enjoyable, but you're likely to lose direction.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* FAQ Section */}
            <Container>
                <Row>
                    <h2>
                        <span>Frequently Asked Questions For</span>
                        <br />
                        <span style={{ color: '#01a3a4' }}> Social Media Marketing</span>
                    </h2>
                    <Col md={6} data-aos='zoom-out-down'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How We Build Social Media Content Planning?</Accordion.Header>
                                <Accordion.Body>
                                    Implementing a cohesive posting schedule is crucial for maintaining consistency across your social media platforms. This ensures that your audience receives a regular stream of content, reinforcing brand presence.
                                    Furthermore, engage with your audience actively by responding to comments, messages, and participating in relevant conversations. Building a genuine connection fosters trust and loyalty, contributing to the success of your social media marketing endeavors.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Why We Track Our Competitors?</Accordion.Header>
                                <Accordion.Body>
                                    It’s consistently essential to watch out for contenders they can give significant information to watchword research and other social media marketing understanding. On the off chance that our rivals are utilizing a specific social media marketing channel or procedure that is by all accounts working for them, considering doing likewise, yet improve!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How M Technologies Help You For Social Media Marketing?</Accordion.Header>
                                <Accordion.Body>
                                    M Technologies elevates your social media marketing with strategic content creation. We specialize in crafting shareable and compelling content tailored to resonate with your target audience. Our proficiency lies in building captivating narratives and visuals, empowering you to forge a robust brand identity across diverse social platforms.
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
                    <Col md={6} className='mb-1' data-aos='zoom-out-right'>
                        <img src={Faq} alt="Your Alt Text" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            {/* Banner Section */}
            <section>
                <div data-aos='zoom-out-up'style={{ background: '#01a3a4', padding: '20px', color: '#fff', textAlign: 'left' }}>
                    <Container>
                        <h1>Bringing Out The Best With Our Expertise</h1>
                        <p className='text-white'>Say goodbye to project hassles and hello to groundbreaking ideas to unlock innovation with M Technologies.</p>
                        <a href="/contact">
                            <Button style={{ background: '#fff', color: '#01a3a4', borderRadius: '5px', fontWeight: '700', border: 'none' }}>
                                Start a Project
                            </Button>
                        </a>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default SocialMediaMarketing;
