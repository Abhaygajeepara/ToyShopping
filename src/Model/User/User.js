export class User{
    constructor(userId, gmail, password,address){
        this.userId = userId;
        this.gmail = gmail;
        this.password = password;
        this.address = new Address("","","");
        
    }
}
export class Address {
    constructor(strret, city, province){
        this.strret = strret;
        this.city = city;
        this.province = province;
    }
}