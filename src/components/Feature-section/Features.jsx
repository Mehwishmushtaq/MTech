import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Software experts with a business mindset",
    desc: "Technology decisions are an ongoing process. Our engineers take into account the cost effectiveness and business impact when taking care of your project.",
    icon: "ri-draft-line",
  },

  {
    title: "Scale with the right technology",
    desc: "Custom software must always be designed for a specific set of business needs. We have years of commercial experience with various technologies and can choose the right tech stack for your project.",
    icon: "ri-discuss-line",
  },

  {
    title: "Quality software product",
    desc: "You get an efficient and scalable digital product. During our cooperation, we make sure the final solution is a maintainable and working software that brings real value.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
