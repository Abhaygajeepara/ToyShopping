import React, { Component } from 'react';
import "../CSS/Login.css";

import KeyWords from '../../Common/GeneralEnum';
import AuthService from '../../Service/AuthService';
import { User } from '../../Model/User/User';
import { useNavigate } from 'react-router-dom';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: '',
      loginPassword: '',
      loginStatus: '',
      registerUsername: '',
      registerPassword: '',
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

  handleLogin = () => {
    
   
    const authService = new AuthService();
    const user = authService.getUser();
   
<<<<<<< Updated upstream
    if(authService.getKeyboard(KeyWords.Users)){
    if( this.state.loginUsername === user.gmail  && user.password === this.state.loginPassword){
=======
    if(this.state.loginUsername.trim().length ===0 
    && this.state.loginPassword.trim().length === 0 ){
      window.alert('Please enter all the required fields.');
    }else  if(this.validateEmail(this.state.loginUsername.trim())&&this.state.loginUsername.trim().length>0 ){
      const result = await authService.login(this.state.loginUsername,this.state.loginPassword);
      console.log(result);
      window.alert(result);
      if(result["message"]==="Wrong credential"){
        window.alert("Wrong credential");
      }
     else if(result.status === true){
      const user =  
      new User(result.data['id'],result.data['email'],result.data['username'],result.data['shipping_address'])
      authService.localUser(user);
>>>>>>> Stashed changes
      authService.changeLoginStatus(true);
      window.history.back();
<<<<<<< Updated upstream
=======
     }
    }else{
      window.alert("Invalid Email");
    }
>>>>>>> Stashed changes
    
    }
    else{
      window.alert('invalid credentials');
    }}
    else{
      window.alert('Register first');
    }
    
   
    this.setState({ loginUsername: '', loginPassword: '' });
  };

  handleRegisterUsernameChange = (event) => {
    this.setState({ registerUsername: event.target.value });
  };

  handleRegisterPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  handleRegister = () => {
    const authService = new AuthService();
    const  user = new User("1",this.state.registerUsername,this.state.registerPassword,"");
   authService.setUser(user);
  
    this.setState({ registerUsername: '', registerPassword: '',showLogin: true });
  };

<<<<<<< Updated upstream
=======
  handleRegister = async()  => {
    if(this.state.registerUsername.trim().length ===0 
    && this.state.registerShippingAddress.trim().length === 0 ){
      window.alert('Please enter all the required fields.');
    }else if(this.state.registerPassword.trim().length <4){
      window.alert('Password should be 4 digits long');
    }
    else if(!this.validateEmail(this.state.registeremail.trim())){
      
      window.alert("invalid email");
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

>>>>>>> Stashed changes
  showRegistrationPage = () => {
    this.setState({ loginStatus: '', registrationStatus: '', showLogin: false });
  };

  showLoginPage = () => {
    this.setState({ loginStatus: '', registrationStatus: '', showLogin: true });
  };

  render() {
    const {
      loginUsername,
      loginPassword,
      loginStatus,
      registerUsername,
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
              type="password"
              value={registerPassword}
              onChange={this.handleRegisterPasswordChange}
              placeholder="Password"
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