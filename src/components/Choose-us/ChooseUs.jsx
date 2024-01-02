import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/images/choose.gif";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" just>
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                At M Technology, we understand that choosing the right IT partner is crucial for your business's success. With a diverse range of IT services tailored to meet your specific needs, we stand out as your ideal choice. Our team of experienced professionals is committed to delivering excellence in every aspect of IT, from software development and system integration to cybersecurity and cloud solutions. What sets us apart is our unwavering dedication to innovation, staying at the forefront of technological advancements to ensure your business remains competitive and efficient. We take a client-centric approach, offering personalized solutions that align with your goals and objectives.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=mq508HXzccI"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
