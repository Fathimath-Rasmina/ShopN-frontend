import React,{useState,useEffect} from 'react'
import {Link,useSearchParams,useNavigate} from 'react-router-dom'
import { Form,Button,Row,Col } from "react-bootstrap"
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import {login} from '../actions/userActions'



function LoginScreen() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const redirect = searchParams.get('redirect')
  // console.log('re:',redirect)

  const userLogin = useSelector(state => state.userLogin)
  const {error,loading,userInfo} = userLogin

  useEffect(() =>{
    if(userInfo){
      navigate('/')
    }
  },[navigate, userInfo, redirect])

  const submitHandler =(e) =>{
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1 className='text-center'>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='email'>
          <Form.Label className='my-3'>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label className='my-3'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <center><Button type='submit' variant='primary' className='my-5'>
          Sign In
        </Button></center>
      </Form>

      <center><Row className='py-3'>
        <Col>
          New Customer? <Link
            to={redirect? `/register?redirect=${redirect}` : '/register'}>
            Register
            </Link>
        </Col>
      </Row></center>

    </FormContainer>
  )
}

export default LoginScreen