import { useParams } from 'react-router-dom';
 import React, { useState } from 'react';
import { ProductList } from '../Model/Product/Product';
import AuthService from '../Service/AuthService';
import AppHeader from './Common/AppHeader';
import CommonNavationBar from './Common/NavigationBar';
import './CSS/ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  let productList = new ProductList();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const getData = () => {
    const authService = new AuthService();
   
   productList = authService.getDummyData();
}
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { comment: newComment, image: selectedImage }]);
      setNewComment('');
      setSelectedImage(null);
    }
  };
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const index= id - 1;
  getData();
  return (
    <div>
<AppHeader></AppHeader>
<CommonNavationBar>   </CommonNavationBar>
    
    <div className="product-page">
      <div className="product-image-container">
        <img src={productList.list[index].img} alt="Product" className="product-image" />
      </div>
      <div>
        <div className="product-details">
        <h2 className="product-name">{productList.list[index].name}</h2>

        <h2 className="product-description">{productList.list[index].des}</h2>
        <p className="product-price">Price: ${productList.list[index].price}</p>

       
        <div >
          <input className='product-textarea' type='text' list='listid' placeholder={productList.list[index].quantity} value={inputValue}
            onChange={handleChange} />
          <datalist id='listid' className='listid'>
            <option class='label1' value='1' />
            <option class='label2' value='2' />
            <option class='label3' value='3' />
          </datalist>
          <button class="update-button" onClick={() => {
                      const authService = new AuthService();
                       const getDummyData = authService.getDummyData();
                      // const cartData = authService.getCart();

                      // if (inputValue != null) {
                      //   getDummyData.list[ index].quantity = inputValue;
                      // }
                      // authService.updateCart(cartData);
                      // authService.updateDummyData(getDummyData);
                      authService.addcartAndUpdate(inputValue, getDummyData.list[ index])
                      window.location.reload();
                    }}><i class="fas fa-sync-alt"></i> Update</button>
        </div>
     

      </div>
      </div>
    </div> 
    <div className="comment-input">
      <h2 className="comments-heading">Customer Reviews</h2>
      {comments.length === 0 ? (
        <p className="no-comments">No customer reviews yet.</p>
      ) : (
        <ul className="comment-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              {comment.comment}
              {comment.image && <img src={comment.image} alt="Comment" className="comment-image" />}
            </li>
          ))}
        </ul>
      )}
        <textarea
          placeholder="Write a customer review"
          value={newComment}
          onChange={handleCommentChange}
          className="comment-textarea"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} className="image-input" />
        <button onClick={handleAddComment} className="add-comment-btn">Submit</button>
      </div> 
    </div>
  );
};

export default ProductPage;