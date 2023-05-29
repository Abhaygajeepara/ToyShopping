export class Product{
    constructor(id,name,img,des,price,quantity) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.des = des;
      this.price = price;
      this.quantity =quantity;
      
    }
  }

  export class ProductList{
    constructor(){
      this.list = [
       new Product("1","toy 1","https://images.pexels.com/photos/860882/pexels-photo-860882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","2","100","0"),
       new Product("2","toy 2","https://images.pexels.com/photos/860882/pexels-photo-860882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","2","100","0"),
       new Product("3","toy 3","https://images.pexels.com/photos/860882/pexels-photo-860882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","1","100","0"),
       new Product("4","toy 4","https://images.pexels.com/photos/860882/pexels-photo-860882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","1","100","0"), 
       new Product("5","toy 5","https://images.pexels.com/photos/860882/pexels-photo-860882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","1","100","0"),
       new Product("6","toy 6","https://images.pexels.com/photos/860882/pexels-photo-860882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","1","100","0"),
        

      ];
    }
  }