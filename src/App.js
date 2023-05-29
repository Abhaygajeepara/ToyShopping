
import React, { Component } from 'react';
import "./App.css"
import { ProductList } from './Model/Product/Product';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ProductScreen from './Screens/Product';
import HomeScreen from './Screens/Home';

import AuthService from './Service/AuthService';
import KeyWords from './Common/GeneralEnum';
import Cart from './Screens/cart';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

     
    }
  }
  componentDidMount(){
    
    const authService = new AuthService();
    authService.setDummyData();
    authService.setCart();


  }
  render() {
    const loginUtils = new AuthService();
   const checkAuth = loginUtils.getKeyboard(KeyWords.IsLogin);
 
    return (<>
    {
      //  checkAuth ?
       <BrowserRouter>
       <Routes>
         <Route index element={<HomeScreen />}></Route>
         <Route path='/' element={<HomeScreen />} />
         <Route path='/productScreen/:id' element={<ProductScreen />} />
         <Route path='cart' element={<Cart />} />
       </Routes>
     </BrowserRouter>
      // : <Login></Login>
    }
     
    </>);
  }

}


export default App;
