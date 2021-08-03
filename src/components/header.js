import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import search from '../images/search.svg';
import dot from '../images/dot.svg';

const Header = ({ searchData }) => {
  const handleSearch = (e) => {
    searchData(e.target.value);
  };
  return (
    <div style={{ backgroundColor: '#72E767' }}>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Brand href='#' style={{ color: 'white' }}>
            NY Times Most Popular
          </Navbar.Brand>

          <div>
            <Navbar.Collapse id='basic-navbar-nav' style={{ color: 'white' }}>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div>
            <img src={search} alt='' />
            <input
              placeholder='Search by publisher'
              type='text'
              onChange={handleSearch}
            />
          </div>
          <div style={{ color: 'white' }}>
            <img src={dot} alt='' />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
