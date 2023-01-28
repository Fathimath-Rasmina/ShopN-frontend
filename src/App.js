import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreens from './screens/RegisterScreens';
import ProfileScreen from './screens/ProfileScreen';
import Shippingscreen from './screens/Shippingscreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import ProductListScreen from './screens/ProductListScreen';
import StoreScreen from './screens/StoreScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import CategoryListScreen from './screens/CategoryListScreen';
import CategoryEditScreen from './screens/CategoryEditScreen';
import DashboardScreen from './screens/DashboardScreen';



function App() {
  return (
     <Router>
      <Header/>
          <main className="py-3">
            <Container>
              <Routes>
              <Route path='/' element={<HomeScreen/>} exact />
              <Route path='/login' element={<LoginScreen/>}/>
              <Route path='/register' element={<RegisterScreens/>}/>
              <Route path='/profile' element={<ProfileScreen/>}/>
              <Route path='/store' element={<StoreScreen/>}/>
              <Route path='/dashboard' element={<DashboardScreen/>}/>
              <Route path='/login/shipping' element={<Shippingscreen/>}/>
              <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
              <Route path='/order/:id' element={<OrderScreen/>}/>
              <Route path='/payment' element={<PaymentScreen/>}/>
              <Route path='/product/:id' element={<ProductScreen/>}/>
              <Route path='/cart/:id' element={<CartScreen/>} />

              <Route path='/admin/userlist' element={<UserListScreen/>}/>
              <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}/>
              <Route path='/admin/productlist' element={<ProductListScreen/>}/>
              <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}/>
              <Route path='/admin/orderlist' element={<OrderListScreen/>}/>
              <Route path='/admin/categorylist' element={<CategoryListScreen/>}/>
              <Route path='/admin/category/:id/edit' element={<CategoryEditScreen/>}/>


              </Routes>
            </Container>
          </main>
      <Footer/>
      </Router>
  );
}

export default App;
