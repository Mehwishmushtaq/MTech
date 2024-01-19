import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About Us",
    url: "/about",
  },

  {
    display: "Why Choose Us",
    url: "/whyChooseUs",
  },
  {
    display: "Portfolio",
    url: "/portfolio",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className=" navigation">
            <h2 className="logo d-flex align-items-center gap-1">
              <i class="ri-edge-new-fill"></i>M Technologies
            </h2>

            <div className="follows mt-3 mb-3">
              <p className="mb-0 white-text">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com/" className="facebook"><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
              </span>

              <span>
                {" "}
                <a href="https://twitter.com/" className="twitter"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
              </span>

              <span>
                {" "}
                <a href="https://www.linkedin.com/" className="linkedIn"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/" className="instagram"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold white-text">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold white-text">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold white-text">Get in Touch</h6>
            <p className="mb-0 white-text">Address: Cambridge, UK</p>
            <p className="mb-0 white-text"> Phone: +88 0123456789 </p>
            <p className="mb-0 white-text">Email: example@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <div class="container text-center mt-4 ">
        <h6>
        <span class="text-white">
          &copy; 2024 All rights reserved.
          Made with  <FontAwesomeIcon icon={faHeart}/> by MTechnologies
        </span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
