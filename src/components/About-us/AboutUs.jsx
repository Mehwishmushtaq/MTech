import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import TeamConcept from '../../assets/images/team-concept.jpg'
import Web6 from '../../assets/images/web6.jpg'


const AboutUs = () => {

  const counters = [
    { id: 1, title: "Project Finished", start: 0, end: 100, duration: 5 },
    { id: 2, title: "Years Projects", start: 0, end: 10, duration: 5 },
    { id: 3, title: "Happy Clients", start: 0, end: 1000, duration: 9 },
    { id: 4, title: "Recognition", start: 0, end: 50, duration: 11 },
  ];

  const backgroundImageStyle = {
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '5vh',
  };
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section py-5 text-center text-white" style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container>
          <h1>About Us</h1>
        </Container>
      </section>

      {/* Section 2 */}
      <section className="about-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              {/* Text Content */}
              <div className="about__content">
                <h2 className="mt-4">About Us</h2>
                <p>
                  <h5 style={{color: '#ff6b6b'}}>High-Quality IT Services Provider Company</h5>
                  M Technology's major mission is to provide high-quality IT services. Our aim is to be
                  the industry's leading provider of high-quality IT solutions, setting the bar for
                  excellence and innovation. We seek to be your trusted partner for all of your IT needs
                  with cutting-edge technology, talented experts, and a customer-centric approach.
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              {/* Image */}
              <div className="about__img">
                <img src={TeamConcept} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Counter Section 3*/}
      <div style={backgroundImageStyle} >
        <Container className="py-5">
          <Row>
            {counters.map((counter) => (
              <Col key={counter.id} md={3} className="mb-4">
                <div className="text-center">
                  <h2>
                    <CountUp
                      start={counter.start}
                      end={counter.end}
                      duration={counter.duration}
                    />
                  </h2>
                  <p>{counter.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Section 4 */}
      <section className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Web6}
              alt="Sample"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>The Best IT Solutions And Ideas</h2>
            <p>
              In the ever-evolving landscape of technology, finding the best IT solution is crucial for businesses striving to stay competitive and innovative. A robust IT solution not only streamlines operations but also empowers organizations to adapt to the dynamic challenges of the digital era. From efficient cloud computing and cybersecurity measures to cutting-edge software development and data analytics, the best IT solution is tailored to meet the unique needs of a business. It acts as a strategic enabler, fostering agility, scalability, and a resilient infrastructure. Choosing the right IT solution is akin to unlocking the door to enhanced productivity, seamless collaboration, and future-proofing against technological disruptions. As businesses embrace digital transformation, the quest for the best IT solution becomes an integral part of their journey toward sustained success in the rapidly advancing world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="container-fluid">
        {/* Single Row */}
        <div className="row about-row">
          <div className="col-md-6 bg-secondary text-light p-4 font-monospace">
            <h2>Our Mission</h2>
            <p className="text-white">
              We know the importance of  growth for your business projects. M Technologies knows how to tackle the hurdles.
            </p>
          </div>
          <div className="col-md-6 bg-dark text-light p-4 font-monospace ">
            <h2>Our Vision</h2>
            <p className="text-white">
              We believe in producing the best outcomes for our clients and guiding them to shape the best ideas.
            </p>
          </div>
        </div>
      </section>
    </div>


  );
};

export default AboutUs;
