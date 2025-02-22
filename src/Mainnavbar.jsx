import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Mainnavbar() {
  return (
    <Navbar  expand="lg" className="navBar"> 
      <Container fluid>
        <Navbar.Brand href="#">BurGer<span className='spanText'>LAB</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ color: 'white' }} href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Terms & Condition</Nav.Link>
            <Nav.Link href="#action2">Careers</Nav.Link>
            <NavDropdown 
            title={
              <>
                Branches <span className="spanText">Location</span>
              </>
            }
          >
              <NavDropdown.Item href="#action5">
              London
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Manchester
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Aberdeen 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Mainnavbar;