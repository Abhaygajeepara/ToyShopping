export class User{
    constructor(userId, gmail,userName,address){
        this.userId = userId;
        this.gmail = gmail;
      
        this.address = address;
        this.userName = userName;
        
    }
}

export class RegisterUser{
    constructor(username, gmail, password,address){
        this.username = username;
        this.email = gmail;
        this.password = password;
        this.shippingAddress = address;
        
    }
}
export class Address {
    constructor(strret, city, province){
        this.strret = strret;
        this.city = city;
        this.province = province;
    }
}