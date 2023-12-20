import React from "react";
import { Container, Row, Col } from "reactstrap";

import serviceImg01 from "../../assets/images/web-development.png";
import serviceImg02 from "../../assets/images/kids-learning.png";
import serviceImg03 from "../../assets/images/seo.png";
import serviceImg04 from "../../assets/images/ui-ux.png";
import FastServiceCard from "./FastServiceCard";

import "./fast-service.css";

const fastServiceData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: serviceImg01,
    projects: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: serviceImg02,
    projects: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: serviceImg03,
    projects: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: serviceImg04,
    projects: 5.3,
    rating: 1.7,
  },
];

const FastService = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Fast Services</h2>
          </Col>

          {fastServiceData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FastServiceCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FastService;
