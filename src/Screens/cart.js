import React, { useState } from "react";
import { AddCart } from "../Model/Order/AddCart";
import AuthService from "../Service/AuthService";

import { Link } from 'react-router-dom';
import AppHeader from "./Common/AppHeader";
import CommonNavationBar from "./Common/NavigationBar";
import '../Screens/CSS/cart.css'
import { ProductList } from "../Model/Product/Product";

export default function Cart() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    let cartData = new AddCart();
    let productList = new ProductList();
    const getData = () => {
        const authService = new AuthService();
        cartData = authService.getCart();
        productList = authService.getDummyData();
    }
     
    getData();
    return (
        <div class='body'>
            <AppHeader></AppHeader>
            <CommonNavationBar></CommonNavationBar>
            <br></br>

            {cartData.addCartlist.map((data) => (

                <div className="itemBox">
                    <div class="img">
                        <Link
                            to={`productScreen/${productList.list[data - 1].id}`}
                        >
                            <img src={productList.list[data - 1].img} alt={productList.list[data - 1].name} className="Img">
                            </img>
                        </Link>
                    </div>
                    <div class="labelArea" >
                        <b> <p class="label"> {productList.list[data - 1].name}</p></b>
                        <p class="label"> {productList.list[data - 1].des}</p>

                    </div>

                    <div >
                        <div className='card-bottom-right'>
                            <div >
                                <input className='textarea' type='text' list='listid' value={inputValue} placeholder={productList.list[data - 1].quantity}
                                    onChange={handleChange} />
                                <datalist id='listid' className='listid'>
                                    <option class='label1' value='1' />
                                    <option label='label2' value='2' />
                                    <option label='label3' value='3' />
                                </datalist>

                            </div>
                            <div class="inputArea">
                                <button type="button" className="updateButton" onClick={()=>{
                                    const authService = new AuthService();
                                    const getDummyData = authService.getDummyData();
                                    const cartData = authService.getCart();
                                    if (inputValue != null) {
                                        getDummyData.list[data-1 ].quantity = inputValue;
                                        
                                    }
                                    authService.updateCart(cartData);
                                    authService.updateDummyData(getDummyData);
                                }}>Update</button>
                                <button type="button" className="Remove" onClick={()=>{
                                     const authService = new AuthService();
                                     const getDummyData = authService.getDummyData();
                                     const cartData = authService.getCart();
                                     if (inputValue != null) {
                                         getDummyData.list[data-1 ].quantity = 0;
                                         const newList =  cartData.addCartlist.filter((item) => item!== data);
                             
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
            ))}

        </div>
    );
}