import React, {useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Banner from "../../assets/images/tech-banner.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeatureCard from './FeatureCard';

const features = [
    {
        title: 'Advanced Technology',
        description: 'Utilize cutting-edge technologies to provide innovative solutions.',
    },
    {
        title: 'Expert Team',
        description: 'Our team of skilled professionals ensures top-notch software development.',
    },
    {
        title: 'Quality Assurance',
        description: 'Ensure high-quality standards through rigorous testing processes.',
    },
    {
        title: 'Scalable Solutions',
        description: 'Deliver scalable software solutions to meet evolving business needs.',
    },
    {
        title: 'Customer Satisfaction',
        description: 'Dedicated to achieving customer satisfaction through exceptional service.',
    },
    {
        title: 'Innovation Focus',
        description: 'Constantly innovate to stay ahead in the dynamic tech landscape.',
    },

];

const WhyChooseUs = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500,
          easing: 'linear',
          offset: 200,
        });
      }, []);

    const headerStyle = {
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        height:'50vh'
    };
    return (
        <div>
            <header style={headerStyle}>
                <h1>Why Choose Us</h1>
            </header>
            <Container>
            <section className="why-choose-us-section">
                <h2  data-aos='zoom-out-down' className="text-center mb-5">Why Choose Us</h2>
                <Row>
                    {features.map((feature, index) => (
                        <Col data-aos='fade-down-left' key={index} md="6" lg="4" className="mb-4">
                            <FeatureCard {...feature} />
                        </Col>
                    ))}
                </Row>

            </section>
        </Container>
        </div>

    );
};

export default WhyChooseUs;
