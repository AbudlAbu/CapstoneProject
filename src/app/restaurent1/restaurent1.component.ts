import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../model/restaurant';
import restaurants from '../jsonFile/restaurant.json';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-restaurent1',
  templateUrl: './restaurent1.component.html',
  styleUrls: ['./restaurent1.component.css']
})
export class Restaurent1Component implements OnInit {

 restaurant:Restaurant[];
 rname:any="";
 dishid: any="";

  constructor(private route: ActivatedRoute, public router:Router,public cartService:CartService) {
   this.restaurant=restaurants;   
   }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('r1') === "r1")
    this.rname = "r1";
    else if(this.route.snapshot.paramMap.get('r2') === "r2")
    this.rname = "r2";
    else if(this.route.snapshot.paramMap.get('r3') ==="r3")
    this.rname = "r3";
    else if(this.route.snapshot.paramMap.get('r4') ==="r4")
    this.rname="r4";
  }

ngOnChange()
{
  localStorage.clear();
}
//Method for Adding the value to the cart
  OnAddCart(dishId:string){
   this.cartService.storeCart(dishId,"");
  }
}
