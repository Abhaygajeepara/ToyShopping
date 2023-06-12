import { useParams } from 'react-router-dom';
 import React, { useState } from 'react';
import { Product, product } from '../Model/Product/Product';
import AuthService from '../Service/AuthService';
import AppHeader from './Common/AppHeader';
import CommonNavationBar from './Common/NavigationBar';
import './CSS/ProductPage.css';
import api from '../Service/APIService';
import APIKeyboard from '../Common/APISList';

const ProductPage = () => {
  const { id } = useParams();
  const [isload, setLoad] = useState(false);
  const [product, setProduct] = useState(null);
 
  const [newComment, setNewComment] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const getData = () => {
    const authService = new AuthService();
    const params = {
      product_id: id,
    };
    api.getData(APIKeyboard.getProductByID, {})
    .then((response) => {
      if (response.status &&response.data) {
        const comments = response.data.comments.map((comment) => {
          return new Comment(
            comment.id,
            comment.product_id,
            comment.user_id,
            comment.rating,
            comment.comment_text,
            comment.image
          );
        });
        
        const pro =   new Product(
            response.data.id,
            response.data.description,
            response.data.image,
            response.data.pricing,
            response.data.shippingcost,
            0 ,
            comments
          );
            console.log(pro.comment.length);
      setProduct(pro);
      setLoad(true);
        
        console.log('Products retrieved successfully:', this.pro.length);
      } else {
        console.log('Failed to retrieve products:', response.message);
      }
    })
    .catch((error) => {
      console.log('Failed to retrieve products:', error.message);
    });
}
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  // const handleAddComment = () => {
  //   if (newComment.trim() !== '') {
  //     setComments([...comments, { comment: newComment, image: selectedImage }]);
  //     setNewComment('');
  //     setSelectedImage(null);
  //   }
  // };
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const index= id;
  getData();
  if (!isload) {
    return <div>Loading...</div>;
  }
  return (
    <div>
<AppHeader></AppHeader>
<CommonNavationBar>   </CommonNavationBar>

    <div className="product-page">
      <div className="product-image-container">
        <img src={product.img} alt="Product" className="product-image" />
      </div>
      <div>
        <div className="product-details">
        <h2 className="product-name">{product.name}</h2>

        <h2 className="product-description">{product.des}</h2>
        <p className="product-price">Price: ${product.price}</p>

       
        <div >
          <input className='product-textarea' type='text' list='listid' value={inputValue}
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
     
   
      {product.comment.length === 0 ? (
        <p className="no-comments">No customer reviews yet.</p>
      ) : 
      (
        <ul className="comment-list">
          {product.comment.map((comment,) => (
  <li key={comment.id} className="comment-item">
    {comment.comment_text}
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
        <button  className="add-comment-btn">Submit</button>
      </div> 
    </div>
  );
};

export default ProductPage;