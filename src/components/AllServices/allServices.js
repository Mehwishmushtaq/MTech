import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import serviceImg1 from "../../assets/images/web-design.png";
import serviceImg2 from "../../assets/images/graphics-design.png";
import serviceImg3 from "../../assets/images/ui-ux.png";
import Web3 from '../../assets/images/web3.png'
import Web4 from '../../assets/images/web4.png'
import ServiceCard from "../Services-section/ServiceCard";
import "./allServices.css";


const servicesData = [
    {
        id: "01",
        title: "Web Development",
        imgUrl: serviceImg1,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },

    {
        id: "02",
        title: "Graphics Design",
        imgUrl: serviceImg2,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },

    {
        id: "03",
        title: "React App Development",
        imgUrl: serviceImg3,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: "01",
        title: "Content Writing",
        imgUrl: serviceImg1,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },

    {
        id: "02",
        title: "Search Engine Optimization",
        imgUrl: serviceImg2,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },

    {
        id: "03",
        title: "Digital Marketing",
        imgUrl: serviceImg3,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
];

const AllServices = () => {
    return (

        <div>
            {/* Banner Section */}
            <section className="banner-section py-5 text-center text-white" style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container>
                    <h1>Services</h1>
                </Container>
            </section>

            <section className="service-home">
                <Container>
                    <Row>
                        <div class="container">
                            <div class="row mt-2 text-center justify-content-center">

                                <h2><strong>Engaging
                                    <span style={{ color: '#ff6b6b' }}> Creative Minds</span>
                                </strong>
                                </h2>
                                <br />
                                <h2><strong>Via Technology</strong></h2>

                            </div>
                        </div>
                        {servicesData.map((item) => (
                            <Col className='service-cards' key={item.id} lg="3" md="6" sm="6">
                                <ServiceCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>

                {/* Best IT Solution Section  */}
                <Container>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={serviceImg3}
                                    alt="Sample"
                                    className="img-fluid"
                                />
                            </div>

                            <div className="col-md-6 mt-4 ">
                                <h4 style={{ color: '#f36b6b' }}>The Best IT Solutions & Ideas</h4>
                                <h2><strong>Unleashing Your Best with MTechnologies</strong></h2>

                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center">
                                        <div className="bullet-circle mr-3 mb-lg-5 "></div>
                                        <div>
                                            <h5 className="mt-2"><strong>Our Planning:</strong></h5>
                                            <p>Empowering your success with our expert team and strategic planning.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="bullet-circle mr-3 mb-lg-5"></div>
                                        <div>
                                            <h5 className="mt-2"><strong>Our Quality Product:</strong></h5>
                                            <p>Delivering market-relevant, unique, and quality products with expertise.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="container d-flex justify-content-center align-items-center">
                                    <a href="/contact" className="start-project">Start a Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Choose Us to Stand */}
                {/* Section 2 */}
                <section className="bg-light py-5 mt-5 ">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h2>
                                    <span>Choose Us To Stand Out </span>
                                    <span style={{ color: '#ff6b6b' }}>In The Market</span>
                                </h2>
                            </Col>
                            <Col md={6}>
                                <p>
                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                    Pellentesque in ipsum id orci porta dapibus.Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                    Pellentesque in ipsum id orci porta dapibus.
                                </p>
                            </Col>
                            <Col md={6}>
                                <img
                                    src={Web3}
                                    alt="Banner 1"
                                    className="img-fluid mb-3"
                                />
                            </Col>
                            <Col md={6}>
                                <img
                                    src={Web4}
                                    alt="Banner 2"
                                    className="img-fluid mb-3"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>



                {/* Banner Section */}
                <section>
                    <div style={{ background: '#e17055', padding: '20px', color: '#fff', textAlign: 'left' }}>
                        <Container>
                            <h1>Bringing Out The Best With Our Expertise</h1>
                            <p className='text-white'>Say goodbye to project hassles and hello to groundbreaking ideas to unlock innovation with M Technologies.</p>
                            <a href="/contact">
                                <Button style={{ background: '#fff', color: '#f36b6b', borderRadius:'5px', fontWeight:'700', border:'none' }}>
                                    Start a Project
                                </Button>
                            </a>
                        </Container>
                    </div>
                </section>

            </section>
        </div>

    );
};

export default AllServices;
