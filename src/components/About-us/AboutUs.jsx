import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/about-us.gif";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <section className="about-us">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              High-Quality IT Services Provider Company
              <br></br>
              A & M Technology's major mission is to provide high-quality IT services. Our aim is to be
               the industry's leading provider of high-quality IT solutions, setting the bar for 
               excellence and innovation. We seek to be your trusted partner for all of your IT needs
                with cutting-edge technology, talented experts, and a customer-centric approach.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={200} duration={3} suffix="+" />
                    </span>

                    <p className="counter__title">Successful Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={150} duration={3} suffix="+" />
                    </span>

                    <p className="counter__title">Happy Clients</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={2000} duration={3} suffix="+" />
                    </span>

                    <p className="counter__title">Tasks Completed</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={780} duration={3} suffix="+" />
                    </span>

                    <p className="counter__title">Team </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
