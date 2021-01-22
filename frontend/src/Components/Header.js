import React from 'react';
import {Route} from 'react-router-dom'
import{LinkContainer} from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../actions/userActions'
import SearchBox from './SearchBox'


const Header = () => {

    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin
    const dispatch=useDispatch()

    const logoutHandler=()=>{
        dispatch(logout())
    }


    return (
        <header>
            <Navbar bg="primary" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Salty Shop</Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* We are not have access to the props.history directly so we use Route to have access to th ehistory and pass it to the SearchBox component  */}
                    <Route render={ ({history}) => <SearchBox history={history}/> }/>
                    <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                    </LinkContainer>
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>

                        </NavDropdown>
                    ):(
                    <LinkContainer to='/login'>
                        <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                    </LinkContainer>
                    )}
                    {userInfo && userInfo.isAdmin && (
                         <NavDropdown title='Admin' id='adminmenu'>
                         <LinkContainer to='/admin/userlist'>
                             <NavDropdown.Item>Users</NavDropdown.Item>
                         </LinkContainer>
                         <LinkContainer to='/admin/productlist'>
                             <NavDropdown.Item>Products</NavDropdown.Item>
                         </LinkContainer>
                         <LinkContainer to='/admin/orderlist'>
                             <NavDropdown.Item>Orders</NavDropdown.Item>
                         </LinkContainer>
                     </NavDropdown>

                    )}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
