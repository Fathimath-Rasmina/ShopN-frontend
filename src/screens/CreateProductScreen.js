import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form,Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import { createProduct, listCategoryProducts} from '../actions/productActions'
import { LinkContainer } from 'react-router-bootstrap'

function CreateProductScreen() {

  const [image, setImage] = useState("null")
  const [name, setName] = useState('')
  const [price,setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [countInStock, setCountInStock] = useState('')
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [uploading,setUploading] =useState(false)

  const productCategory = useSelector(state => state.productCategory)
  const { category:categories } = productCategory

  const productCreate = useSelector(state => state.productCreate)
  const { success } = productCategory
  console.log('cat:',categories)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location =useLocation()
  const keyword = location.search

  useEffect(() =>{
    dispatch(listCategoryProducts(keyword))
    
},[keyword,dispatch])



  const submitHandler = async () =>{
    let formField = new FormData()

    formField.append('name',name)
    formField.append('price',price)
    formField.append('brand',brand)
    formField.append('description',description)
    formField.append('countInStock',countInStock)
    formField.append('category',category)

    if(image !== null ){
      formField.append('image',image)
    }
  

    await axios.post('https://shopn.jassy.in/api/products/create/',formField,{
      headers: {
        "content-type":"multipart/form-data",
      },
    }).then((res) =>{
      console.log(res.data)
    })
    .catch((error) =>{
      console.error(error)
    })
  }

  return (
    <div>
        <Link to='/admin/productlist'>
            Go Back
        </Link>

        <FormContainer>
        <h1 className='text-center'>Create Product</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
        <Form.Label className='my-3'>Product Name</Form.Label>
        <Form.Control
        type='name'
        placeholder='Enter Product Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        >
        </Form.Control>
        </Form.Group>
        
        <Form.Group controlId='name'>
        <Form.Label className='my-3'>Price</Form.Label>
        <Form.Control
        type='number'
        placeholder='Enter Price'
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId='name'>
        <Form.Label className='my-3'>Brand</Form.Label>
        <Form.Control
        type='text'
        placeholder='Enter Brand'
        value={brand}
        onChange={(e)=>setBrand(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
        <Form.Label className='my-3'>Description</Form.Label>
        <Form.Control
        type='text'
        placeholder='Enter description'
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId='category'>
                <Form.Label className='my-3'>Category</Form.Label>
               <Form.Control
                as="select"
                placeholder="category"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}>
                {categories.map(cat => (
                    <option 
                    key={cat.id}
                    value={cat.id}>
                    {cat.category_name}
                    </option>
                ))}              

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

        <Form.Group controlId='image'>
                <Form.Label className='my-3'>Image</Form.Label>
                <Form.Control
                    type='file'
                    // placeholder='Image'
                    // value={}
                    onChange={(e)=>setImage(e.target.files[0])}
                >
                </Form.Control>
        </Form.Group>  

        <center><Button type='submit' variant='primary' className='my-5'>
                    Create
                </Button></center>
 
        </Form>
        </FormContainer>
    </div>
  )
              }

export default CreateProductScreen