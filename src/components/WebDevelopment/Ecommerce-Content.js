import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from "react-icons/io";
import EcommerceContent from '../../assets/images/ecommerce-content.jpg'
import Faq from '../../assets/images/faq.jpg'



const ECommerceContent = () => {
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
                <h1><strong>Ecommerce Content</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                                <span style={{ color: '#ff6b6b' }}>Combining Quality And</span>
                                <span> Reliability In One</span>
                            </h2>
                            <p>
                                E-commerce writing services involve creating written content for e-commerce websites, such as product descriptions, category pages, and blog posts. The content is typically designed to inform, persuade, and engage visitors to the website to convert them into customers.
                                <br />
                                Overall, the pain point to focus on are as follows;
                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Establish Businesses</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Maintain Online Presence</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Attract and Retain</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><IoMdCheckmarkCircle color='#22a6b3' size={20} className="mr-2" /> Drive Sales</h6>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <img
                                src={EcommerceContent}
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
                        <span style={{ color: '#ff6b6b' }}>M Technologies Elevating E-Commerce Success with</span>
                        <br />
                        Expert Content Solutions
                    </h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                Effective e-commerce writing content should be clear, concise, and engaging. It should also be SEO-friendly, including keywords and phrases relevant to the products or services offered and likely to be used by people searching for those products or services online.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                In addition to product descriptions and category pages, e-commerce writing content services CentoSquare offers create blog posts, social media posts, and email marketing campaigns. These types of content can be used to drive traffic to the website, build brand awareness, and engage customers.
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
                        <span style={{ color: '#ff6b6b' }}> For Ecommerce Content</span>
                    </h2>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How We Focus On Word Count?</Accordion.Header>
                                <Accordion.Body>
                                    We make sure we consider the word tally.To adequately illuminate readers about the specifics regarding your item. It’s easy to get stuck in the snare of giving just the bare least when it comes to content. Mostly 300 words is a reasonable word mean an item description as it provides enough space to give necessary details and other data that is useful for the reader, for example, customer reviews. However, descriptions over 450 words may lose the reader’s attention, making them move on from your page.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How We Stay Away From Duplicate Content?</Accordion.Header>
                                <Accordion.Body>
                                    We always try to stay away from bad quality material, We ought to avert duplicate content also. Duplicate content happens when you duplicate text from another source for your item description. But at CentoSquare we assure our client to have plagiarism free content for their website and applications.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How M Technologies Help You For Ecommerce Content?</Accordion.Header>
                                <Accordion.Body>
                                    M Technologies transforms E-commerce success by crafting persuasive, conversion-focused content. From impactful product descriptions to visually appealing imagery, we optimize your online store to captivate customers and drive sales.
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
                            <Button style={{background:'#01a3a4', color:'#fff'}}>
                                Start a Project
                            </Button>
                        </a>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default ECommerceContent;
