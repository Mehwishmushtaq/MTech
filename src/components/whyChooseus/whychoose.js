import React from 'react';
import { Container, Row, Col } from 'reactstrap';

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

    const headerStyle = {
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
    };
    return (
        <div>
            <header style={headerStyle}>
                <h1>Why Choose Us</h1>
            </header>
            <Container>
            <section className="why-choose-us-section">
                <h2 className="text-center mb-5">Why Choose Us</h2>
                <Row>
                    {features.map((feature, index) => (
                        <Col key={index} md="6" lg="4" className="mb-4">
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
