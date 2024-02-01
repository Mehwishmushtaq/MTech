import React ,{useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from "../assets/images/tech-banner.gif";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Icon1 from '../assets/images/icon1.png';
// import Image1 from '../assets/images/service2.png'

const Portfolio = () => {

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
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>Portfolio</h1>
      </header>
      <div data-aos='fade-up' className='card-container'>
        {/* Row 1 */}
      <Row>
        {/* Card 1 */}
        <Col md={4}>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-front" >
                <div className="inner">
                  {/* <img src={Icon1} className="icon" alt="Web Icon" /> */}
                  <h3>Tyre Fitting Service</h3>
                  <h6>Design React Website</h6>
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
                  {/* <img src={Icon1} className="icon" alt="Web Icon" /> */}
                  <h3>Project Name</h3>
                  <h6>Subtitle</h6>
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
                  {/* <img src={Icon1} className="icon" alt="Web Icon" /> */}
                  <h3>Project Name</h3>
                  <h6>Subtitle</h6>
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

      {/* Row 2 */}
      <Row>
        {/* Card 1 */}
        <Col md={4}>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-front" >
                <div className="inner">
                  {/* <img src={Icon1} className="icon" alt="Web Icon" /> */}
                  <h3>Project Name</h3>
                  <h6>Subtitle</h6>
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
                  {/* <img src={Icon1} className="icon" alt="Web Icon" /> */}
                  <h3>Project Name</h3>
                  <h6>Subtitle</h6>
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
                  {/* <img src={Icon1} className="icon" alt="Web Icon" /> */}
                  <h3>Project Name</h3>
                  <h6>Subtitle</h6>
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
    </div>
  );
};

export default Portfolio;





// {
//   // style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover' }}
// }
