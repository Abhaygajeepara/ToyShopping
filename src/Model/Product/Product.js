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
       new Product("1","toy 1","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwb6c44d8b/images/A448994F_1.jpg?sw=767&sh=767&sm=fit","2","100","0"),
       new Product("2","toy 2","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwf2c8c7b4/images/74494824_1.jpg?sw=767&sh=767&sm=fit","2","100","0"),
       new Product("3","toy 3","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw1456dce3/images/3C0B1B1F_1.jpg?sw=767&sh=767&sm=fit","1","100","0"),
       new Product("4","toy 4","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw8d2b35ae/images/9E940E70_1.jpg?sw=767&sh=767&sm=fit","1","100","0"), 
       new Product("5","toy 5","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw6896f21d/images/14DCFBC4_1.jpg?sw=767&sh=767&sm=fit","1","100","0"),
       new Product("6","toy 6","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwd1a17986/images/9E940270_1.jpg?sw=767&sh=767&sm=fit","1","100","0"),
        

      ];
    }
  }