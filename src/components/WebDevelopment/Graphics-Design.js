import React, { useEffect } from "react";
import { Container, Row, Col, Card, Carousel, Form, Button } from 'react-bootstrap';
import { FaPallet, FaPaintBrush } from 'react-icons/fa';

import Web1 from '../../assets/images/g-img2.jpg'
import Web2 from '../../assets/images/g-img1.avif'
// import Web3 from '../../assets/images/web3.png'
// import Web4 from '../../assets/images/web4.png'
import Web5 from '../../assets/images/contactImg.jpg'
import Content1 from '../../assets/images/graphics-dImg.avif'
import Content2 from '../../assets/images/g-img3.jpg'
import Banner from "../../assets/images/graphics.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



const GraphicsDesigning = () => {

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

    const services = [
        {
            title: 'Custom Website Design',
            description: 'Unique and tailored website designs to meet your brand and business goals.',
            images: [
                'https://www.webindiamaster.com/assests/images/blog/custom-website-development-services.jpg',
                'https://5.imimg.com/data5/SELLER/Default/2023/5/308729032/UI/YK/BT/8675179/cms-web-design-500x500.jpg',
                'https://www.novelwebsolution.com/uploads/elements/af7f30eeea5fa7fae5c9ad6032c510bb.png',
            ],
        },
        {
            title: 'Responsive Development',
            description: 'Ensuring your website looks great and functions well on all devices.',
            images: [
                'https://www.indiainternets.com/img/custom-web.jpg',
                'https://as1.ftcdn.net/v2/jpg/02/23/15/54/500_F_223155492_Rg2nHb8gBESnRKd9gjBfe470ozVnBPgT.jpg',
                'https://nextlevelwebdev.com/images/responsive-design1.jpg',
            ],
        },
        {
            title: 'E-commerce Solutions',
            description: 'Building secure and user-friendly online stores for your products.',
            images: [
                'https://5.imimg.com/data5/CP/UO/QB/SELLER-14803447/e-commerce-doveloper-500x500.jpg',
                'https://hashcodeinfotech.com/img/services/e-commerce2.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvl6rTjnLodpZg3F8LHzCrB2Z3zl4fLhKWXw&usqp=CAU',
            ],
        },
    ];


    return (
        <div>
            {/* Top Banner */}
            <header data-aos='fade-down' style={headerStyle}>
                <h1 data-aos='fade-left'><strong>Graphic Designing</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 data-aos='fade-up-left'>
                                <span style={{ color: '#01a3a4' }}>We Do</span> Design Differently
                            </h2>
                            <p data-aos="flip-left" className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium velit quas laudantium repellendus tempora. Veniam possimus provident nemo molestias, corrupti dolores tenetur tempore totam, ad iure vel voluptatibus corporis voluptas.
                                Tempore inventore reiciendis incidunt debitis molestiae quae, consequuntur deleniti ea dolores! Esse eos veritatis, dolorum officiis saepe quibusdam aperiam nesciunt sit minima delectus suscipit itaque numquam voluptatem quo nostrum cupiditate?
                                Mollitia, nulla. Quam obcaecati perferendis eum, libero hic, repellendus quaerat nostrum suscipit odit ullam maxime earum explicabo sed est ex labore debitis commodi impedit voluptates soluta assumenda sint consequuntur in.

                            </p>
                        </Col>
                        <Col md={6} data-aos="fade-up-right">
                            <img
                                src={Content1}
                                alt="Sample"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            
            {/* Carousel */}
            <section className="bg-light py-5">
                <Container>
                    <h2 data-aos='flip-right' className="text-center mb-5">Our Services</h2>
                    <Row>
                        {services.map((service, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card>
                                    <Carousel data-aos='flip-up'>
                                        {service.images.map((image, idx) => (
                                            <Carousel.Item key={idx}>
                                                <img className="d-block w-100" src={image} alt={`Slide ${idx + 1}`} />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Section 2 */}
            <section className="bg-light py-5">
                <Container>
                    <Row>
                        <Col md={6} data-aos='flip-left'>
                            <h2>
                                <span>Choose Us To Stand Out </span>
                                <span style={{ color: '#01a3a4' }}>In The Market</span>
                            </h2>
                        </Col>
                        <Col md={6} data-aos="flip-right">
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                Pellentesque in ipsum id orci porta dapibus.Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                Pellentesque in ipsum id orci porta dapibus.
                            </p>
                        </Col>
                        {/* <Col md={6}>
                            <img
                                src={Web3}
                                alt="Banner 1"
                                className="img-fluid mb-3"
                            />
                        </Col>
                        <Col md={6}>
                            <img
                                src={Web4}
                                alt="Banner 2"
                                className="img-fluid mb-3"
                            />
                        </Col> */}
                    </Row>
                </Container>
            </section>


            {/* Section 3 */}
            <section className="bg-light py-5">
                <Container>
                    <Row>
                        {/* First Container */}
                        <Col md={6} data-aos="fade-up">
                            <Row>
                                <Col md={6}>
                                    <img
                                        src={Web2}
                                        alt="Banner 1"
                                        className="img-fluid mb-3"
                                    />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h6>
                                            <span>We Help To Bring Out The Best Thing For Our Clients</span>
                                        </h6>
                                        <p>
                                            Our goal is to help each client to maximize their business potential through the use of custom-developed software.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        {/* Second Container */}
                        <Col md={6} data-aos="fade-down">
                            <Row>
                                <Col md={6}>
                                    <img
                                        src={Web1}
                                        alt="Banner 2"
                                        className="img-fluid mb-3"
                                    />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h6>
                                            <span>Better Security And Faster Server</span>
                                        </h6>
                                        <p>
                                            We provide the best security services to our clients to grow more in their specific projects.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section 4 */}
            <section>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 data-aos='flip-up'>Why Choose M Technologies For Your Graphic Designing Project?</h5>
                            <p>Band with the Finest Graphic Designing Company in Pakistan to Illuminate your Idea.</p>
                            <ul>
                                <li>Eye-pleasing Designing</li>
                                <li>High-Quality Graphic Design Services</li>
                                <li>100% Client satisfaction</li>
                                <li>24×7 Support and Maintenance</li>
                                <li>A Dedicated Team of Graphic Designers</li>
                            </ul>
                        </div>

                        <div data-aos='flip-down' className="col-md-3 text-center">
                            <FaPallet color='#22a6b3' size={60} />
                            <h5>Logo Design</h5>
                            <p>Our team creates engaging and informative content tailored to your needs.</p>
                        </div>

                        <div data-aos='flip-down' className="col-md-3 text-center">
                            <FaPaintBrush color='#22a6b3' size={60} />
                            <h5>Mockups</h5>
                            <p>Effective copywriting to convey your message and drive results.</p>
                        </div>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="container mt-4">
                    <div className="row">
                        {/* Left Side: Progress Bars */}
                        <div className="col-md-6 mt-4 ">
                            <h5 data-aos='flip-up' style={{color: '#01a3a4'}}>Benefits</h5>
                            <h3>
                                <span>Our Targeted Plan-Growth</span>
                            </h3>
                              <p data-aos='fade-left'>Here is the growth so far, which we gained over the period, and our targeted achievements on the scale of Content Writing Services.
                              </p>
                            <h5 data-aos='flip-left' className='mt-4'>Technical</h5>
                            <div data-aos='zoom-out' className="progress mb-2">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: '30%' }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    30%
                                </div>
                            </div>
                            <h5 data-aos='flip-left' className='mt-4'>Content Writing</h5>
                            <div data-aos='zoom-out' className="progress mb-2">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    50%
                                </div>
                            </div>
                            <h5 data-aos='flip-left'className='mt-4'>Blogs</h5>
                            <div data-aos='zoom-out' className="progress mb-2">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: '70%' }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    70%
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div data-aos='flip-right' className="col-md-6 mt-4">
                            <img
                                src={Content2}
                                alt="Kitten"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section data-aos='flip-down'>
                    <Container style={{ background: '#01a3a4', padding: '20px', color: '#fff', textAlign: 'left' }}>
                        <h1>Bringing Out The Best With Our Expertise</h1>
                        <p className='text-white'>Say goodbye to project hassles and hello to groundbreaking ideas to unlock innovation with M Technologies.</p>
                        <a href="/contact">
                            <Button style={{ background: '#fff', color: '#01a3a4', borderRadius:'5px', fontWeight:'700', border:'none' }}>
                                Start a Project
                            </Button>
                        </a>
                    </Container>
            </section>



            {/* Section 6 */}
            <section className="py-5">
                <Container>
                    {/* Title Section */}
                    <Row className="mb-4">
                        <Col data-aos='flip-left' md={12} className="text-center">
                            <h4 style={{ color: '#01a3a4' }}>The Best IT Solutions And Ideas</h4>
                            <h3>Need a designer with a creative portfolio?</h3>
                        </Col>
                    </Row>
                    <Row>
                        {/* Left Side - Picture */}
                        <Col data-aos='fade-left' md={6} className="mb-4">
                            <img
                                src={Web5}
                                alt="Sample"
                                className="img-fluid"
                            />
                        </Col>

                        {/* Right Side - Form */}
                        <Col md={6} data-aos='fade-right'>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" className='mb-3' placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" className='mb-3' placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" className='mb-3' placeholder="Enter your phone number" />
                                </Form.Group>

                                <Form.Group controlId="formServices">
                                    <Form.Label>Services</Form.Label>
                                    <Form.Control as="select" className='mb-3' defaultValue="Choose...">
                                        <option disabled>Choose...</option>
                                        <option>Service 1</option>
                                        <option>Service 2</option>
                                        <option>Service 3</option>
                                        {/* Add more options as needed */}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" className='mb-3' rows={5} placeholder="Enter your message" />
                                </Form.Group>

                                <Button style={{ background: '#01a3a4', color: '#fff', borderRadius:'5px', fontWeight:'700', border:'none', width:'100%' }} type="submit" className='mt-4'>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default GraphicsDesigning;
