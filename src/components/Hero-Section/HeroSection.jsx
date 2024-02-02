import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import HeroImg from '../../assets/images/hero-img2.png'
import "./hero-section.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'linear',
      offset: 200,
    });
  }, []);


  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg="6" md="6" className="hero-content">
            <div className="hero">
              <div className="hero__content">
                <h5 data-aos='fade-left' data-aos-easing="linear" data-aos-duration="2000" className=" mt-2  hero__title">
                  <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>Discover, Prepare, Innovate &</span>
                </h5>
                <h2 data-aos='fade-down' data-aos-easing="linear" data-aos-delay="300" data-aos-offset="0"
                  style={{ fontSize: '3rem', fontWeight: '1000' }}>Empower your ideas</h2>
                <p data-aos='zoom-out-down' className="text-white">Elevate your business success with outstanding and exemplary services to transform your brilliant ideas into action.</p>
                <div className="search">
                  <a href="/contact">
                    <button className="btn">GET A QUOTE</button>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" className="hero-img-col">
            <img src={HeroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
