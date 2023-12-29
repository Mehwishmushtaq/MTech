import React from 'react';
import { Container, Row, Col, Card, Carousel, Form, Button } from 'react-bootstrap';
import Web1 from '../../assets/images/web1.svg'
import Web2 from '../../assets/images/web2.svg'
import Web3 from '../../assets/images/web3.png'
import Web4 from '../../assets/images/web4.png'
import Web5 from '../../assets/images/web5.svg'

const WebService = () => {

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
              <h2>
                <span style={{ color: '#ff6b6b' }}>Great Web Design</span> is more than Pretty Pictures
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/500x400"
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
            <Col md={6}>
              <h2>
                <span>Choose Us To Stand Out </span>
                <span style={{ color: '#ff6b6b' }}>In The Market</span>
              </h2>
            </Col>
            <Col md={6}>
              <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Pellentesque in ipsum id orci porta dapibus.Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Pellentesque in ipsum id orci porta dapibus.
              </p>
            </Col>
            <Col md={6}>
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
            </Col>
          </Row>
        </Container>
      </section>


      {/* Section 3 */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            {/* First Container */}
            <Col md={6}>
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
            <Col md={6}>
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
      <section className="py-5">
      <Container>
         {/* Title Section */}
         <Row className="mb-4">
          <Col md={12} className="text-center">
            <h4 style={{ color: '#ff6b6b'}}>The Best IT Solutions And Ideas</h4>
            <h3>Need a designer with a creative portfolio?</h3>
          </Col>
        </Row>
        <Row>
          {/* Left Side - Picture */}
          <Col md={6} className="mb-4">
            <img
              src={Web5}
              alt="Sample"
              className="img-fluid"
            />
          </Col>

          {/* Right Side - Form */}
          <Col md={6}>
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

              <Button variant="secondary" type="submit" className='mt-4'>
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
