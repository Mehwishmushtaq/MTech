import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faBriefcase, faUsers, faCheckCircle, faExpand, faSmile, faLightbulb, faShieldAlt} from '@fortawesome/free-solid-svg-icons';

const getIconByTitle = (title) => {
  switch (title.toLowerCase()) {
    case 'software experts with a business mindset':
      return faBriefcase;
    case 'strategic tech advancement expertise':
      return faUsers;
      case 'deliver high quality expandable software':
        return faCheckCircle;
      case 'scalable solutions':
        return faExpand;
      case 'customer satisfaction':
        return faSmile;
      case 'innovation focus':
        return faLightbulb;
      case 'security measures':
        return faShieldAlt;
      default:
        return faCogs;
    
  }
};

const FeatureCard = ({ title, description }) => {
  const icon = getIconByTitle(title);

  return (
    <div className="feature-card text-center">
      <div className="icon mb-3" style={{color: '#f36b6b'}}>
        <FontAwesomeIcon icon={icon} size="3x" />
      </div>
      <div className="content">
        <h5 className="mb-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
