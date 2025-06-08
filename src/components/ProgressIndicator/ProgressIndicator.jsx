import './ProgressIndicator.css';
import { Check, MapPin, Calendar, CreditCard, FileText, Truck } from 'lucide-react';

const ProgressIndicator = () => {

    const steps = [
    { id: 'postcode', label: 'Postcode', icon: MapPin, completed: true },
    { id: 'waste-type', label: 'Waste Type', icon: FileText, completed: true },
    { id: 'select-skip', label: 'Select Skip', icon: Truck, active: true },
    { id: 'permit-check', label: 'Permit Check', icon: Check },
    { id: 'choose-date', label: 'Choose Date', icon: Calendar },
    { id: 'payment', label: 'Payment', icon: CreditCard }
  ];

    return (
        <div className="header">
        <div className="steps-container">
          <div className="steps">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step ${step.completed ? 'completed' : ''} ${step.active ? 'active' : ''}`}
              >
                <step.icon className="step-icon" />
                <span className="step-label">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ProgressIndicator;