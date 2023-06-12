export class Product{
    constructor(id,name,img,des,price,quantity,comment) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.des = des;
      this.price = price;
      this.quantity =quantity;
      this.comment = comment;
      
    }
  }

  export class ProductList{
    constructor(){
      this.list = [
       
      ]
    }
  }

  export class Comment {
    constructor(id, productId, userId, rating, commentText, image) {
      this.id = id;
      this.productId = productId;
      this.userId = userId;
      this.rating = rating;
      this.commentText = commentText;
      this.image = image;
    }
  }
  