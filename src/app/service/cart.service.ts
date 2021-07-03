import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import restaurants from '../jsonFile/restaurant.json'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public search:string="";
 dish:string="";
total_id:any;
total_price:number=0;
restaurant!:Restaurant;
quantity:number=0;
cartData:Restaurant[]=[];
loginSuccessUser!:string;
flag!:number;
del?:string;
del1?:string;
  constructor() { 
  }
  //Used for storing the items on which add to cart button had been clicked and also calculating the total_price and total_quantity 
  //respectively and setting in the localstorage
  public  storeCart(dishId:string,qnt:string):void
  {  
     this.dish=dishId;
     for(let restaurant of restaurants)
        {
          if(restaurant.id == this.dish)
          {let count=0;
            for(let i=0;i<this.cartData.length;i++){
              if(this.cartData[i].id==this.dish){
                count=count+1;
              }
            }
          
            if(count==0){
              this.cartData.push(restaurant); 
              this.total_price=(restaurant.price*restaurant.quantity)+this.total_price;
             
              let key = 'total_price';
              localStorage.setItem(key, this.total_price.toString());
              this.quantity=this.quantity+restaurant.quantity;
              let key1 = 'total_quantity';
              localStorage.setItem(key1, this.quantity.toString());
              
              localStorage.setItem("users", JSON.stringify(this.cartData));
            }
          //  here we check the quantity in cart and we add the + and - button  here we perfome the operation 
          //  to inc and dec the value in cart and same time it will inc the price 
            else if(qnt=="-" ){
              this.total_price=this.total_price-restaurant.price;
             
              let key = 'total_price';
              localStorage.setItem(key, this.total_price.toString());
              this.quantity=this.quantity-1;
              let key1 = 'total_quantity';
              localStorage.setItem(key1, this.quantity.toString());
              localStorage.setItem("users", JSON.stringify(this.cartData));
            }
            else if(qnt=="+" ){
              this.total_price=this.total_price+restaurant.price;
             
              let key = 'total_price';
              localStorage.setItem(key, this.total_price.toString());
              this.quantity=this.quantity+1;
              let key1 = 'total_quantity';
              localStorage.setItem(key1, this.quantity.toString());
              localStorage.setItem("users", JSON.stringify(this.cartData));
            }
         
          }
          // else if(restaurant.id==this.dish){
            
          // this.total_price=(restaurant.price*restaurant.quantity)+this.total_price;
         
          // let key = 'total_price';
          // localStorage.setItem(key, this.total_price.toString());
          // this.quantity=this.quantity+1;
          // let key1 = 'total_quantity';
          // localStorage.setItem(key1, this.quantity.toString());
          
          // localStorage.setItem("users", JSON.stringify(this.cartData));


          // }      
       }

  }

       public onCartPlus(rest:Restaurant):number{
          for(let rests of restaurants)
            {
                if(rests.id === rest.id)
                {
                  this.quantity++;
                }
            }
            return this.quantity;
          }
          
          //Setting the values of login user name and flag varibale
          public onLoginSuccess(data:string,flag:number){
            this.flag=flag;
            this.loginSuccessUser=data;
          }
          //Used for fetching the name of logged in user
          public getLoginSuccess():string{
            return this.loginSuccessUser;
          }
          //Used for fetching the flag variable for logged in user
          public getSuccessFlag():number{
            return this.flag;
          }

//  Here we add the remove from cart  and we take the cart value from local storage  json cartdata function we remove both  quantity and price

delete(rest:string){
  this.cartData=JSON.parse(localStorage.getItem("users") || "[]");
  
  for(let i=0;i<this.cartData.length;i++)
  {
    if(this.cartData[i].id==rest){
      
      
      
     this.del=localStorage.getItem("total_price") as string ;
      if(this.del!=null){
      this.total_price= parseInt(this.del);
 
    }
   
      this.total_price=this.total_price-(this.cartData[i].quantity*this.cartData[i].price)
             
              let key = 'total_price';
              localStorage.setItem(key, this.total_price.toString());
              this.del1=localStorage.getItem("total_quantity") as string ;
              if(this.del1!=null){
              this.quantity= parseInt(this.del1);

            }
              this.quantity=this.quantity-this.cartData[i].quantity;
              let key1 = 'total_quantity';
              localStorage.setItem(key1, this.quantity.toString());
              this.cartData.splice(i,1)
              localStorage.setItem("users", JSON.stringify(this.cartData));

    }
  }

}

      }