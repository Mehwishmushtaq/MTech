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
                <h5 className=" mt-2  hero__title">
                  <span style={{fontSize: '16px', fontWeight:'700'}}>Discover, Prepare, Innovate &</span>
                </h5>
                <h2 style={{fontSize: '3rem', fontWeight:'700'}}>Empower your ideas</h2>
                <p className="">Elevate your business success with outstanding and exemplary services to transform your brilliant ideas into action.</p>
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
