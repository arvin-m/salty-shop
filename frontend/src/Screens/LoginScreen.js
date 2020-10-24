import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../Components/FormContainer'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const dispacth = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    // Redirect user if they already logIN
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])



    const submitHandler = (e) => {
        e.preventDefault()
        dispacth(login(email, password))

    }


    return (

        <FormContainer>

            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='sub,it' variant='primary'>Sing In</Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>

        </FormContainer>
    )

}

export default LoginScreen