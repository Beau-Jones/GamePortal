import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark" fixed="top" style={{ border: '1px solid rgba(13, 110, 253, 1)' }}>
      <Container>
        <Navbar.Brand href="#home">GamePortal</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Placeholder for LoginButton
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;