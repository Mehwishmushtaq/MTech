import React, { useEffect } from "react";
import { Container, Row, Col, Card, Carousel, Form, Button } from 'react-bootstrap';
import Web1 from '../../assets/images/g-img2.jpg'
import Web2 from '../../assets/images/g-img1.avif'
import WebDev from '../../assets/images/web-dev.jpg'
import Web5 from '../../assets/images/contactImg.jpg'
import Banner from "../../assets/images/tech-banner.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';


const WebService = () => {

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
      <header style={headerStyle}>
        <h1>Website Development</h1>
      </header>

      {/* Content Section with Text and Image */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 data-aos='fade-left'>
                <span style={{ color: '#01a3a4' }}>Great Web Design</span> is more than Pretty Pictures
              </h2>
              <p data-aos='flip-down'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </Col>
            <Col md={6} data-aos='flip-right'>
              <img
                src={WebDev}
                alt="Sample"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            {services.map((service, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card>
                  <Carousel>
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

     {/* Contact Form*/}
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

export default WebService;
