import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faCheckCircle, faExpand, faSmile, faLightbulb, faShieldAlt} from '@fortawesome/free-solid-svg-icons';

const getIconByTitle = (title) => {
  switch (title.toLowerCase()) {
    case 'advanced technology':
      return faCogs;
    case 'expert team':
      return faUsers;
      case 'quality assurance':
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
    <div className="feature-card">
      <div className="icon mb-3" style={{color: '#30336b'}}>
        <FontAwesomeIcon icon={icon} size="3x" />
      </div>
      <div className="content">
        <h4 className="mb-2">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
