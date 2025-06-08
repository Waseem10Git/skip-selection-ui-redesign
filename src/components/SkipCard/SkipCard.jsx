import './SkipCard.css';
import { Check} from 'lucide-react';

const SkipCard = ({ skip, isSelected, onSelect }) => { 
    
    return(
    <div 
      className={`skip-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(isSelected ? null : skip.id)}
    >
      <div className="skip-card-header">
        <div className={`capacity-badge ${isSelected ? 'selected' : ''}`}>
          {skip.capacity}
        </div>
        {isSelected && (
          <div className="selected-indicator">
            <Check size={18} />
          </div>
        )}
      </div>

      <div className="features-badges">
        {skip.allowedOnRoad && (
          <div className="feature-badge road-allowed">
            <span>✓</span> Road Placement
          </div>
        )}
        {skip.allowsHeavyWaste && (
          <div className="feature-badge heavy-waste">
            <span>✓</span> Heavy Waste
          </div>
        )}
        {skip.transportCost && (
          <div className="feature-badge transport">
            <span>+</span> Transport Included
          </div>
        )}
      </div>
      
      <div className="skip-image">
        <div className="skip-container">
          <div className="skip-body"></div>
          <div className="skip-logo">WW</div>
        </div>
      </div>

      <div className="skip-details">
        <h3 className="skip-name">{skip.name}</h3>
        <p className="skip-period">{skip.period}</p>
        <p className="skip-description">{skip.description}</p>
        {skip.transportCost && (
          <p className="transport-info">
            Includes transport & per-tonne charges
          </p>
        )}
        <div className="price-container">
          <div className="skip-price">{skip.price}</div>
          <div className="price-details">({skip.priceBreakdown})</div>
        </div>
      </div>
    </div>
  )};

  export default SkipCard;