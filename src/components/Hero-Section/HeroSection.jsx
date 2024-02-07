import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import HeroImg from '../../assets/images/hero-img2.png'
import "./hero-section.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "particles.js";

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'linear',
      offset: 200,
    });

    // Initialize particles.js
    const particlesJS = window.particlesJS;
    if (particlesJS) {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <div id="particles-js" className="particles"></div>
      <Container>
        <Row>
          <Col lg="6" md="6" className="hero-content" style={{ position: 'relative', zIndex: '1' }}>
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
          <Col lg="6" md="6" className="hero-img-col" style={{ position: 'relative', zIndex: '1' }}>
            <img src={HeroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;