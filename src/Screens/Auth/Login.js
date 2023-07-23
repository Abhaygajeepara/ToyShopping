import React, { Component } from 'react';
import "../CSS/Login.css";

import KeyWords from '../../Common/GeneralEnum';
import AuthService from '../../Service/AuthService';
import { User } from '../../Model/User/User';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../../Common/CommonSnackBar';
import APIService from '../../Service/APIService';
class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: '',
      loginPassword: '',
      loginStatus: '',
      registerUsername: '',
      registeremail: '',
      registerPassword: '',
      registerShippingAddress: '',
      registrationStatus: '',
      showLogin: true,
      isPopUp :false,
    };
    
  }
componentDidMount(){

  const authService = new AuthService();
  if(authService.getKeyboard(KeyWords.IsLogin)){
      window.history.back();
     }
}
  handleLoginUsernameChange = (event) => {
    this.setState({ loginUsername: event.target.value });
  };

  handleLoginPasswordChange = (event) => {
    this.setState({ loginPassword: event.target.value });
  };

  handleLogin =async () => {
    
   
    const authService = new AuthService();
   
    if(this.validateEmail(this.state.loginUsername.trim())&&this.state.loginUsername.trim().length>0 ){
      const result = await authService.login(this.state.loginUsername,this.state.loginPassword);
      console.log(result);
      if(result['message']==="Wrong credential"){
        window.alert("Wrong credential");
      }
     
     else if(result.status === true){
      const user =  
      new User(result.data['id'],result.data['email'],result.data['username'],result.data['shipping_address'])
      authService.localUser(user);
      authService.changeLoginStatus(true);
      window.alert("Login Sucessful");
      window.history.back();
     }
    }
    
   
    
   
    this.setState({ loginUsername: '', loginPassword: '' });
  };

  handleRegisterUsernameChange = (event) => {
    this.setState({ registerUsername: event.target.value });
  };

  handleRegisterPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };
  handleRegisterEmailChange = (event) => {
    this.setState({ registeremail: event.target.value });
  };

  handleRegisterShippingAddressChange = (event) => {
    this.setState({ registerShippingAddress: event.target.value });
  };

  handleRegister = async()  => {
    if(this.state.registerUsername.trim().length ===0 
    && this.state.registerShippingAddress.trim().length === 0 ){
      window.alert('Please enter all the required fields.');
    }else if(this.state.registerPassword.trim().length <4){
      window.alert('Password should be 4 digits long');
    }
    else if(!this.validateEmail(this.state.registeremail.trim())){
      window.alert('invalid email');
    }
    else {
        
        const authService = new AuthService();
  const result=   await   authService.registerUser(this.state.registeremail,this.state.registerPassword,this.state.registerUsername,this.state.registerShippingAddress);
      
        console.log(result['status'])
        if(result['status']===true){
         window.alert("User registered successfully");
       }
        this.setState({ registerUsername: '', registerPassword: '',showLogin: true });
      }
      };

  showRegistrationPage = () => {
    this.setState({ loginStatus: '', registrationStatus: '', showLogin: false });
  };

  showLoginPage = () => {
    this.setState({ loginStatus: '', registrationStatus: '', showLogin: true });
  };
  validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  render() {
    const {
      loginUsername,
      loginPassword,
      loginStatus,
      registerUsername,
      registerEmail,
      registerAddress,
      registerPassword,
      registrationStatus,
      showLogin,
    } = this.state;

    return (
      <div className="container">
        {showLogin ? (
          <div className="loginPage">
            <h2>Login Page</h2>
            <input
              type="text"
              value={loginUsername}
              onChange={this.handleLoginUsernameChange}
              placeholder="Username"
            />
            <input
              type="password"
              value={loginPassword}
              onChange={this.handleLoginPasswordChange}
              placeholder="Password"
            />
            <button onClick={this.handleLogin}>Login</button>
            <div className="status">{loginStatus}</div>
            <p>
              Don't have an account?{' '}
              <button onClick={this.showRegistrationPage}>Register here</button>
            </p>
          </div>
        ) : (
          <div className="registrationPage">
            <h2>Registration Page</h2>
            <input
              type="text"
              value={registerUsername}
              onChange={this.handleRegisterUsernameChange}
              placeholder="Username"
            />
            <input
              type="text"
              value={registerEmail}
              onChange={this.handleRegisterEmailChange}
              placeholder="Email"
            />
            
            <input
              type="password"
              value={registerPassword}
              onChange={this.handleRegisterPasswordChange}
              placeholder="Password"
            />
<input
              type="text"
              value={registerAddress}
              onChange={this.handleRegisterShippingAddressChange}
              placeholder="Address"
            />
            <button onClick={this.handleRegister}>Register</button>
            <div className="status">{registrationStatus}</div>
            <p>
              Already have an account?{' '}
              <button onClick={this.showLoginPage}>Login here</button>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Login;