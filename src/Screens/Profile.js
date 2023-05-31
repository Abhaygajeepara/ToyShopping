import React, { useState } from 'react';
import { Address, User } from '../Model/User/User';
import AppHeader from './Common/AppHeader';
import CommonNavationBar from './Common/NavigationBar';
import './CSS/Profile.css';
import AuthService from '../Service/AuthService';
import KeyWords from '../Common/GeneralEnum';
const ProfilePage = () => {
    let user = new User();
    const auth = new AuthService();
    const getUserDate = ()=>{
      const authService = new AuthService();
      if(!authService.getKeyboard(KeyWords.IsLogin)){
        window.history.back();
       }
        user = auth.getUser();
       
    }
    
    getUserDate();
  const [userName, setUserName] = useState(user.userId);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [street, setStreet] = useState(user.address.strret);
  const [city, setCity] = useState(user.address.city);
  const [province, setProvince] = useState(user.address.province);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
 
   
  const handlePasswordChange = (e) => {
    e.preventDefault();

    
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }
   
    
       if(currentPassword === user.password){
        user.password  = newPassword
        auth.updateUser(user);
       } 
    
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(true);
  };
 
  const handleAddressUpdate = (e) => {
    e.preventDefault();
    const address =new Address(street,city,province);
    user.address = address;
    auth.updateUser(user);
    
    setSuccess(true);
  };

  return (
    <div>

<AppHeader></AppHeader>
        <CommonNavationBar></CommonNavationBar>
   
        <div className='profilBody'>
           
        <h2>Change Password</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Password changed successfully!</div>}
      <form onSubmit={handlePasswordChange}>
        <label>
          Current Password:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Change Password</button>
      </form>


      <h2>Update Address</h2>
      {success && <div className="success">Address updated successfully!</div>}
      <form onSubmit={handleAddressUpdate}>
        <label>
          Street:
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          Province:
          <input
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update Address</button>
      </form>
        </div>
    </div>
  );
};

export default ProfilePage;
