import React, {useEffect, useState} from "react";
import {ModalWrapper} from './styled';
import {Button, Modal, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {data} from '../../data';
import {setEmail, setPassword, isAuthMethod, isAdminMethod} from "../../store/auth/actions";


const Auth = (props) => {
    const {show, setEmail, setPassword, email, password, setShow, isAdminMethod, isAuthMethod} = props;

    const [error, setError] = useState(false);

    const changeEmail = e => {
        setEmail(e.target.value)
    };

    const handleClose = () => setShow(false);

    const changePassword = e => {
        setPassword(e.target.value)
    };

    useEffect(() => {
        if(localStorage.getItem("user") === 'user'){
            isAuthMethod(true);
            isAdminMethod(false)
        }else if(localStorage.getItem("user") === 'admin'){
            isAuthMethod(true);
            isAdminMethod(true)
        }
        // eslint-disable-next-line
    },[]);

    const loginHandler = () => {

            if(data[0].email === email && data[0].password === password && data[0].role === 10) {
                isAdminMethod(true);
                isAuthMethod(true);
                setShow(false);
                localStorage.setItem('user', JSON.stringify({role: "admin", name: data[0].name}))
            } else if(data[1].email === email && data[1].password === password && data[1].role === 11) {
                isAuthMethod(true);
                setShow(false);
                localStorage.setItem('user', JSON.stringify({role: "user", name:data[1].name}));
            } else {
                setShow(true);
                setError(true)
            }

        setEmail('');
        setPassword('');
    };


    return (
        <ModalWrapper>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Authentication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {
                            error ? <p style={{color: 'red'}}>Wrong Login or Password</p> : ''
                        }
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name={'email'}
                                value={email}
                                onChange={changeEmail}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name={'password'}
                                value={password}
                                onChange={changePassword}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={loginHandler}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </ModalWrapper>
    )
};

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
    isAuth: state.auth.isAuth,
    isAdmin: state.auth.isAdmin,
});



const mapDispatchToProps = {
    setEmail,
    setPassword,
    isAdminMethod,
    isAuthMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);