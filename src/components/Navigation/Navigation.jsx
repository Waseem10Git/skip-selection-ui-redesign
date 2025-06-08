import './Navigation.css';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Navigation = ({ selectedSkip }) => {
    return (
        <div className="navigation">
          <button className="nav-button back-button">
            <ArrowLeft size={20} />
            Back
          </button>
          <button className={`nav-button continue-button ${selectedSkip ? '' : 'disable-continue' }`}>
            Continue
            <ArrowRight size={20} />
          </button>
        </div>
    );
};

export default Navigation;