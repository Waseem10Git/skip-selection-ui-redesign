import './MainContent.css';
import { useState } from 'react';
import SkipCard from '../SkipCard/SkipCard';
import Navigation from '../Navigation/Navigation';
import SelectedSkip from '../SelectedSkip/SelectedSkip';

const MainContent = ({ skipOptions}) => {
    const [selectedSkip, setSelectedSkip] = useState(null);

    const handleSelect = (id) => {
      setSelectedSkip(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="main-content">
            <div className="content-header">
            <h1 className="content-title">Choose Your Perfect Skip</h1>
            <p className="content-subtitle">Select the skip size that best suits your project needs</p>
            </div>

            {selectedSkip && (
              <SelectedSkip selectedSkip={selectedSkip} skipOptions={skipOptions} />
            )}

            <div className="skips-grid">
              {skipOptions.map((skip) => (
                <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip === skip.id}
                onSelect={handleSelect}
                />
              ))}
            </div>

            <Navigation selectedSkip={selectedSkip} />
        </div>
    )
}

export default MainContent;