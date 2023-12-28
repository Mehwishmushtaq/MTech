import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Web5 from '../../assets/images/web5.svg'


const ContactForm = () => {
	return (
		<div>
			{/* Banner Section */}
			<section className="banner-section py-5 text-center text-white" style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<Container>
					<h1>Contact Us</h1>
				</Container>
			</section>

			{/* Title and Subtitle Section */}
			<section className="py-5 bg-light">
				<Container>
					<Row>
						<Col md={12} className="text-center">
							<h2>
								<span style={{ color: '#ff6b6b' }}>Develop Your Ideas</span>
								<p>Grow with Confidence. MTechnologies Powers Your Project’s Journey to Success</p>
                            </h2>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Our Location and Email Address Section */}
			<section className="py-5 bg-light">
				<Container>
					<Row>
						{/* Location */}
						<Col md={6} className="mb-4 text-center">
							<div className="circle-icon">
								<FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
							</div>
							<h3>Our Location</h3>
							<p>123 Main Street, City, State, ZIP Code</p>
						</Col>

						{/* Email Address */}
						<Col md={6} className="mb-4 text-center">
							<div className="circle-icon">
								<FontAwesomeIcon icon={faEnvelope} size="3x" />
							</div>
							<h3>Email Address</h3>
							<p>Email: info@example.com</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Map Section */}
			<section className="py-5">
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
					<Row className="mb-4">
						<Col md={12} className="text-center">
							<h4 style={{ color: '#ff6b6b' }}>The Best IT Solutions And Ideas</h4>
							<h3>Need a designer with a creative portfolio?</h3>
						</Col>
					</Row>
					<Row>
						{/* Left Side - Picture */}
						<Col md={6} className="mb-4">
							<img
								src={Web5}
								alt="Sample"
								className="img-fluid"
							/>
						</Col>

						{/* Right Side - Form */}
						<Col md={6}>
							<Form>
								<Form.Group controlId="formName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" className='mb-3' placeholder="Enter your name" />
								</Form.Group>

								<Form.Group controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" className='mb-3' placeholder="Enter your email" />
								</Form.Group>

								<Form.Group controlId="formPhone">
									<Form.Label>Phone</Form.Label>
									<Form.Control type="tel" className='mb-3' placeholder="Enter your phone number" />
								</Form.Group>

								<Form.Group controlId="formServices">
									<Form.Label>Services</Form.Label>
									<Form.Control as="select" className='mb-3' defaultValue="Choose...">
										<option disabled>Choose...</option>
										<option>Service 1</option>
										<option>Service 2</option>
										<option>Service 3</option>
									</Form.Control>
								</Form.Group>

								<Form.Group controlId="formMessage">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" className='mb-3' rows={5} placeholder="Enter your message" />
								</Form.Group>

								<Button variant="secondary" type="submit" className='mt-4'>
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
