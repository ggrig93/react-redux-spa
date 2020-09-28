import React, {useState} from "react";
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {isAuthMethod} from '../../store/auth/actions';
import {connect} from 'react-redux';
import {NavWrapper} from './styled'
import Auth from "../auth";

const NavBar = ({isAdmin, isAuth, isAuthMethod}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleLogOut = () => {
        isAuthMethod(false);
        localStorage.removeItem("user")
    };


    if(isAuth){
        if(isAdmin){
            return (
                <NavWrapper>
                    <Navbar bg="dark" expand="lg">
                        <Link to="/">News BBC</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/">Home</Link>
                                <Link to="/admin">Admin</Link>
                                <Button variant="primary" onClick={handleLogOut}>
                                    LogOut
                                </Button>
                                <Auth
                                    show={show}
                                    setShow={setShow}
                                />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </NavWrapper>
            )
        }
        return (
            <NavWrapper>
                <Navbar bg="dark" expand="lg">
                    <Link to="/">News BBC</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                            <Link to="/add">Add</Link>
                            <Link to="/profile">Profile</Link>
                            <Button variant="primary" onClick={handleLogOut}>
                                LogOut
                            </Button>
                            <Auth
                                show={show}
                                setShow={setShow}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </NavWrapper>
        )

    }

    return (
        <NavWrapper>
            <Navbar bg="dark" expand="lg">
                <Link to="/">News BBC</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                            <Link to="/news">News</Link>
                            <Button variant="primary" onClick={handleShow}>
                                Login
                            </Button>
                            <Auth
                                show={show}
                                setShow={setShow}
                            />
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavWrapper>
    )
};

const mapsDispatchToProps = {
    isAuthMethod
};

export default connect("",mapsDispatchToProps)(NavBar)