import React, { useState, useEffect } from 'react'
import { Button, Row, Col} from "react-bootstrap"
import { useSelector, useDispatch} from 'react-redux'
import StoreProduct from '../components/StoreProduct'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCategoryProducts, listStoreProducts } from '../actions/productActions'
import { useLocation,useNavigate } from 'react-router-dom'
import { filterProducts } from '../actions/productActions'

function StoreScreen() {
  const [selectedCategory, setSelectedCategory] = useState('')
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filterProduct = useSelector((state) => state.filterProduct)
  const {error,loading, products } = filterProduct


  const productCategory = useSelector(state => state.productCategory)
  const { category } = productCategory
 
  const location = useLocation()
  const keyword = location.search

  useEffect(() => {

    dispatch(listStoreProducts(selectedCategory))
    dispatch(listCategoryProducts(keyword))
    if (selectedCategory) {
      dispatch(filterProducts(selectedCategory))
    }
    
  }, [dispatch, selectedCategory, keyword])

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value)    
  }

    return (

      <div>
       

          <center><h1>Store</h1></center>
          {loading ? <Loader/>
            : error ? <Message variant='danger'>{error}</Message>
            : 
             <div>
              <Col>
              {category.map((cat) => (
                <Button
                  key={cat.id}
                  className="btn-light"
                  value={cat.category_name}
                  onClick={handleCategorySelect}
                >
                  {cat.category_name}
                </Button>
              ))}
            </Col>
                <Row>
                </Row>
        
                 <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <StoreProduct product={product} />
                    </Col>
                ))}
              </Row>
             
              </div>
          }    
      </div>
    )
  }


export default StoreScreen