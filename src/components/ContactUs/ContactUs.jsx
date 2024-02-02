import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Web5 from '../../assets/images/contactImg.jpg';
import Banner from "../../assets/images/tech-banner.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {

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

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		services: '',
		message: '',
	});
  
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
  
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/contact', formData);
			console.log(response.data);
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};
	return (
		<div>
			{/* Banner Section */}
			<header style={headerStyle}>
                <h1>Contact Us</h1>
            </header>

			{/* Title and Subtitle Section */}
			<section data-aos='fade-down-right'className="py-5 bg-light">
				<Container>
					<Row>
						<Col md={12} className="text-center">
							<h2>
								<span style={{ color: '#01a3a4' }}>Develop Your Ideas</span>
								<p className='text-center'>Grow with Confidence. MTechnologies Powers Your Project’s Journey to Success</p>
                            </h2>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Our Location and Email Address Section */}
			<section data-aos='flip-down' className="py-5 bg-light">
				<Container>
					<Row>
						{/* Location */}
						<Col md={4} className="mb-4 text-center">
							<div className="circle-icon">
								<FontAwesomeIcon icon={faMapMarkerAlt} size="3x" color='#01a3a4'/>
							</div>
							<h3>Our Location</h3>
							<p className='text-center'>123 Main Street, City, State, ZIP Code</p>
						</Col>
						{/* Phone Number */}
						<Col md={4} className="mb-4 text-center">
							<div className="circle-icon">
								<FontAwesomeIcon icon={faPhoneAlt} size="3x" color='#01a3a4' />
							</div>
							<h3>Phone Number</h3>
							<p className='text-center'>+92 12345678</p>
						</Col>

						{/* Email Address */}
						<Col md={4} className="mb-4 text-center">
							<div className="circle-icon">
								<FontAwesomeIcon icon={faEnvelope} size="3x" color='#01a3a4'/>
							</div>
							<h3>Email Address</h3>
							<p className='text-center'>Email: info@example.com</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Map Section */}
			<section data-aos='zoom-in' className="py-5">
				<Container>
					<Row>
						<Col md={12}>
							<div style={{ width: '100%', height: '300px', border: '1px solid #ddd' }}>
								<iframe
									title="Google Map"
									width="100%"
									height="100%"
									frameBorder="0"
									style={{ border: 0 }}
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-71.059773!3d42.360940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzU1LjEiTiA3McKwMjAnMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
									allowFullScreen
								></iframe>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Contact Form Section */}
			<section className="py-5">
				<Container>
					{/* Title Section */}
					<Row data-aos='fade-right' className="mb-4">
						<Col md={12} className="text-center">
							<h4 style={{ color: '#01a3a4' }}>The Best IT Solutions And Ideas</h4>
							<h3>Need a designer with a creative portfolio?</h3>
						</Col>
					</Row>
					<Row>
						{/* Left Side - Picture */}
						<Col md={6} data-aos='zoom-out-left' className="mb-4">
							<img
								src={Web5}
								alt="Sample"
								className="img-fluid"
							/>
						</Col>

						{/* Right Side - Form */}
						<Col md={6} data-aos='zoom-out-right'>
							<Form onSubmit={handleSubmit}>  
								<Form.Group controlId="formName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" className='mb-3' value={formData.name} onChange={handleChange}  placeholder="Enter your name" />
								</Form.Group>

								<Form.Group controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" className='mb-3'value={formData.email} onChange={handleChange}  placeholder="Enter your email" />
								</Form.Group>

								<Form.Group controlId="formPhone">
									<Form.Label>Phone</Form.Label>
									<Form.Control type="tel" className='mb-3' value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
								</Form.Group>

								<Form.Group controlId="formServices">
									<Form.Label>Services</Form.Label>
									<Form.Control as="select" className='mb-3' value={formData.services} onChange={handleChange}  defaultValue="Choose...">
										<option disabled>Choose...</option>
										<option>Service 1</option>
										<option>Service 2</option>
										<option>Service 3</option>
									</Form.Control>
								</Form.Group>

								<Form.Group controlId="formMessage">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" className='mb-3' value={formData.message} onChange={handleChange} rows={5} placeholder="Enter your message" />
								</Form.Group>

								<Button style={{ background: '#01a3a4', color: '#fff', borderRadius:'5px', fontWeight:'700', width:'100%', border:'none'}} type="submit" className='mt-4'>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default ContactForm;
