import './SelectedSkip.css';
import { Truck } from 'lucide-react';

const SelectedSkip = ({skipOptions, selectedSkip}) => {
    
    return (
        <div className="selected-info">
            <div className="selected-skip-info">
              <Truck size={24} />
              <span>{skipOptions.find(s => s.id === selectedSkip)?.name} Selected</span>
            </div>
            <div className="selected-price">
              {skipOptions.find(s => s.id === selectedSkip)?.price}
            </div>
          </div>
    );
}

export default SelectedSkip;