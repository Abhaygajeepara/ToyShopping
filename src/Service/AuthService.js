import KeyWords from "../Common/GeneralEnum";
import React from 'react';
import { ProductList } from "../Model/Product/Product";
import { AddCart } from "../Model/Order/AddCart";
import api from './APIMethodService';
import APIKeyboard from "../Common/APISList";
import APIService from "./APIService";
import { User } from "../Model/User/User";
class AuthService extends React.Component {
   apiService = new APIService();
       getKeyboard  = (keyword)=>  {
        return localStorage.getItem(keyword);
    }

    
    clear = ()=>{
      localStorage.removeItem(KeyWords.Products);
      localStorage.removeItem(KeyWords.AddCart);
      
      
      this.setCart();
    }
    setGuestMode = ()=>{
      const guestUser = new User(0,"","Guest","");
      this.localUser(guestUser);
    }
   changeLoginStatus = (value)=>{
        localStorage.setItem(KeyWords.IsLogin,value);
        window.location.reload();
    }
     logout = ()=>{
         localStorage.removeItem(KeyWords.IsLogin,);
this.setGuestMode();
        //    localStorage.removeItem(KeyWords.Users,);
    }
    login = async(email, password)=>{
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const result=   await   this.apiService.login(formData);
       return result;
    }
    registerUser = async(email,password, username,shipping_address)=>{
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("username", username);
      formData.append("shipping_address", shipping_address);

      const result=   await   this.apiService.registerUser(formData);
       return result;
    }
    updateUser = (userData)=>{
      
      const usreRef =  JSON.stringify(userData);
        localStorage.setItem(KeyWords.Users,usreRef);
       
    }
    updatePassword = async(oldPassword,newPassword,confirmPassword)=>{
      const user = this.getUser();
      const formData = new FormData();
      
     formData.append('currentPassword', oldPassword);
     formData.append('newPassword', newPassword);
     formData.append('confirmPassword', confirmPassword);
     formData.append('userId', parseInt(user.userId));
var result = await this.apiService.updatePassword(formData);
     return result;

    }
    updateAddress = async(address)=>{
      const user = this.getUser();
      const formData = new FormData();
      
     formData.append('address',address);
     formData.append('userId', parseInt(user.userId));
var result = await this.apiService.updateAddress(formData);
     return result;

    }
    getUser = ()=>{
        const user = localStorage.getItem(KeyWords.Users);
        
        return JSON.parse(user);
    }
    getuserId = ()=>{
      const user = this.getUser();
      
      return user.userId;
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
    localUser = (user)=>{
      const usreRef =  JSON.stringify(user);
        localStorage.setItem(KeyWords.Users,usreRef);
       
    }
    
    // setDummyData = () =>{
    //   const checkKeyboardExist =  localStorage.getItem(KeyWords.Products);
    //   const   proList = new ProductList();
     
    //   if(!checkKeyboardExist){
    //     const proRef =  JSON.stringify(proList);
    //     localStorage.setItem(KeyWords.Products,proRef);
    //   }
    // }
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
    getCart =async (params) => {
   var result =   this.apiService.getCart(params);
   return result;
    }
    removeCart = async(productID)=>{
      const formData = new FormData();
      const user = this.getUser();
      formData.append('productId', parseInt(productID));
      formData.append('userId',parseInt(user.userId));
      console.log(formData);
    var result =  await this.apiService.removeCart(formData);
      return result 
    }
    
    addcartAndUpdate=async (quantity,productId)=>{
      const user = this.getUser();
      const formData = new FormData();
      
      formData.append('productId', parseInt(productId));
      formData.append('quantities', parseInt(quantity));
      formData.append('userId',parseInt( user.userId));
     
     await api.postData(APIKeyboard.addTocart, formData)
        .then((response) => {
          if (response.status && response.data) {
            console.log('Successfully added to cart:', response.data.message);
          } else {
            console.log('Failed to add to cart:', response.message);
          }
        })
        .catch((error) => {
          console.log('Failed to add to cart:', error.message);
        });
  
     

     // const getDummyData = this.getDummyData();
      // const cartData = this.getCart();
      // if (inputValue != null && inputValue > 0) {
      //   getDummyData.list[item.id - 1].quantity = inputValue;
      //   cartData.addCartlist.push(item.id);
      //   const uniqueList = [...new Set(cartData.addCartlist)];
      //   cartData.addCartlist = uniqueList;
      //   this.updateCart(cartData);
      //   this.updateDummyData(getDummyData);
      // }
    }

     createFormData = (dataObject) => {
      const formData = new FormData();
    
      // Loop through the keys of the dataObject
      for (const key in dataObject) {
        if (Object.prototype.hasOwnProperty.call(dataObject, key)) {
          const value = dataObject[key];
    
          // Check if the value is a File or Blob object
          if (value instanceof File || value instanceof Blob) {
            formData.append(key, value);
          } else {
            // Convert other values to strings before appending
            formData.append(key, String(value));
          }
        }
      }
    
      return formData;
    };

    addOrder=async (totalAmount,items)=>{

      const formData = new FormData();
      const user = this.getUser();
      formData.append('user_id', parseInt(user.userId));
      formData.append('total_amount', parseInt(totalAmount));
      formData.append('shipping_address',parseInt(user.address));
      formData.append('items', items);
      console.log(items);
    var result= await this.apiService.addOrder(formData);
    if(result.status === true){
      const deleteFormData = new FormData();
      deleteFormData.append('userId', parseInt(user.userId));
      await this.apiService.deleteEntireCart(deleteFormData);
    }
    return result;
    }
  render() {
    return null; 
  }
}

export default AuthService;

 