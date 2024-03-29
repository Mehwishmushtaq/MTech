import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { FaWordpress } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { DiGoogleCloudPlatform as DiGoogle } from 'react-icons/di';
import { IoMdGlobe } from 'react-icons/io';
import WordPress from '../../assets/images/wordpress.png'
import Faq from '../../assets/images/faq.jpg'
import Banner from "../../assets/images/wordpress-1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



const WordPressService = () => {

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
        // height:'50vh'
    };
    return (
        <div>
            <header data-aos='fade-down' style={headerStyle}>
                <h1 data-aos='fade-left'><strong>WordPress</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 data-aos='fade-right'>
                                <span>Perfect Technology</span>
                                <span style={{ color: '#01a3a4' }}> Development Services</span>
                            </h2>
                            <p data-aos='fade-left'>
                                WordPress is counted as the simplest and most popular way to build a domain that fulfills businesses’ requirements by creating its own websites and blogs. Technically, it is an open-source content management system that empowers users to create and distribute site pages, requiring nothing past space and a facilitating administration.                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                <h4 data-aos='flip-left' className='mb-2'>It offers to manage;</h4>
                                {/* First row of features */}
                                <Row data-aos='zoom-out-down' className="mb-4">
                                    <Col md={6}>
                                        <h6><FaWordpress color='#22a6b3' size={20} className="mr-2" /> WordPress Module</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><AiOutlineSearch color='#22a6b3' size={20} className="mr-2" /> Content For SEO</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><DiGoogle color='#22a6b3' size={20} className="mr-2" /> Google Rankings</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdGlobe color='#22a6b3' size={20} className="mr-2" /> Web-Based Interface</h6>
                                    </Col>
                                </Row>

                                <p  data-aos='fade-down' className="text-justify mt-4">Web design word press is the most straightforward, most well-known approach to making your site or blog. Here, M Technologies has a web format framework utilizing a layout processor. Its design is a front regulator, steering all solicitations for non-static URLs to a solitary PHP document that parses the URI and distinguishes the objective page. These permits uphold more intelligible permalink.
                                </p>
                            </Container>
                        </Col>
                        <Col md={6} data-aos='fade-right'>
                            <img
                                src={WordPress}
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
                        <span style={{ color: '#01a3a4' }}> For WordPress</span>
                    </h2>
                    <Col md={6} data-aos='zoom-out-left'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Is There Any Limitation For Using WordPress?</Accordion.Header>
                                <Accordion.Body>
                                    No, there is no limitation to using WordPress. WordPress can be used for an innumerable purpose etc. Membership site, E-commerce site,Photo gallery, and many more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you Need To Have A Blog In Order To Use WordPress For A Website?</Accordion.Header>
                                <Accordion.Body>
                                    WordPress is popular for website development over the past few years. It is not necessary to have a blog to use WordPress only, Still having a blog is commendable as it will help in search engine optimization.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Does WordPress Have Cookies?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, WordPress has cookies, and WordPress uses cookies for verification of users while logged in.
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
                <div data-aos='zoom-out' style={{ background: '#01a3a4', padding: '20px', color: '#fff', textAlign: 'left' }}>
                    <Container>
                        <h1>Bringing Out The Best With Our Expertise</h1>
                        <p className='text-white'>Say goodbye to project hassles and hello to groundbreaking ideas to unlock innovation with M Technologies.</p>
                        <a href="/contact">
                            <Button style={{ background: '#fff', color: '#01a3a4', borderRadius:'5px', fontWeight:'700', border:'none' }}>
                                Start a Project
                            </Button>

                        </a>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default WordPressService;
