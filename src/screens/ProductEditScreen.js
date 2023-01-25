import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useParams,useNavigate} from 'react-router-dom'
import { Form,Button } from "react-bootstrap"
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listProductDetails,updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'



function ProductEditScreen() {

    const {id} = useParams()
 
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    // const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading,setUploading] =useState(false)


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const productDetails = useSelector(state => state.productDetails)
    const {error,loading,product} = productDetails

    
    const productUpdate = useSelector(state => state.productUpdate)
    const {error:errorUpdate,loading:loadingUpdate,success:successUpdate} = productUpdate

    useEffect(() =>{

        if(successUpdate){
            dispatch({type:PRODUCT_UPDATE_RESET})
            navigate('/admin/productlist')
        }else{

            if(!product.name || product._id !== Number(id) ){
                dispatch(listProductDetails(id))
               }else{
                setName(product.name)
                setPrice(product.price)
                setBrand(product.brand)
                // setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)

               
             }
        }
            
       
    },[product, id, navigate, dispatch,successUpdate])

    const submitHandler =(e) =>{
        e.preventDefault()
        dispatch(updateProduct({
            _id:id,
            name,
            price,
            image,
            brand,
            // category,
            countInStock,
            description
        }))
    }

    
    const uploadFileHandler = async (e) =>{
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', id)

        setUploading(true)

        try{
            const config = {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }
            const {data} = await axios.post('/api/products/upload/',formData,config)
            setImage(data)
            setUploading(false)

        }catch(error){
            setUploading(false)
        }
    } 

  return (
    <div>
        <Link to='/admin/productlist'>
            Go Back
        </Link>

        <FormContainer>
        <h1 className='text-center'>Edit Product</h1>
        
        {loadingUpdate && <Loader/>}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

        {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> 
        : (

            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                <Form.Label className='my-3'>Name</Form.Label>
                <Form.Control
                    type='name'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                >
                </Form.Control>
                </Form.Group>

                <Form.Group controlId='price'>
                <Form.Label className='my-3'>Price</Form.Label>
                <Form.Control
                    type='number'
                    placeholder='Enter Price'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                >
                </Form.Control>
                </Form.Group>

                <Form.Group controlId='image'>
                <Form.Label className='my-3'>Image</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Image'
                    value={product.image}
                    onChange={(e)=>setImage(e.target.value)}
                >
                </Form.Control>

                <Form.Control 
                    type='file'
                    label='choose file'
                    onChange={uploadFileHandler}>

                </Form.Control>
                {uploading && <Loader/>}
                

                </Form.Group>

                <Form.Group controlId='barnd'>
                <Form.Label className='my-3'>Brand</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Brand'
                    value={brand}
                    onChange={(e)=>setBrand(e.target.value)}
                >
                </Form.Control>
                </Form.Group>

                <Form.Group controlId='countinstock'>
                <Form.Label className='my-3'>Stock</Form.Label>
                <Form.Control
                    type='number'
                    placeholder='Enter Stock'
                    value={countInStock}
                    onChange={(e)=>setCountInStock(e.target.value)}
                >
                </Form.Control>
                </Form.Group>
{/* 
                <Form.Group controlId='category'>
                <Form.Label className='my-3'>Category</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Category'
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                >
                </Form.Control>
                </Form.Group> */}

                <Form.Group controlId='description'>
                <Form.Label className='my-3'>Description</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Description'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                >
                </Form.Control>
                </Form.Group>
                


                <center><Button type='submit' variant='primary' className='my-5'>
                    Update
                </Button></center>
            </Form>

        )}
        

        </FormContainer>
    </div>

  )
}

export default ProductEditScreen