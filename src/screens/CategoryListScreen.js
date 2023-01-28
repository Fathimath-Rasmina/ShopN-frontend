import React,{useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { Table,Button, Row, Col} from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
// import { listUsers, deleteUser } from '../actions/userActions'
import { deleteCategory, createCategory,listCategoryProducts } from '../actions/productActions'
import { CATEGORY_CREATE_RESET } from '../constants/productConstants'
// import Paginate from '../components/Paginate'
import { useLocation} from 'react-router-dom'
import Sidebar from '../components/Sidebar'



function CategoryListScreen() {

    const navigate = useNavigate()
    const {id} = useParams()

    const dispatch = useDispatch()

    const productCategory = useSelector(state => state.productCategory)
    const {loading, error, category } = productCategory

    const categoryDelete = useSelector(state => state.categoryDelete)
    const {loading:loadingDelete, error:errorDelete, success:successDelete } =categoryDelete

    const categoryCreate = useSelector(state => state.categoryCreate)
    const {loading:loadingCreate, error:errorCreate,success:successCreate, category:createdCategory } =categoryCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } =userLogin


    const location =useLocation()
    const keyword = location.search
    

    useEffect(() => {
        dispatch({type:CATEGORY_CREATE_RESET})

        if(!userInfo.isAdmin){
            navigate('/login')
        }
        if(successCreate){
            navigate(`/admin/category/${createdCategory.id}/edit`)
        }else{
            dispatch(listCategoryProducts(keyword))
        }
            
        
    },[dispatch ,navigate,userInfo,successDelete,createdCategory,successCreate,keyword])


    const deleteHandler = (id) =>{

        if(window.confirm('Are you sure you want to delete this product?')){
            dispatch(deleteCategory(id))
        }

        
    }

    const createCategoryHandler = () =>{
        //createProduct
        dispatch(createCategory())
    }

  return (
    <div>
       <Row>
            <Col md={3} sm={12} className='mb-2'>
                <Sidebar/>
            </Col>

            <Col md={9} sm={12}>
            <Row className='align-items-center'>
            <Col>
                <h1>Categories</h1>
            </Col>
            <Col className='text-right'>
                <Button className='my-3' onClick={createCategoryHandler}>
                   <i className='fas fa-plus'></i> Create Category
                </Button>
            </Col>
            </Row>

            {loadingDelete && <Loader/>}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            
            {loadingCreate && <Loader/>}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

                {loading 
                ? (<Loader/>)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th></th>
                                </tr>

                            </thead>

                            <tbody>
                                {category.map(cat => (
                                    <tr key={cat.id}>
                                        <td>{cat.id}</td>
                                        <td>{cat.category_name}</td>
                                        <td>{cat.description}</td>
                                        

                                        <td>
                                            <LinkContainer to={`/admin/category/${cat.id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>

                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(cat.id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        {/* <Paginate pages={pages} page={page} isAdmin={true}/> */}
                        </div>
                    )}

            </Col>

       </Row>
        
    
    </div>
  )
}

export default CategoryListScreen