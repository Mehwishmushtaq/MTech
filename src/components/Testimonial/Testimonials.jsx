import React, {useEffect} from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from "../../assets/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'linear',
      offset: 200,
    });
  }, []);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="6" sm="12" className="">
            <div data-aos='zoom-out-left' className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-100">
                <img src={img} alt="" className="w-100 "/>
              </div>

              <div data-aos='zoom-out-right' className="testimonial__content w-50 ">
                <h2 className="mb-4">Our Customers Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial w-100 ">
                      <h6 className="mb-3 fw-bold">
                        Excellent service of software products
                      </h6>
                      <p>
                        Exceptional service is paramount for software products, fostering user trust and satisfaction.
                      </p>

                      <div className="customer__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent service of software products
                      </h6>
                      <p>
                        Prioritizing user feedback and constant improvement builds loyalty and ensures success in the competitive software market.
                      </p>

                      <div className="customer__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent service of software products
                      </h6>
                      <p>
                        Software providers that excel in service not only meet user expectations but also create strong brand advocates, driving long-term growth.

                       </p>

                      <div className="customer__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
