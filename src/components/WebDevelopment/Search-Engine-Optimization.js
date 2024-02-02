import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from "react-icons/io";
import SearchEngineImg from '../../assets/images/seo-img.jpg'
import Faq from '../../assets/images/faq.jpg'
import Banner from "../../assets/images/tech-banner.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';




const SearchEngineOptimization = () => {
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
                <h1><strong>Search Engine Optimization</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 data-aos='fade-right'>
                                <span style={{ color: '#01a3a4' }}> Taking Your Site at the Top of Google’s  </span>
                                <span>Ranking Through Search Engine Optimization</span>

                            </h2>
                            <p data-aos='fade-left'>
                                Professional Search Engine Optimization (SEO) Services are the craftsmanship and study of getting pages to rank higher in search engines like Google. Since search is one of the principal manners by which individuals find content internet, positioning higher in Professional SEO Services can prompt an increment in rush hour gridlock to a site.

                                Our significant chunk of work is as follows;
                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row data-aos='zoom-out-down' className="mb-4">
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Search Engine Rankings</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Search Engine Streamlining</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Examine The Content</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Search Engine Calculations</h6>
                                    </Col>
                                    <p data-aos='fade-right'>
                                        At M Technologies, we do optimization, which allows us to help us to understand about search engines. Moreover, we analyze; what’s on your website, the value your company has to offer, and how you commune with relevant keywords.
                                    </p>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6} data-aos='fade-right'>
                            <img
                                src={SearchEngineImg}
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
                                At M Technologies, we do optimization, which allows us to help us to understand about search engines. Moreover, we analyze; what’s on your website, the value your company has to offer, and how you commune with relevant keywords.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Here is some additional information for the audience;</strong>
                                <br />
                                Traffic from Professional SEO Services is known as "organic search traffic," distinct from paid search or search engine advertising (SEM) often termed pay-per-click (PPC).
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
                        <span style={{ color: '#01a3a4' }}> Search Engine Optimization</span>
                    </h2>
                    <Col md={6} data-aos='zoom-out-down'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How We Work On Search Engine Optimization?</Accordion.Header>
                                <Accordion.Body>
                                    Professional SEO Services , for example, Google utilize a calculation or set of rules to figure out what pages to show for some random question. These calculations have developed to be amazingly unpredictable, and consider hundreds or even huge number of various positioning variables to deciding the rankings of their SERPs. Nonetheless, there are three central measurements that search engines assess to decide the nature of a site and how it should rank.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is The Page Structure In SEO We Provide?</Accordion.Header>
                                <Accordion.Body>
                                    The third central part of SEO is page structure. Since website pages are written in HTML, what the HTML code is organized can mean for a search engine’s capacity to assess a page. Remembering pertinent catchphrases for the title, URL, and headers of the page and ensuring that a site is crawlable are activities that site proprietors can take to improve the SEO of their site.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What SEO Connections M Technologies Gives?</Accordion.Header>
                                <Accordion.Body>
                                    Links from different sites assume a critical part in deciding the positioning of a site in Google and other search engines. The explanation being, a connection can be viewed as a vote of value from different sites, since site proprietors are probably not going to connect to different locales which are of low quality. Destinations that secure connections from numerous different locales acquire authority (called “PageRank” in Google) according to search engines, particularly if the locales that are connecting to them are themselves definitive.
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

export default SearchEngineOptimization;
