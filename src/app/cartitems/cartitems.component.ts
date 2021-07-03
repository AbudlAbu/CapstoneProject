import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
restaurants!:Restaurant[];
quantity:number=1;
total_price:any;
isEnable:number=0;
valueEnable:boolean=true;


// In this component we are fetching the data from the local storage 
  constructor(public cartService:CartService) { 
    this.restaurants=JSON.parse(localStorage.getItem("users") || "[]");
    
  }

  ngOnInit(): void {
    this.total_price=localStorage.getItem('total_price');
  // for(let i=0;i<this.restaurants.length;i++)
  // {
  //   this.total_price=this.restaurants[i].quantity*this.restaurants[i].price+this.total_price;
  // }
  }
  
  ngDoCheck(){
    this.isEnable=this.cartService.getSuccessFlag();
    if(this.isEnable === 1)
    {
      this.valueEnable=false;
    }
  }
   
  // this function inc the qun 

quantityInc(rest:Restaurant){
  
  rest.quantity=rest.quantity+1;
  this.cartService.storeCart(rest.id,"+");
  localStorage.setItem("users", JSON.stringify(this.restaurants));
  this.ngOnInit();
}

// this function is to dec the quantity
quantityDec(rest:Restaurant){
  if(rest.quantity!=1){
    
    rest.quantity=rest.quantity-1;
    this.cartService.storeCart(rest.id,"-");
    localStorage.setItem("users", JSON.stringify(this.restaurants));
    this.ngOnInit();
  }
 
}
// this function is to remove  the items in cart
deleteItem(rest:Restaurant){
  this.cartService.delete(rest.id)
  this.restaurants=JSON.parse(localStorage.getItem("users") || "[]");
  this.ngOnInit();


  

}
 
}
