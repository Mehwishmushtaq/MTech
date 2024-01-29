import React  from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FaCogs, FaBriefcase} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import FCard from '../Feature-section/FCard';
import { useEffect } from 'react';

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
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          offset: 200,
        });
      }, []);
    return (
        <div data-aos='fade-left' className="container feature">

            <Row>
                <Col className='mt-1 text-end '>
                    <h5>Requirement Analysis</h5>
                    <p className='text-end'>All possible system requirements to be developed are captured in this phase.</p>
                </Col>

                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle  p-3" style={{ backgroundColor: '#01a3a4' }}>
                        <FaCogs size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>
 
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle  p-3" style={{marginLeft:'-180px', backgroundColor: '#01a3a4'}}>
                        <FaBriefcase size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>

                <Col md={4} className='mt-1'style={{marginLeft:'-90px'}}>
                    <h5>Planning</h5>
                    <p>Getting the requirements the planning procedure takes place.</p>
                </Col>
            </Row>

            {/* Second Row */}
            <Row>
                <Col className='text-end mt-2'>
                    <h5>System Design</h5>
                    <p className='text-end'>The requirement specifications phase is studied, and the system design is prepared.</p>
                </Col>

                <Col md={2} className="d-flex justify-content-center align-items-center mb-2">
                    <div className="rounded-circle  p-3" style={{ backgroundColor: '#01a3a4' }}>
                        <FaCogs size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>
 
                <Col md={2} className="d-flex justify-content-center align-items-center mb-2">
                    <div className="rounded-circle  p-3" style={{marginLeft:'-180px', backgroundColor: '#01a3a4'}}>
                        <FaBriefcase size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>

                <Col md={4} className='mt-2' style={{marginLeft:'-90px'}}>
                    <h5>Implementation</h5>
                    <p>The system is first developed in small programs called units, which are integrated into.</p>
                </Col>
            </Row>
            {/* Third Row */}
            <Row>
                <Col className='text-end mt-2'>
                    <h5>Beta Testing</h5>
                    <p className='text-end'>The units developed in the implementation phase are integrated into a system after testing each unit.</p>
                </Col>

                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle  p-3" style={{ backgroundColor: '#01a3a4' }}>
                        <FaCogs size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>
 
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle  p-3" style={{marginLeft:'-180px', backgroundColor: '#01a3a4'}}>
                        <FaBriefcase size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>

                <Col md={4} className='mt-2' style={{marginLeft:'-90px'}}>
                    <h5>Alpha Testing</h5>
                    <p>Post integration the entire system is tested for any faults and failures.</p>
                </Col>
            </Row>
            {/* Fourth Row           */}
            <Row>
                <Col className='text-end mt-2'>
                    <h5>Deployment</h5>
                    <p className='text-end'>Once the functional and non-functional testing is done; the product is deployed.</p>
                </Col>

                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle  p-3" style={{ backgroundColor: '#01a3a4' }}>
                        <FaCogs size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>
 
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle  p-3" style={{marginLeft:'-180px', backgroundColor: '#01a3a4'}}>
                        <FaBriefcase size={25} style={{ color: '#fff' }} />
                    </div>
                </Col>

                <Col md={4} className='mt-2' style={{marginLeft:'-90px'}}>
                    <h5>Maintenance</h5>
                    <p>Maintenance is done to deliver the changes in the customer environment.</p>
                </Col>
            </Row>

            <div>
            <Container>
            <section className="feature-section">
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
        </div>


        

    );
};

export default Features;
