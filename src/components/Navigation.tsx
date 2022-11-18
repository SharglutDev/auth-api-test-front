import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Navigation() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Auth App</Navbar.Brand>
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/users" className="nav-link">
                Users
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/signin" className="nav-link">
                Signin
              </Link>
              <Link to="/login" className="nav-Link">
                <Logout />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
