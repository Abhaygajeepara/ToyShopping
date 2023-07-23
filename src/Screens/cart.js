import React, { useEffect, useState } from "react";
import { AddCart } from "../Model/Order/AddCart";
import AuthService from "../Service/AuthService";

import { Link } from 'react-router-dom';
import AppHeader from "./Common/AppHeader";
import CommonNavationBar from "./Common/NavigationBar";
import '../Screens/CSS/cart.css'
import { ProductList } from "../Model/Product/Product";
import APIMethodService from '../Service/APIMethodService';
import APIKeyboard from '../Common/APISList';
import { CartProduct } from "../Model/Product/Product";
export default function Cart() {
  const [isload, setLoad] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    let [cartData, setCart] = useState(new AddCart());
   // let cartData = new AddCart();
    let total =  0;
  
    useEffect(() => {
      const getData = async() => {
        const authService = new AuthService();
        const params = {
          userId: parseInt(authService.getuserId()), 
        };
       var data =await authService.getCart(params);
    
          let cartList =[];
         
    
          if (data.status &&data.data) {
           
            cartList = data.data.map((cart) => {
              return new CartProduct(
                cart.productId,
                cart.image,
                cart.description,
                cart.quantities,
                cart.userId,
                cart.pricing
                
              );
            });
            cartData.addCartlist  = cartList;
            setCart(cartData);
          // setProduct(pro);
          setLoad(true);
           
            console.log('Products retrieved successfully:', cartData.addCartlist.length);
          } else {
            console.log('Failed to retrieve products:', data.message);
          }
        
    }
  getData();
  
    }, []);
    const getData = () => {
        const authService = new AuthService();
       
        cartData.addCartlist.map((data) => (
          total += data.price *parseInt(data.quantity)
        ));
    }
     
    getData();
    return (
        <div className='body'>
          <AppHeader></AppHeader>
          <CommonNavationBar></CommonNavationBar>
          <br></br>
       
          <div class="cart-body">
          <div className="cart-items-list">
           {cartData.addCartlist.map((data) => (
             <div class="cart-item">
             <div class="item-image">
             <Link
                  to={`/productScreen/${data.productId}`}
                >
                  <img src={data.img} alt={data.des} className="Img" />
                </Link>
             </div>
             <div class="item-details">
               <h4 class="item-name">{data.des}</h4>
               <h4 class="item-description">{data.des}</h4>
               <h4 class="item-price">${data.price}</h4>
             </div>
             <div>
                    <input className='carttextarea' type='text' list='listid' value={inputValue} placeholder={data.quantity} onChange={handleChange} />
                    <datalist id='listid' className='listid'>
                      <option className='label1' value='1' />
                      <option className='label2' value='2' />
                      <option className='label3' value='3' />
                    </datalist>
                  </div>
             <div class="item-actions">
               <button class="remove-button" onClick={async() =>  {
                
                      const authService = new AuthService();
                   var result = await authService.removeCart( data.productId)
                    window.alert(result.message);
                      window.location.reload();
                    }}><i class="fas fa-trash"></i> Remove</button>
               <button class="update-button" onClick={() => {
              
                      const authService = new AuthService();
                      authService.addcartAndUpdate(inputValue, data.productId, )
                      window.location.reload();
                    }}><i class="fas fa-sync-alt"></i> Update</button>
             </div>
           </div>
       
       ))}
        </div>
  <div class="checkout">
  <h2>Checkout</h2>

    {cartData.addCartlist.map((data) => (
      <div
      className="cart-data-div"
      >
       <p  className="cart-item-name">  {data.des} ({data.quantity})</p>
       <p className="cart-item-price"> ${data.price}</p> 
      </div>
     
    ))}
    <hr></hr>
   <div
      className="cart-data-div"
      >
       <p  className="cart-item-name"> Total</p>
       <p className="cart-item-price"> ${total}</p> 
       
      </div>
      <div class="chechout-container">
  <button class="checkout-button" onClick={()=>{
    alert('Your order has been placed!');
    const authService = new AuthService();
    authService.clear();
      
window.location.reload();
  }}>Checkout</button>
</div>
  </div>
  
</div>
        
        
        </div>
      );
      
}

/*
<div className="itemBox">
              <div className="img">
                <Link
                  to={`/productScreen/${productList.list[data - 1].id}`}
                >
                  <img src={productList.list[data - 1].img} alt={productList.list[data - 1].name} className="Img" />
                </Link>
              </div>
              <div className="labelArea">
                <b><p className="label">{productList.list[data - 1].name}</p></b>
                <p className="label">{productList.list[data - 1].des}</p>
              </div>
              <div>
                <div className='card-bottom-right'>
                  <div>
                    <input className='textarea' type='text' list='listid' value={inputValue} placeholder={productList.list[data - 1].quantity} onChange={handleChange} />
                    <datalist id='listid' className='listid'>
                      <option className='label1' value='1' />
                      <option className='label2' value='2' />
                      <option className='label3' value='3' />
                    </datalist>
                  </div>
                  <div className="inputArea">
                    <button type="button" className="updateButton" onClick={() => {
                      const authService = new AuthService();
                      const getDummyData = authService.getDummyData();
                      const cartData = authService.getCart();
                      if (inputValue != null) {
                        getDummyData.list[data - 1].quantity = inputValue;
                      }
                      authService.updateCart(cartData);
                      authService.updateDummyData(getDummyData);
                    }}>Update</button>
                    <button type="button" className="Remove" onClick={() => {
                      const authService = new AuthService();
                      const getDummyData = authService.getDummyData();
                      const cartData = authService.getCart();
                      if (inputValue != null) {
                        getDummyData.list[data - 1].quantity = 0;
                        const newList = cartData.addCartlist.filter((item) => item !== data);
                        const uniqueList = [...new Set(newList)];
                        cartData.addCartlist = uniqueList;
                      }
                      authService.updateCart(cartData);
                      authService.updateDummyData(getDummyData);
                      window.location.reload();
                    }}>remove</button>
                  </div>
                </div>
              </div>
            </div>
*/ 