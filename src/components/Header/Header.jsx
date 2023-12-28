import React from 'react';
import { Container, Nav, Navbar, Row, Col, NavDropdown } from 'react-bootstrap';
import { DropDownMenu } from '../DropDownMenu'
import { DropDownSubMenu } from '../DropdownSubMenu'
import '../../../src/App.css'
import './header.css'

const Header = () => (
  <>
    <Navbar className='custom-nav' expand="lg" variant="dark">
      <Container className='navbar-menu'>
        <Navbar.Brand href=""><i class="ri-edge-new-fill"></i> M Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <DropDownMenu title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/web-development">Web Development</NavDropdown.Item>
        
              <DropDownSubMenu href="/design" title="Design">
                <NavDropdown.Item href="#action/8.1">Html</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">CSS</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="Development">
                  <NavDropdown.Item href="#action/9.1">Javascript</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.2">Jquery</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownSubMenu>
            </DropDownMenu>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/whyChooseUs">Why Choose us</Nav.Link>
            <Nav.Link href="#home">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            {/* <DropDownMenu title="Product" id="collasible-nav-dropdown" alignRight>
              <DropDownSubMenu href="#action/3.7" title="Language">
                <NavDropdown.Item href="#action/8.1">React</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">Anguler</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.3">Ionic</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="backend">
                  <NavDropdown.Item href="#action/9.1">Nodejs</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">PHP</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">JAVA</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownSubMenu>
            </DropDownMenu> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  </>
);

export default Header;
