
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
      <div className='card-bottom-right'>
        <div >
          <input className='textarea' type='text' list='listid' value={inputValue}
            onChange={handleChange} />
          <datalist id='listid' className='listid'>
            <option class='label1' value='1' />
            <option label='label2' value='2' />
            <option label='label3' value='3' />
          </datalist>

        </div>
        <div className='textArea'>
          <div className="buyButton" onClick={(() => {
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


