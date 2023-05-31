import KeyWords from "../Common/GeneralEnum";
import React from 'react';
import { ProductList } from "../Model/Product/Product";
import { AddCart } from "../Model/Order/AddCart";

class AuthService extends React.Component {
       getKeyboard  = (keyword)=>  {
        return localStorage.getItem(keyword);
    }

    
    clear = ()=>{
      localStorage.removeItem(KeyWords.Products);
      localStorage.removeItem(KeyWords.AddCart);
      
      this.setDummyData();
      this.setCart();
    }
   changeLoginStatus = (value)=>{
        localStorage.setItem(KeyWords.IsLogin,value);
        window.location.reload();
    }
     logout = ()=>{
         localStorage.removeItem(KeyWords.IsLogin,);
        //  localStorage.removeItem(KeyWords.Users,);
    }
    setUser = (user)=>{
      const usreRef =  JSON.stringify(user);
        localStorage.setItem(KeyWords.Users,usreRef);
       
    }
    updateUser = (userData)=>{
      
      const usreRef =  JSON.stringify(userData);
        localStorage.setItem(KeyWords.Users,usreRef);
       
    }
    getUser = ()=>{
        const user = localStorage.getItem(KeyWords.Users);
        
        return JSON.parse(user);
    }
    getUserName = ()=>{
        const user = localStorage.getItem(KeyWords.Users);
        const IsLogIn = localStorage.getItem(KeyWords.IsLogin);
        if
        (user != null && IsLogIn){
            const userRef = JSON.parse(user);
            return userRef.gmail;
        }    
        else{
return "Guest"
        }   
    }
    
    setDummyData = () =>{
      const checkKeyboardExist =  localStorage.getItem(KeyWords.Products);
      const   proList = new ProductList();
     
      if(!checkKeyboardExist){
        const proRef =  JSON.stringify(proList);
        localStorage.setItem(KeyWords.Products,proRef);
      }
    }
    updateDummyData = (proList) => {
     
      
        const proRef =  JSON.stringify(proList);
        localStorage.setItem(KeyWords.Products,proRef);
      
    }
    getDummyData = () => {
      const checkKeyboardExist =  localStorage.getItem(KeyWords.Products);
     
       return JSON.parse(checkKeyboardExist);
    }

    setCart = () =>{
      const checkKeyboardExist =  localStorage.getItem(KeyWords.AddCart);
      const   proList = new AddCart();
     
      if(!checkKeyboardExist){
        const proRef =  JSON.stringify(proList);
        localStorage.setItem(KeyWords.AddCart,proRef);
      }
    }
    updateCart = (proList) => {
        const proRef =  JSON.stringify(proList);
        localStorage.setItem(KeyWords.AddCart,proRef);
    }
    getCart = () => {
      const checkKeyboardExist =  localStorage.getItem(KeyWords.AddCart);
       return JSON.parse(checkKeyboardExist);
    }
    
    addcartAndUpdate=(inputValue,item)=>{
      
      const getDummyData = this.getDummyData();
      const cartData = this.getCart();
      if (inputValue != null && inputValue > 0) {
        getDummyData.list[item.id - 1].quantity = inputValue;
        cartData.addCartlist.push(item.id);
        const uniqueList = [...new Set(cartData.addCartlist)];
        cartData.addCartlist = uniqueList;
        this.updateCart(cartData);
        this.updateDummyData(getDummyData);
      }
    }

  render() {
    return null; 
  }
}

export default AuthService;

 