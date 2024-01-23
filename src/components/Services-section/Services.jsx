import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CountUp from "react-countup";
import serviceImg1 from "../../assets/images/web-design.png";
import serviceImg2 from "../../assets/images/graphics-design.png";
import serviceImg3 from "../../assets/images/ui-ux.png";
import Features from '../Feature-section/Features'
import "./services.css";
import ServiceCard from "./ServiceCard";

const backgroundImageStyle = {
  backgroundImage: 'url("https://img.freepik.com/premium-vector/modern-red-abstract-banner-background_181182-21615.jpg?w=360")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '5vh',
};
const counters = [
  { id: 1, title: "Project Finished", start: 0, end: 50, duration: 5 },
  { id: 2, title: "Years Projects", start: 0, end: 5, duration: 10 },
  { id: 3, title: "Happy Clients", start: 0, end: 100, duration: 9 },
  { id: 4, title: "Recognition", start: 0, end: 50, duration: 11 },
];

const servicesData = [
  {
    id: "01",
    title: "Web Design & Development",
    imgUrl: serviceImg1,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },

  {
    id: "02",
    title: "Graphics Design",
    imgUrl: serviceImg2,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },

  {
    id: "03",
    title: "React App Development",
    imgUrl: serviceImg3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
];

const Services = () => {
  return (
    <section className="service-home">
      <Container>
        <Row>
          <div className="container overflow-hidden">
            <div class="row mt-2 text-center justify-content-center">
              <h4 style={{ color: '#ff6b6b' }}>Empowering Your Business with</h4>
              <h3 style={{ fontWeight: '700' }}>Our Outstanding Services</h3>
              <div class="col-md-12">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ipsum reiciendis reprehenderit laudantium? Voluptates, nulla ducimus? Fuga esse, nemo ut necessitatibus magni itaque porro voluptatem, vel veniam corporis incidunt provident?
                  Consequuntur eius doloribus quidem natus vero sapiente! Perspiciatis totam harum veritatis eos, molestiae vel maxime velit temporibus fuga officia rem eveniet delectus ad, libero reiciendis ducimus ut tempore, facilis nam?</p>
              </div>
            </div>
          </div>
          {servicesData.map((item) => (
              <Col className='service-cards' key={item.id} lg="3" md="6" sm="12">
              <ServiceCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="container d-flex justify-content-center align-items-center">
        <a href="/all-services" className="see-more">See More</a>
      </div>

      {/* Best IT Solution Section  */}
      <Container>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={serviceImg3}
                alt="Sample"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4 ">
              <h4 style={{ color: '#f36b6b' }}>The Best IT Solutions & Ideas</h4>
              <h2><strong>Unleashing Your Best with MTechnologies</strong></h2>

              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <div className="bullet-circle"></div>
                  <div>
                    <h5 className="mt-2"><strong>Our Planning:</strong></h5>
                    <p>Empowering your success with our expert team and strategic planning.</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="bullet-circle"></div>
                  <div>
                    <h5 className="mt-2"><strong>Our Quality Product:</strong></h5>
                    <p>Delivering market-relevant, unique, and quality products with expertise.</p>
                  </div>
                </li>
              </ul>
              <div className="container d-flex justify-content-center align-items-center">
                <a href="/contact" className="start-project">Start a Project</a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Counter Section 3*/}
      <div style={backgroundImageStyle} >
        <Container className="py-5 mt-5">
          <Row>
            {counters.map((counter) => (
              <Col key={counter.id} md={3} className="mb-4">
                <div className="text-center text-white">
                  <h2 style={{fontSize:'30px', fontWeight:'700'}}>
                    <CountUp
                      start={counter.start}
                      end={counter.end}
                      duration={counter.duration}
                    />
                  </h2>
                  <p style={{fontSize:'20px', fontWeight:'700'}} className="text-center text-white">{counter.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* business Solution Section  */}
      <Container className="text-center mt-5">
        <Row className="mb-4">
          <h2>
            <strong>
              We Provide <span style={{ color: '#f36b6b' }}>IT & Business Solutions</span>
            </strong>
          </h2>
          <p className="text-center">We follow the structure to acquaint you with your ideas’ hassle and bring creative solutions for your projects.</p>
        </Row>
      </Container>
      <Features />
      {/* Banner Section */}
      <section>
        <div style={{ background: '#e17055', padding: '20px', color: '#fff', textAlign: 'left' }}>
          <Container>
            <h1>Bringing Out The Best With Our Expertise</h1>
            <p className='text-white'>Say goodbye to project hassles and hello to groundbreaking ideas to unlock innovation with M Technologies.</p>
            <a href="/contact">
              <Button style={{ background: '#fff', color: '#f36b6b', borderRadius:'5px', fontWeight:'700', border:'none' }}>
                Start a Project
              </Button>
            </a>
          </Container>
        </div>
      </section>

      {/* Just Click Away Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={serviceImg3}
              alt="Sample"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-center mt-4"><strong>We're Just a Click Away</strong></h2>
            <p className="text-center">
              Need help? We’re here for you 24/7. Call us now or drop us an email and make your business thrive.
            </p>
            <Row className="text-center">
              <Col className="mt-4">
                <FontAwesomeIcon icon={faPhone} size='2x' color="#f36b6b" />
                <h5 className="mt-2"><strong>Say Hello!</strong></h5>
                <p className="text-center">+92 123 4023686</p>
              </Col>
              <Col className="mt-4">
                <FontAwesomeIcon icon={faEnvelope} size='2x' color="#f36b6b" />
                <h5 className="mt-2"><strong>Email</strong></h5>
                <p className="text-center">contact@mtechnologies.com</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Services;
