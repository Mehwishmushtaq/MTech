// Design.jsx
import React from 'react';
import './Design.css';
import itServicesImage from '../../assets/images/design3.png';
import WebService from '../../assets/images/service1.png';
import WebService1 from '../../assets/images/service2.png';
import WebService2 from '../../assets/images/service3.png';


const DesignPage = () => {
  const bulletPoints = [
    'Website Design & Development',
    'Social Media Marketing',
    'Graphic Designing',
    'Search Engine Optimization',
    'Content Writing'
  ];

  return (
    <>
      <div className="design-container">
        <div className="text-container">
          <h1>Services</h1>
          <p>
            Great marketing starts with a solid concept and design execution. I help companies visualize
            and present their offerings to the right target audience, covering all steps needed to make
            that first sale happen.
          </p>
          <ul className="bullet-list">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <img src={itServicesImage} alt="IT Services" className="design1" />
      </div>

      {/* New section with title, paragraph, and image grid */}
      <div className="additional-section">
        <h2>Website Design & Development</h2>
        <p>
          Discover our expert website design and development services. We transform your vision into a stunning, user-friendly website that enhances your online presence. Our team combines cutting-edge technology with creative design, ensuring a seamless user experience. From e-commerce platforms to corporate websites, we deliver tailored solutions that drive growth and success. Join us on your journey to a captivating digital presence.
        </p>
        <div className="image-grid">
          <a href="https://mehwishmushtaq.github.io/live/">
            <img src={WebService} alt="web1" />
          </a>

          {/* <img src={WebService} alt="web1" /> */}
          <img src={WebService1} alt="web2" />
          <img src={WebService2} alt="web3" />

        </div>
      </div>
    </>
  );
};

export default DesignPage;
