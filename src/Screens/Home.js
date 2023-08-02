
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
        <AppHeader>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-kI+K7i2XL9o26ux1klgpx3XkG2/DU0wq1LY7d1zVeMOGr2JwvQc7IkblYyXy7LZG" crossorigin="anonymous">
          </link>
        </AppHeader>  
        <CommonNavationBar></CommonNavationBar>
        <div className="bannerImg">
          <img src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BDFX_STG/on/demandware.static/-/Library-Sites-toys-global/default/dwedfbe4d7/images/pages/brand-pages/educational-toys-cb-header-d-e.jpg" alt="img 1"></img>
        </div>
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
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const item = props.item;
  return <div class="item-card">

    <Link
      to={`productScreen/${item.id}`}
    >
    <img src={item.img} alt={item.name} className="item-img">
      </img>
    </Link>
    <div className='item-details'>
      <div>
        <div className='item-name'>{item.name}</div>
        <div className='item-description'> {item.des}</div></div>
      <div className='item-bottom'>
        <div >
          <input className='quantity-input' type='text' list='listid' value={inputValue}
            onChange={handleChange} />
          <datalist id='listid' className='listid'>
            <option class='label1' value='1' />
            <option class='label2' value='2' />
            <option class='label3' value='3' />
          </datalist>

        </div>
        <div className='quantity-input'>
          <div className="add-to-cart-button" onClick={(() => {
            const authService = new AuthService();
            const getDummyData = authService.getDummyData();
            const cartData = authService.getCart();
            if (inputValue != null) {
              getDummyData.list[item.id - 1].quantity = inputValue;
              cartData.addCartlist.push(item.id);
              const uniqueList = [...new Set(cartData.addCartlist)];
              cartData.addCartlist = uniqueList;
            }
            authService.updateCart(cartData);
            authService.updateDummyData(getDummyData);


          })}><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
        </div>
      </div>
    </div>



  </div>

    ;

}


