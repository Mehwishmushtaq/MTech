import React, {useEffect} from "react";
import '../About-us/AboutUs.css'
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CountUp from "react-countup";
import TeamConcept from '../../assets/images/team-concept.jpg'
import Web6 from '../../assets/images/web6.jpg'
import Banner from "../../assets/images/tech-banner.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import context from "react-bootstrap/esm/AccordionContext";




const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'linear',
      offset: 200,
    });
  }, []);

  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;


  const counters = [
    { id: 1, title: "Project Finished", start: 0, end: 100, duration: 5 },
    { id: 2, title: "Years Projects", start: 0, end: 10, duration: 5 },
    { id: 3, title: "Happy Clients", start: 0, end: 1000, duration: 9 },
    { id: 4, title: "Recognition", start: 0, end: 50, duration: 11 },
  ];

  const backgroundImageStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-82660.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '5vh',
  };
  
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section py-6 text-center text-white" style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center',  height:'50vh'}}>
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
              <div data-aos="zoom-out-left" className="about__content">
                <h2 className="mt-4">About Us</h2>
                <p>
                  <h5 style={{ color: '#01a3a4' }}>High-Quality IT Services Provider Company</h5>
                  M Technology's major mission is to provide high-quality IT services. Our aim is to be the industry's leading provider of high-quality IT solutions, setting the bar for excellence and innovation. We seek to be your trusted partner for all of your IT needs with cutting-edge technology, talented experts, and a customer-centric approach. Additionally, we are committed to delivering personalized solutions tailored to meet the specific requirements of each client, ensuring their success in the rapidly evolving digital landscape.
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              {/* Image */}
              <div data-aos='zoom-out-right'className="about__img">
                <img src={TeamConcept} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-white">

        <div className="container">

          <div className="row">

            <div data-aos='flip-right' className="col-md-12 text-center">

              <h2 className="section-title"><strong>The Team Behind <span style={{ color: '#01a3a4' }}>MTechnologies</span></strong></h2>

              <p className="section-subtitle text-center ">{message}</p>

            </div>

            <div className="col-sm-6 col-md-4">

              <div data-aos='fade-up' className="team-item">

                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />
                <h3>JOHNATHAN HAWKINS</h3>
                <div className="team-info"><p className="text-center">CEO</p></div>
                <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses over five years.</p>

                <ul className="team-icon">
                  <li><a href="https://www.facebook.com/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="https://twitter.com/" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="https://www.linkedin.com/" className="linkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="https://www.instagram.com/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>

                </ul>


              </div>
            </div>

            <div className="col-sm-6 col-md-4">

              <div data-aos='fade-down' className="team-item">

                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />

                <h3>ALEXANDRA SMITHS</h3>

                <div className="team-info"><p className="text-center">SEO Specialist</p></div>

                <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>

                <ul className="team-icon">

                  <li><a href="https://www.facebook.com/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="https://twitter.com/" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="https://www.linkedin.com/" className="linkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="https://www.instagram.com/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>

                </ul>

              </div>

            </div>
            <div className="col-sm-6 col-md-4">

              <div data-aos='fade-up' className="team-item">

                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />

                <h3>ELISA JOHANSON</h3>

                <div className="team-info"><p className="text-center">Marketing Manager</p></div>

                <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

                <ul className="team-icon">

                  <li><a href="https://www.facebook.com/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="https://twitter.com/" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="https://www.linkedin.com/" className="linkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="https://www.instagram.com/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Counter Section 3*/}
      <div data-aos='zoom-out-up' style={backgroundImageStyle} >
        <Container className="py-5 mt-5">
          <Row>
            {counters.map((counter) => (
              <Col key={counter.id} md={3} className="mb-4">
                <div className="text-center text-white">
                  <h2 style={{ fontSize: '40px', fontWeight: '900' }}>
                    <CountUp
                      start={counter.start}
                      end={counter.end}
                      duration={counter.duration}
                    />
                  </h2>
                  <p style={{ fontSize: '30px', fontWeight: '900' }} className="text-center text-white">{counter.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Section 4 */}
      <section className="container mt-4">
        <div className="row">
          <div data-aos='zoom-out-up' className="col-md-6">
            <img
              src={Web6}
              alt="Sample"
              className="img-fluid rounded"
            />
          </div>
          <div data-aos='zoom-out-up' className="col-md-6 content-p">
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
        <div  className="row about-row">
          <div data-aos='flip-left' className="col-md-6 bg-secondary text-light p-4 font-monospace">
            <h2>Our Mission</h2>
            <p className="text-white">
              We know the importance of  growth for your business projects. M Technologies knows how to tackle the hurdles.
            </p>
          </div>
          <div data-aos='flip-right' className="col-md-6 bg-dark text-light p-4 font-monospace ">
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
