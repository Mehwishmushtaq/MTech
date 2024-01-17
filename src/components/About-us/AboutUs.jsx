import React, { useEffect } from "react";
import '../About-us/AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import TeamConcept from '../../assets/images/team-concept.jpg'
import Web6 from '../../assets/images/web6.jpg'
import img from "../../assets/images/testimonial01.png";
// import context from "react-bootstrap/esm/AccordionContext";




const AboutUs = () => {

  const counters = [
    { id: 1, title: "Project Finished", start: 0, end: 100, duration: 5 },
    { id: 2, title: "Years Projects", start: 0, end: 10, duration: 5 },
    { id: 3, title: "Happy Clients", start: 0, end: 1000, duration: 9 },
    { id: 4, title: "Recognition", start: 0, end: 50, duration: 11 },
  ];

  // Mouseover event handling
  useEffect(() => {
    let imgBx = document.querySelectorAll('.imgBx');
    let contentBx = document.querySelectorAll('.contentBx');

    const handleMouseOver = (event) => {
      for (let i = 0; i < contentBx.length; i++) {
        contentBx[i].className = 'contentBx';
      }

      const targetContent = document.getElementById(event.target.dataset.id);
      if (targetContent) {
        targetContent.className = 'contentBx active';
      }

      for (let i = 0; i < imgBx.length; i++) {
        imgBx[i].className = 'imgBx';
      }

      event.target.className = 'imgBx active';
    };
    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].addEventListener('mouseover', handleMouseOver);
    }

    // Cleanup event listeners on component unmount
    return () => {
      for (let i = 0; i < imgBx.length; i++) {
        imgBx[i].removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);



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
                  <h5 style={{ color: '#ff6b6b' }}>High-Quality IT Services Provider Company</h5>
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

      {/* Team Members  */}
      <div className="container mb-4">
          <h2 className="text-center">Meet Our Team</h2>
          <p className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi velit ipsa vitae! Atque dicta quasi molestias perspiciatis iste qui quis velit, nemo totam nihil, ducimus natus quod eaque rem similique.
          Dolorem rerum odit aliquam, fugiat explicabo consectetur, maxime minus incidunt nesciunt hic eius molestias debitis, quod rem. Soluta nihil obcaecati reiciendis illum doloribus quasi, ipsam nemo maxime voluptatum, modi a!</p>
      </div>
      <Container className="about-main">
        <div className="team-container">
          <div className="icon">
            <div className="imgBx active" style={{ '--i': 1 }} data-id="content1">
              <img src={img} alt="" />
            </div>
            <div className="imgBx" style={{ '--i': 2 }} data-id="content2">
              <img src={img} alt="" />
            </div>
            <div className="imgBx" style={{ '--i': 3 }} data-id="content3">
              <img src={img} alt="" />
            </div>
            <div className="imgBx" style={{ '--i': 4 }} data-id="content4">
              <img src={img} alt="" />
            </div>
            <div className="imgBx" style={{ '--i': 5 }} data-id="content5">
              <img src={img} alt="" />
            </div>
            <div className="imgBx" style={{ '--i': 6 }} data-id="content6">
              <img src={img} alt="" />
            </div>
            <div className="imgBx" style={{ '--i': 7 }} data-id="content7">
              <img src={img} alt="" />
            </div>
            <div className="imgBx" style={{ '--i': 8 }} data-id="content8">
              <img src={img} alt="" />
            </div>
          </div>
          {/* Content */}
          <div className="team-content">
            <div className="contentBx active" id="content1">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentBx" id="content2">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentBx" id="content3">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentBx" id="content4">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentBx" id="content5">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentBx" id="content6">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentBx" id="content7">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentBx" id="content8">
              <div className="team-card">
                <div className="imgBx">
                  <img src={img} alt="" />
                </div>
                <div className="textBx">
                  <h2>Someone Famous<br /><span>Product Designer</span></h2>
                  <ul className="sci">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

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
                  <p className="text-center">{counter.title}</p>
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
