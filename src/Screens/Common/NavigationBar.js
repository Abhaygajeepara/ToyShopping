
import "../CSS/Navigation.css";
import AuthService from "../../Service/AuthService";
import { Link } from "react-router-dom";
import KeyWords from "../../Common/GeneralEnum";


export default function CommonNavationBar(props) {
  const logOutHandler = () => {
    const loginUtils = new AuthService();
    loginUtils.logout();
    window.location.reload();
  }
  const authService = new AuthService();
  return <div class="menu">


    <nav class="navbar">
      <ul>
        <li><Link to='/' class="tap"> <i class='fas fa-home' id="icon"  ></i></Link></li>

        <li><Link to='/cart' class="tap"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
        <li>
  <i class="fa fa-user" id="icon" aria-hidden="true"></i>
  <ul class="dropdown-menu">
    <li>
      <div class="currentUser">{authService.getUserName()}</div>
    </li>
    {
      !authService.getKeyboard(KeyWords.IsLogin) ?
      <li>
        <Link to='/login' class="tap">Log in</Link>
      </li> : <></>
    }
    {
      authService.getKeyboard(KeyWords.IsLogin) ?
      <li>
        <Link to='/profilePage'>Profile</Link>
      </li> : <></>
    }
    {
      authService.getKeyboard(KeyWords.IsLogin) ?
      <li>
        <div class='tap' onClick={logOutHandler}>LogOut</div>
      </li> : <></>
    }
  </ul>
</li>   

      </ul>
    </nav>

    {/* <ul class="topnav">
      <li><Link to='/' class="tap"> <i class='fas fa-home' id="icon"  ></i></Link></li>
      <li>
        
        <p className="currentUser">{authService.getUserName()}</p>
        <i class="fa fa-user" id="icon" aria-hidden="true"></i></li>
      <li></li>
  
    </ul> */}
  </div>
}