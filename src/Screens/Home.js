import logo from '../logo.svg';
import React, { Component } from 'react';
import "../App.css"
import { ProductList } from '../Model/Product/Product';
import { Link } from 'react-router-dom';
  
export default class Home extends  Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
          proList: new ProductList(),
    
        }
      }
      render() {
        
        function handleClick() {
          
            this.navigate("/home");
          }
        const arrayChunk = (arr, n) => {
          const array = arr.slice();
          const chunks = [];
          while (array.length) chunks.push(array.splice(0, n));
          return chunks;
        };
    
        return (
          <div className='body'>
            <AppHeader/>

            <Link to="/productScreen">
          <button>About</button>
        </Link>
            
            {arrayChunk([...Array(this.state.proList.list.length).keys()], 3).map((row, i) => (
              <div key={i} class="grid">
                {row.map((col, i) => (
                  <ItemCard item={this.state.proList.list[col]} ></ItemCard>
                ))}
              </div>
            ))}
    <AppFooter></AppFooter>
    
          </div>
        );
      }
    
    }
    
    function ItemCard(props) {
      const item = props.item;
      return <div class="item">
        <img src={item.img} alt={item.name} className="itemImg">
    
        </img>
        <div className='card-bottom'>
          <div>
            <div>{item.name}</div>
            <div> {item.des}</div></div>
          <div className='card-bottom-right'>
            <div >
              <input className='textarea' type='text' list='listid' />
              <datalist id='listid' className='listid'>
                <option class='label1' value='1' />
                <option label='label2' value='2' />
                <option label='label3' value='3' />
              </datalist>
    
            </div>
            <div>
              <button type="button" className="buyButton" onclick="myFunction()">Buy</button>
            </div>
          </div>
        </div>
    
        
      </div>
    
        ;
    
    }
    
    function AppHeader(props){
      return <div className='app-header'>
      <img src={logo} alt='logo' className='applogo'></img>
      
    <button class="signout"><i class="fa fa-sign-out"></i></button>
    
    
    
    
    </div>
    }
    function AppFooter(props){
      return <div className='app-footer'>
      
        @copy-right 2023
      
      
    </div>
}