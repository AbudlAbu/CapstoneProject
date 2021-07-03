import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../model/restaurant';
import { CartService } from '../service/cart.service';
import { SearchService } from '../service/search.service';
import restaurants from '../jsonFile/restaurant.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dish:string="";
  route: ActivatedRoute | null | undefined;
  total_id:any="0";
  cart:CartService;
  restaurant!:Restaurant;
  total_price:any=0;
  total_quantity:any="0";
  btn_cart:boolean=false;
  loginSuccess!:string;
  enableProp!:number;
  
  constructor(public service:SearchService,public router:Router,public cartService:CartService) {
  this.cart=this.cartService;
  localStorage.clear();
  }

  ngDoCheck(){ 

   this.total_price=localStorage.getItem('total_price');
   this.total_quantity=localStorage.getItem('total_quantity');
   if(this.total_price > 0)
   {
     this.btn_cart=true;
   }
   //Here we Have put the login and signup button enable and disable
   this.loginSuccess=this.cartService.getLoginSuccess();
   this.enableProp=this.cartService.getSuccessFlag();
  }
  

onLogout(){
//this.enableProp=1;
location.reload();
}

  ngOnInit():void { }

  //For getting the search button Method so that we can Search the dish
  onEnter(value:any)
  { 
    this.service.storeData(value);
    this.router.navigate(['search'],{relativeTo:this.route});
  }

}
