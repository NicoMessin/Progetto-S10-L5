import { Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <div >
      <Container fluid className="d-flex justify-content-center my-3 mx-0">
        <Form className="d-flex" style={{  width: '100%', height: '100px' }}>
          <FormControl
            type="search"
            placeholder="Cerca..."
            className="me-2 "
            aria-label="Search"
          />
          <Button variant="outline-success">Cerca</Button>
        </Form>
      </Container>
    </div>
  );
}
export default SearchBar