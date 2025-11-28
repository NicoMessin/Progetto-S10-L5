
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveNavbar from './Components/Navbar';
import SearchBar from './Components/Footer';
import CityBlock from './Components/CityBlock';
import { useState } from 'react';


function App() {

  const [cities, setCities] = useState([
    
  ]);

  const handleAddCity = (cityName) => {
    if (!cities.includes(cityName)) {
      setCities([...cities, cityName]); 
    }
  };

  return (
    <>
      <ResponsiveNavbar />

      {cities.map((cityName) => (
        <CityBlock key={cityName} cityName={cityName} />
      ))}

      <SearchBar onValidCity={handleAddCity} />
    </>
  );
}

export default App;