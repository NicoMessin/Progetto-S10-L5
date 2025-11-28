import { useState } from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "711e8d9b8520830c3819d3f0de2b91a6";

function SearchBar({ onValidCity }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm.trim()},IT&units=metric&appid=${API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore')
        }
      })
      .then((data) => {
        if (data.cod === 200) {
          onValidCity(data.name); 
          setError("");
        } else {
          setError("Città italiana non trovata!");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Errore nella ricerca della città");
      });

    setSearchTerm(""); 
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center my-3 mx-0">
      <Form className="d-flex w-100" style={{ height: "50px", maxWidth: "500px" }} onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Cerca città italiana da aggiungere..."
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary" type="submit">Cerca</Button>
      </Form>
      {error && <div style={{ color: "red", marginTop: "5px" }}>{error}</div>}
    </Container>
  );
}

export default SearchBar;