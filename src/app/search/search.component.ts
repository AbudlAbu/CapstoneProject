import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { SearchService } from '../service/search.service';
import restaurants from '../jsonFile/restaurant.json'
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  restaurant:Restaurant[];
   dish:string="";
   //for setting the json Data and match it with Search Data
  constructor(public service:SearchService,public cartService:CartService) { 
    this.restaurant=restaurants;
    this.dish=this.service.getData();
  }
  ngOnChange()
  {
    localStorage.clear();
  }
  ngOnInit(): void {
    
  }
  //Method for adding the dish to the cart
  OnAddCart(dishId:string){
   this.cartService.storeCart(dishId,"");
  
  }
}  

