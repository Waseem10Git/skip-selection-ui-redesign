import './App.css';
import  { useState, useEffect } from 'react';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';
import Loading from './components/Loading/Loading';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import MainContent from './components/MainContent/MainContent';
import axios from 'axios';

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
    .then(response => {
      setApiData(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message || 'Something went wrong.');
      setLoading(false);
    });
}, []);

  // Transform API data to skip options
  const skipOptions = apiData.map(item => {
    const basePrice = item.price_before_vat;
    const vatAmount = basePrice * (item.vat / 100);
    const transportCost = item.transport_cost || 0;
    const perTonneCost = item.per_tonne_cost || 0;

    const totalPrice = Math.round(basePrice + vatAmount + transportCost + perTonneCost);

    const priceBreakdown = 
      `£${Math.round(basePrice)} + £${Math.round(vatAmount)} VAT` +
      (transportCost ? ` + £${transportCost} transport` : '') +
      (item.per_tonne_cost ? ` + £${item.per_tonne_cost}/tonne over 1t` : '');

    
    const getDescription = (size) => {
      if (size <= 4) return 'Perfect for small home projects and garden clearouts';
      if (size <= 6) return 'Ideal for medium renovations and house clearances';
      if (size <= 8) return 'Great for larger projects and construction waste';
      if (size <= 10) return 'Suitable for major renovations and commercial use';
      if (size <= 12) return 'Perfect for large-scale construction projects';
      if (size <= 16) return 'Ideal for industrial and commercial waste disposal';
      if (size <= 20) return 'Heavy-duty skip for major construction projects';
      return 'Extra large capacity for industrial waste management';
    };

    return {
      id: `${item.size}-yard`,
      apiId: item.id,
      name: `${item.size} Yard Skip`,
      capacity: `${item.size} Yards`,
      period: `${item.hire_period_days} day hire period`,
      price: `£${totalPrice}`,
      priceBreakdown: priceBreakdown,
      priceBeforeVat: item.price_before_vat,
      vat: item.vat,
      description: getDescription(item.size),
      allowedOnRoad: item.allowed_on_road,
      allowsHeavyWaste: item.allows_heavy_waste,
      transportCost: item.transport_cost,
      perTonneCost: item.per_tonne_cost,
      postcode: item.postcode
    };
  });

  return (
    <div className="container">
      <ProgressIndicator />
      
      {loading ? (
        <Loading />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <MainContent skipOptions={skipOptions} />
      )}
    </div>
  );
};

export default App;