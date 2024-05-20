import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userAction';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo}= userLogin;

  const handleLogout = () =>{
    dispatch(logout());
    navigate('/');
  }
  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
    <Container>
      <Navbar.Brand>
        <Link to='/'>Note Zipper</Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          
          </Form>
        </Nav>
        <Nav className="me-auto">
          
            
            <Link to='/mynotes'>My Notes</Link>
          <NavDropdown title="Harsh Yadav" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{handleLogout()}}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
