import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img2.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg="6" md="6" className="hero-content">
            <div className="hero">
              <div className="hero__content">
                <h2 className="mb-4 hero__title">
                  Best Software House in Pakistan
                </h2>
                <p className="mb-5">
                  WEBSITE DESIGN & DEVELOPMENT SERVICES
                  <br />
                  We offer full service digital media solutions.
                </p>
                <div className="search">
                  <a href="/contact">
                    <button className="btn">GET A QUOTE</button>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" className="hero-img-col">
            <img src={heroImg} alt="" className="w-100 hero__img"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
