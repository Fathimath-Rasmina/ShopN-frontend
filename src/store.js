import { legacy_createStore as createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
     productListReducer,
     productDetailsReducer,
     productDeleteReducer,
     productReviewCreateReducer,
     productTopRatedReducer,
     productStoreReducer,
     productCreateReducer,
     productUpdateReducer,
     productCategoryReducer,
     categoryCreateReducer,
     categoryDeleteReducer,
     categoryDetailsReducer,
     categoryUpdateReducer, 
     filterProductReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
     userDeleteReducer,
     userLoginReducer,
     userUpdateReducer } from './reducers/userReducers'
import { userRegisterReducer,
     userDetailsReducer,
     userUpdateProfileReducer, 
     userListReducer } from './reducers/userReducers'
import { 
     orderCreateReducer,
     orderDetailsReducer,
     orderPayReducer, 
     orderListMyReducer,
     orderListReducer,
     orderDeliverReducer } from './reducers/orderReducers'

const reducer = combineReducers({
     productList: productListReducer,
     productStore:productStoreReducer,
     productDetails: productDetailsReducer,
     productCreate:productCreateReducer,
     productUpdate:productUpdateReducer,
     productDelete:productDeleteReducer,
     productReviewCreate:productReviewCreateReducer,
     productTopRated:productTopRatedReducer,
     
     productCategory:productCategoryReducer,
     categoryCreate:categoryCreateReducer,
     categoryDelete:categoryDeleteReducer,
     categoryDetails:categoryDetailsReducer,
     categoryUpdate:categoryUpdateReducer,
     filterProduct:filterProductReducer,

     cart: cartReducer,  
     userLogin: userLoginReducer,
     userRegister:userRegisterReducer,
     userDetails:userDetailsReducer,
     userUpdateProfile:userUpdateProfileReducer,
     userList:userListReducer,
     userDelete:userDeleteReducer,
     userUpdate:userUpdateReducer,

     orderCreate: orderCreateReducer,
     orderDetails:orderDetailsReducer,
     orderPay:orderPayReducer,
     orderListMy:orderListMyReducer,
     orderList:orderListReducer,
     orderDeliver:orderDeliverReducer,


})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
     JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ?
     JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
     JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
     cart:{cartItems: cartItemsFromStorage, 
     shippingAddress:shippingAddressFromStorage
     },
     userLogin:{userInfo: userInfoFromStorage}
}

const middleware =[thunk]

const store = createStore(reducer, initialState,
     composeWithDevTools(applyMiddleware(...middleware)))

export default store