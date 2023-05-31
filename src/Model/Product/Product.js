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

       new Product("1","Just Play","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwe123516c/images/04FA7914_1.jpg?sw=767&sh=767&sm=fit","CoComelon Count with Me Wooden Clock, Recycled Wood, Learning and Education - English Edition","80","0"),
       new Product("2","LeapFrog","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw21fdf2c7/images/1A273553_1.jpg?sw=767&sh=767&sm=fit","LeapFrog 2-in-1 LeapTop Touch Green - English Edition","129","0"),
       new Product("3","VTech","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw1456dce3/images/3C0B1B1F_1.jpg?sw=767&sh=767&sm=fit","Vtech Explore and Write Activity Desk - Pink - Exclusive - English Edition","199","0"),
       new Product("4","LeapFrog","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw8d2b35ae/images/9E940E70_1.jpg?sw=767&sh=767&sm=fit","LeapFrog Mr. Pencil's ABC Backpack - English Edition","49","0"), 
       new Product("5","VTech","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw6896f21d/images/14DCFBC4_1.jpg?sw=767&sh=767&sm=fit","Vtech Touch & Teach Sea Turtle - English Edition","140","0"),
       new Product("6","LeapFrog","https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwd1a17986/images/9E940270_1.jpg?sw=767&sh=767&sm=fit","LeapFrog Learning Friends 100 words Book - Bilingual English/French Edition" ,"60","0"),

        

      ];
    }
  }