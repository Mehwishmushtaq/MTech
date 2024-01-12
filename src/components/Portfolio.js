import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Icon1 from '../assets/images/icon1.png';
// import Image1 from '../assets/images/service2.png'

const Portfolio = () => {
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
        <h1>Portfolio</h1>
      </header>

      <Row>
        {/* Card 1 */}
        <Col md={4}>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-front" >
                <div className="inner">
                  <img src={Icon1} className="icon" alt="Web Icon" />
                  <h3>Tyre Fitting Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis,
                    sit amet sunt neque ipsum?
                  </p>
                  <a href="https://mehwishmushtaq.github.io/tyre-service/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} style={{ fontSize: '2rem', color: 'white' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Card 2 */}
        <Col md={4}>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src={Icon1} className="icon" alt="Web Icon" />
                  <h3>Tyre Fitting Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis,
                    sit amet sunt neque ipsum?
                  </p>
                  <a href="https://mehwishmushtaq.github.io/tyre-service/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} style={{ fontSize: '2rem', color: 'white' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Card 3 */}
        <Col md={4}>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src={Icon1} className="icon" alt="Web Icon" />
                  <h3>Tyre Fitting Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis,
                    sit amet sunt neque ipsum?
                  </p>
                  <a href="https://mehwishmushtaq.github.io/tyre-service/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} style={{ fontSize: '2rem', color: 'white' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;





// {
//   // style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover' }}
// }
