
const  localhost= "http://localhost/Web/week5/PHP/endpoints/";
const APIKeyboard={
     

    // user
    login:localhost+"Auth/login.php",
    registerUser:localhost+"Auth/register.php",


    getAllProducts:localhost+"Product/getAllProduct.php", 
    getProductByID:localhost+"Product/geProductById.php", 


    // cart 
    addTocart:localhost+"Cart/addToCart.php", 
    getCart : localhost+"/Cart/getCart.php",
    deleteCart : localhost+"/Cart/deleteCart.php",

    
     internalError : "Internal error"



};
export default  APIKeyboard