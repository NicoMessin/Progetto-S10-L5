
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveNavbar from './Components/Navbar';
import SearchBar from './Components/Footer';
import CityBlock from './Components/CityBlock';

function App() {
 

  return (
    <>
     <ResponsiveNavbar/> 

      <CityBlock cityName="Milano" />
      <CityBlock cityName="Roma" />
      <CityBlock cityName="Napoli" />
      <CityBlock cityName="Torino" />
      <CityBlock cityName="Venezia" />
      <CityBlock cityName="Genova" />
      <CityBlock cityName="Firenze" />
      <CityBlock cityName="Palermo" />
   
     
     
     <SearchBar/>
    </>
  )
}

export default App
