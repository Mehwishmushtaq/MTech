import React from "react";
import { Container, Row, Col } from "reactstrap";
import serviceImg1 from "../../assets/images/web-design.png";
import serviceImg2 from "../../assets/images/graphics-design.png";
import serviceImg3 from "../../assets/images/ui-ux.png";
import "./services.css";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: "01",
    title: "Web Design & Development",
    projects: 12,
    rating: 5.9,
    imgUrl: serviceImg1,
  },

  {
    id: "02",
    title: "Graphics Design",
    projects: 12,
    rating: 5.9,
    imgUrl: serviceImg2,
  },

  {
    id: "03",
    title: "React App Development",
    projects: 12,
    rating: 5.9,
    imgUrl: serviceImg3,
  },
  {
    id: "04",
    title: "Graphic Design",
    projects: 12,
    rating: 5.9,
    imgUrl: serviceImg3,
  },
  {
    id: "05",
    title: "Content Writing",
    projects: 12,
    rating: 5.9,
    imgUrl: serviceImg3,
  },
  {
    id: "06",
    title: "Search Engine Optimization",
    projects: 12,
    rating: 5.9,
    imgUrl: serviceImg3,
  },
];

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          {/* <Col lg="12" className="mb-5">
            <div className="course__top d-lg-flex  justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Services</h2>
                <p>
                  We provide a comprehensive selection of innovative solutions to fulfill your software
                  development and IT requirements. Our skilled team of developers, designers, and
                  engineers is committed to providing high-quality solutions that are suited to your
                  company's needs. We recognize that staying ahead in the fast-paced world of technology
                  is critical to your business. That is why we continue to invest in our skills and
                  experience in order to present you with the most current and innovative solutions. When
                  you choose us, you are selecting a partner who is committed to your long-term success
                  in the digital age.

                </p>
              </div>

              <div className="text-center text-lg-end">
                <img src="https://img.freepik.com/free-vector/people-work-office-together_107791-14052.jpg?size=626&ext=jpg&ga=GA1.1.843820476.1686048661&semt=sph"
                  alt="See All"
                  className="image-container" />
              </div>
            </div>
          </Col> */}
          {/* <!--Start :: Paragraph & Title--> */}
          <div class="container">
            <div class="row mt-2 text-center justify-content-center">
              <h1>Our Popular Services</h1>
              <div class="col-md-12">
                {/* <!-- Column for the First Paragraph --> */}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sunt pariatur quasi excepturi laboriosam aliquid beatae neque nobis sed, blanditiis mollitia ipsam eius praesentium repellendus sapiente. Amet a odit provident.Fugit eius ea repellat aperiam atque neque quod accusamus. Amet dolores hic iste recusandae, et repellat culpa est voluptate aliquam nihil vero sed mollitia, minima laudantium, distinctio nam maxime molestias.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sunt pariatur quasi excepturi laboriosam aliquid beatae neque nobis sed, blanditiis mollitia ipsam eius praesentium repellendus sapiente. Amet a odit provident.Fugit eius ea repellat aperiam atque neque quod accusamus. Amet dolores hic iste recusandae, et repellat culpa est voluptate aliquam nihil vero sed mollitia, minima laudantium, distinctio nam maxime molestias.</p>
              </div>
            </div>
          </div>
          {/* <!--End :: Paragraph & Title--> */}
          {servicesData.map((item) => (
            <Col key={item.id} lg="4" md="6" sm="6">
              <ServiceCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
