import logo from './logo.svg';
import React, { Component } from 'react';
import "./App.css"
import { ProductList } from './Model/Product/Product';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter ,Routes, Route,  } from 'react-router-dom';
import ProductScreen from './Screens/Product';  
import HomeScreen from './Screens/Home';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      proList: new ProductList(),

    }
  }
  render() {
    return (<>
    <BrowserRouter>
    <Routes>
        <Route index element= {<HomeScreen/>}></Route>
        <Route path='homeScreen' element={<HomeScreen/>}/>
        <Route path='productScreen' element={<ProductScreen/>}/>
    </Routes>
    </BrowserRouter>
    </>);
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
export default App;
