import React, { useState } from 'react';
import './ContactUs.css';
// import Banner from '../../assests/images/banner.jpg'

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	// const handlePhoneCall = () => {
	// 	window.location.href = 'tel:+44 7916 312844'; // Replace with your phone number.
	// };
	const handlePhoneCall = () => {
		const phoneNumber = '+44 7916 312844'; // Replace with your phone number.
		
		const link = document.createElement('a');
		link.href = `tel:${phoneNumber}`;
		
		document.body.appendChild(link);
		link.click();
		
		document.body.removeChild(link);
	};

	// const handleWhatsApp = () => {
	// 	window.open('https://wa.me/+923234651741'); // Replace with your WhatsApp number.
	// };
	const handleWhatsApp = () => {
		const whatsappNumber = '+923234651741'; // Replace with your WhatsApp number.
		
		const link = document.createElement('a');
		link.href = `https://wa.me/${whatsappNumber}`;
		
		document.body.appendChild(link);
		link.click();
		
		document.body.removeChild(link);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Replace this with your actual form submission logic, like sending the data to an API.
		console.log('Form data submitted:', formData);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div>
			{/* <div className="banner">
				<img src={Banner} alt="banner" />
			</div> */}
			<div className="contact-us-container">
				<h1>Contact Us</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							rows="4"
							required
						></textarea>
					</div>
					<button type="submit" className="submit-button">
						Submit
					</button>
				</form>
				<button className="contact-button phone-button" onClick={handlePhoneCall}>
					Call Us
				</button>
				<button className="contact-button whatsapp-button" onClick={handleWhatsApp}>
					WhatsApp Us
				</button>
			</div>
		</div>

	);
};

export default ContactUs;
