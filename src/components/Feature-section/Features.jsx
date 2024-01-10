import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FCard from '../Feature-section/FCard';

const features = [
    {
        title: 'Software experts with a business mindset',
        description: 'Technology decisions are an ongoing process. Our engineers take into account the cost effectiveness and business impact when taking care of your project.',
    },
    {
        title: 'Strategic Tech Advancement Expertise',
        description: 'Custom software must always be designed for a specific set of business needs. We have years of commercial experience with various technologies and can choose the right tech stack for your project.',
    },
    {
        title: 'Deliver High Quality Expandable Software',
        description: 'You get an efficient and scalable digital product. During our cooperation, we make sure the final solution is a maintainable and working software that brings real value.',
    },
];

const Features = () => {
    return (
        <div>
            <Container>
            <section className="why-choose-us-section">
                <Row>
                    {features.map((feature, index) => (
                        <Col key={index} md="6" lg="4" className="mb-4">
                            <FCard {...feature} />
                        </Col>
                    ))}
                </Row>

            </section>
        </Container>
        </div>

    );
};

export default Features;
