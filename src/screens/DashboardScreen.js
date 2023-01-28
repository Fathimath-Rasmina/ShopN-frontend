import React from 'react'
import { Row,Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function DashboardScreen() {

    const userDetails = useSelector(state => state.userDetails)
    const {user} = userDetails
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

  return (
    <div>
        <Row>
            <Col md={3} sm={12} className='mb-2'>
                <Sidebar/>
            </Col>

            <Col md={9} sm={12} className='mb-2'>
                    <Row>
                        <Col md={12} className='mb-2'>
                            <Card>
                                <Card.Body className='text-center'>
                                    <h5>{userInfo.name}</h5>
                                    <h5>{userInfo.email}</h5>
                                    <h6><Link to='/profile'>Admin Profile</Link></h6>
                                </Card.Body>
                            </Card>
                        </Col>

                        
                    </Row>
            </Col>
        </Row>
    </div>
  )
}

export default DashboardScreen