import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Header.css';

const Header = () => {
  const { user, signOUtUser } = useContext(UserContext)
  return (
    <Container>
      <Navbar className="pt-4 text-primary">
        <Navbar.Brand as={Link} to="/">
          <h1>Travel Trick</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="m-auto navBarSearchForm pl-5 pr-5">
            <FormControl type="text" placeholder="Search your Destination..." className='mr-sm-2 search-input' />
          </Form>
          <Nav className='ml-auto header-nav'>
            <Nav.Link as={Link} className="px-4" to="/news">News</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/contact">Contact</Nav.Link>
            {user ? (
              <>
                <Nav.Link className="px-4 font-weight-bold" >{user.name.split(' ')[0]}</Nav.Link>
                <Nav.Link className="px-4" onClick={signOUtUser} >Logout</Nav.Link>
              </>
            ) : (
                <Nav.Link as={Link} className="px-4" to="/login">Login</Nav.Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;