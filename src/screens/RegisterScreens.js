// import React,{useState,useEffect} from 'react'
// import {Link,useSearchParams,useNavigate} from 'react-router-dom'
// import { Form,Button,Row,Col } from "react-bootstrap"
// import {useDispatch,useSelector} from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
// import {register} from '../actions/userActions'
// // import { useHistory } from 'react-router-dom'


// function RegisterScreens() {

//     const [name, setName] = useState('')
//     const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')
//     const [confirmPassword,setConfirmPassword] = useState('')
//     const [message,setMessage] = useState('')


//     const dispatch = useDispatch()

//     const navigate = useNavigate()
//     const [searchParams] = useSearchParams()
//     const redirect = searchParams.get('redirect')
    
//     console.log('re:',redirect)

//     const userRegister = useSelector(state => state.userRegister)
//     const {error,loading,userInfo} = userRegister

//     useEffect(() =>{
//         if(userInfo){
//             navigate('/login')
//         }
//     },[navigate, userInfo, redirect])

//     const submitHandler =(e) =>{
//         e.preventDefault()

//         if(password != confirmPassword){
//           setMessage('Password do not match!')
//         }else{
//           dispatch(register(name,email, password))
//         }
        
//     }

//   return (
   
//     <FormContainer>
//       <h1 className='text-center'>Sign Up</h1>
//       {message && <Message variant='danger'>{message}</Message>}
//       {error && <Message variant='danger'>{error}</Message>}
//       {loading && <Loader/>}
//       <Form onSubmit={submitHandler}>

//       <Form.Group controlId='name'>
//           <Form.Label className='my-3'>Name</Form.Label>
//           <Form.Control
//             required
//             type='name'
//             placeholder='Enter Name'
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//           >
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId='email'>
//           <Form.Label className='my-3'>Email Address</Form.Label>
//           <Form.Control
//             required
//             type='email'
//             placeholder='Enter Email'
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//           >
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId='password'>
//           <Form.Label className='my-3'>Password</Form.Label>
//           <Form.Control
//             required
//             type='password'
//             placeholder='Enter Password'
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//           >
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId='passwordConfirm'>
//           <Form.Label className='my-3'>Confirm Password</Form.Label>
//           <Form.Control
//             required
//             type='password'
//             placeholder='Confirm Password'
//             value={confirmPassword}
//             onChange={(e)=>setConfirmPassword(e.target.value)}
//           >
//           </Form.Control>
//         </Form.Group>

//         <center><Button type='submit' variant='primary' className='my-5'>
//           Sign Up
//         </Button></center>
//       </Form>
   
//       <center><Row className='py-3'>
//         <Col>
//           Have an Account? <Link 
//             to={redirect ? `/login?redirect=${redirect}` : '/login'}>
//             Sign In
//             </Link>
//         </Col>
//       </Row></center>

//     </FormContainer>

//   )
// }

// export default RegisterScreens
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';
import * as yup from 'yup';

function RegisterScreens() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo, redirect]);

  const validationSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required')
      .matches(/\.com$/, 'Email must contain .com'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate({
        name,
        email,
        password,
        confirmPassword,
      });

      if (password !== confirmPassword) {
        setMessage('Passwords do not match!');
      } else {
        dispatch(register(name, email, password));
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <FormContainer>
      <h1 className="text-center">Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className="my-3">Name</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="my-3">Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="my-3">Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="passwordConfirm">
          <Form.Label className="my-3">Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <center>
          <Button type="submit" variant="primary" className="my-5">
            Sign Up
          </Button>
        </center>
      </Form>

      <center>
        <Row className="py-3">
          <Col>
            Have an Account?{' '}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
            >
              Sign In
            </Link>
          </Col>
        </Row>
      </center>
    </FormContainer>
  );
}

export default RegisterScreens;