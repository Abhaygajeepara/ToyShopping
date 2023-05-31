
import React, { Component, useState } from 'react';

import "./CSS/home.css"
import { ProductList } from '../Model/Product/Product';
import { Link } from 'react-router-dom';
import CommonNavationBar from '../Screens/Common/NavigationBar';
import AppHeader from './Common/AppHeader';
import AppFooter from './Common/AppFooter';
import AuthService from '../Service/AuthService';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

      proList: new ProductList(),

    }

  }
  componentDidMount() {
    const authService = new AuthService();
    const getDummyData = authService.getDummyData();
    this.state.proList = getDummyData;
    this.setState({});
  }

  render() {
    const arrayChunk = (arr, n) => {
      const array = arr.slice();
      const chunks = [];
      while (array.length) chunks.push(array.splice(0, n));
      return chunks;
    };

    return (
      <div className='body'>
        <AppHeader />
        <CommonNavationBar></CommonNavationBar>
        <br></br>
        <div className="bannerImg">
          <img src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BDFX_STG/on/demandware.static/-/Library-Sites-toys-global/default/dwedfbe4d7/images/pages/brand-pages/educational-toys-cb-header-d-e.jpg" alt="img 1"></img>
        </div>
        <br></br>
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
  const [inputValue, setInputValue] = useState();
  const handleChange = (event) => {
    setInputValue(event.target.value);  
  };
  const item = props.item;
  
  return <div class="item">

    <Link
      to={`productScreen/${item.id}`}
    >
    <img src={item.img} alt={item.name} className="itemImg">
      </img>
    </Link>
    <div className='card-bottom'>
      <div>
        <div>{item.name}</div>
        <div> {item.des}</div></div>
      
    </div>
    <div className='card-bottom-right'>
      <h1>${item.price}</h1>
        <div className='addcart-area' >
          <input className='textarea' type='text' list='listid' placeholder={item.name.quantity} value={inputValue}
            onChange={handleChange} />
          <datalist id='listid' className='listid'>
            <option class='label1' value='1' />
            <option class='label2' value='2' />
            <option class='label3' value='3' />
          </datalist>
          <button className="buyButton" onClick={(() => {
           
           const authService = new AuthService();
           authService.addcartAndUpdate(inputValue,item)


          })}> Add to Cart</button>
        </div>
        </div>
        


  </div>

    ;

}


