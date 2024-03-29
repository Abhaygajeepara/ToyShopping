import React from "react";
import api from "./APIMethodService";
import APIKeyboard from "../Common/APISList";
import CustomAlert from "../Common/CommonSnackBar";
 class APIService extends React.Component{

    async login(formData){
       
        try {
            const response = await api.postData(APIKeyboard.login, formData);
            
            return response;
        }
        catch {
            window.alert(APIKeyboard.internalError)
            return null;
        }
      
        
    }

   async registerUser(formData){
       
        try {
            const response = await api.postData(APIKeyboard.registerUser, formData);
            
            return response;
        }
        catch {
           window.alert(APIKeyboard.internalError)
        }
      
        
    }
    async updatePassword(formData){
       
        try {
            const response = await api.postData(APIKeyboard.updatePassword, formData);
            
            return response;
        }
        catch {
           window.alert(APIKeyboard.internalError)
        }
      
        
    }
    async updateAddress(formData){
       
        try {
            const response = await api.postData(APIKeyboard.updateAddress, formData);
            
            return response;
        }
        catch {
           window.alert(APIKeyboard.internalError)
        }
      
        
    }
    async getCart(params){
        try {
            const response = await api.getData(APIKeyboard.getCart, params);
            
            return response;
        }
        catch {
           window.alert(APIKeyboard.internalError)
        }
    }
    async removeCart(params){
        try {
            const response = await api.postData(APIKeyboard.deleteCart, params);
            
            return response;
        }
        catch {
           window.alert(APIKeyboard.internalError)
        }
    }

    async addOrder(params){
        try {
            const response = await api.postData(APIKeyboard.addOrder, params);
            
            return response;
        }
        catch {
           window.alert(APIKeyboard.internalError)
        }
    }
    async deleteEntireCart(params){
        try {
            const response = await api.postData(APIKeyboard.deleteEntrieCart, params);
            
            return response;
        }
        catch {
           window.alert(APIKeyboard.internalError)
        }
    }
render(){
    return null;
};
}
export default APIService;
