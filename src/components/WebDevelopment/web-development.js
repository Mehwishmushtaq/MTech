import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const WebService = () => {
  const headerStyle = {
    backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg')`, // Replace with your image URL
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
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300',
      ],
    },
    {
      title: 'Responsive Development',
      description: 'Ensuring your website looks great and functions well on all devices.',
      images: [
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300',
      ],
    },
    {
      title: 'E-commerce Solutions',
      description: 'Building secure and user-friendly online stores for your products.',
      images: [
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300',
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
                src="https://via.placeholder.com/700x300"
                alt="Banner 1"
                className="img-fluid mb-3"
              />
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/700x300"
                alt="Banner 2"
                className="img-fluid mb-3"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2>Section 3</h2>
              <p>
                Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis
                porttitor volutpat.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default WebService;
