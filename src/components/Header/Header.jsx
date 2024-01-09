import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { DropDownMenu } from '../DropDownMenu'
import { DropDownSubMenu } from '../DropdownSubMenu'
import '../../../src/App.css'
import './header.css'

const Header = () => (
  <>
    <Navbar className='custom-nav' expand="lg" variant="dark">
      <Container className='navbar-menu'>
        <Navbar.Brand href="/web-development"><i class="ri-edge-new-fill"></i> M Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <DropDownMenu className='service-menu' title="Services" id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="/web-development">Web Development</NavDropdown.Item> */}
              <DropDownSubMenu className='sub-menu' href="/web-development" title="Web Development">
                <NavDropdown.Item href="/html-services">Html</NavDropdown.Item>
                <NavDropdown.Item href="/wordpress-service">WordPress</NavDropdown.Item>
                <NavDropdown.Item href="/laravel-service">Laravel</NavDropdown.Item>
                <NavDropdown.Item href="/react-service">React</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="Development">
                  <NavDropdown.Item href="#action/9.1">Javascript</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.2">Jquery</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownSubMenu>
              {/* Content Service Submenu */}
              <DropDownSubMenu href="/content-writing" title="Content Writing">
                <NavDropdown.Item href="/website-content">Website Content</NavDropdown.Item>
                <NavDropdown.Item href="/social-media-content">Social Media Content</NavDropdown.Item>
                <NavDropdown.Item href="/ecommerce-content">Ecommerce Content</NavDropdown.Item>
              </DropDownSubMenu>
              {/*  Service Submenu */}
              <DropDownSubMenu href="/content-writing" title="Digital Marketing">
                <NavDropdown.Item href="/social-media-marketing">Social Media Marketing</NavDropdown.Item>
                <NavDropdown.Item href="/search-engine-optimization">Search Engine Optimization (SEO)</NavDropdown.Item>
                <NavDropdown.Item href="/email-marketing">Email Marketing</NavDropdown.Item>
              </DropDownSubMenu>
              <NavDropdown.Item href="/graphics-designing">Graphics Designing</NavDropdown.Item>

            </DropDownMenu>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/whyChooseUs">Why Choose us</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
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
  </>
);

export default Header;
