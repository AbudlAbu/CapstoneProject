import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {NgForm} from '@angular/forms';
import { Address } from '../model/address';
import { Order } from '../model/order';
 

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Purchase } from '../model/purchase';
import { Customer } from '../model/customer';
import { CheckoutService } from '../service/checkout.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  selectedCountry: String = "--Choose Country--";
  
	Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'Berlin', cities: ["Charlottenburg", 
    "Spandau" ]},
     {name: 'Hessen', cities: ["Bad Homburg",
    "Darmstadt",
    "Frankfurt am Main"]} ,
    {name: 'Lower Saxony', cities: ["Emden",
    "Goslar"]} ] },
		{ name: 'Spain',  states: [ {name: 'Cádiz', cities: ["Algeciras",
    "Cádiz",
    "La Línea"]} ,
    
      {name: 'Jaén', cities: ["Jaén",
    "Linares",
    "Martos",
    "Úbeda"
    ]} ,
    
     {name: 'Madrid', cities: ["Alcalá de Henares",
    "Aranjuez",
    "Getafe",
    ]} ] },
	
		{ name: 'India',  states: [ {name: 'Andhra Pradesh', cities: ["Adoni",
    "Amaravati",
    "Anantapur", 
    "Chandragiri", 
    "Chittoo", 
    "Dowlaiswaram", 
    "Eluru", 
    "Guntur", 
    "Kadapa ", 
    "Kakinada", 
    "Kurnool", 
    "Machilipatnam", 
    "Nagarjunakoṇḍa ", 
    "Rajahmundry ", 
    "Srikakulam", 
    "Tirupati ", 
    "Vijayawada ", 
    "Visakhapatnam", 
    "Vizianagaram",
    "Yemmiganur"]} ,
       {name: 'Arunachal Pradesh', cities: ["Itanagar"]} ,
       {name: 'Assam', cities: ["Dhuburi",
    "Dibrugarh",
    "Dispur",
    "Guwahati",
    "Jorhat",
    "Nagaon",
    "Sibsagar",
    "Silchar",
    "Tezpur",
    "Tinsukia"]} ,
     {name: 'Bihar', cities: ["Baruni",
    "Begusarai",
    "Bettiah",
    "Bhagalpur",
    "Bihar Sharif",
    "Chapra",
    "Darbhanga",
    "Dehri",
    "Gaya",
    "Purnia",
    "Pusa"]} ,
     {name: 'Chhattisgarh', cities: ["Ambikapur",
    "Bhilai",
    "Bilaspur",
    "Dhamtari",
    "Durg"]} ,
      {name: 'Goa', cities: ["Madgaon",
    "Panaji"]} ,
      {name: 'Gujarat', cities: ["Kheda",
    "Mahesana",
    "Nadiad",
    "Navsari",
    "Okha"]} ,
      {name: 'Haryana', cities: [
    "Ambala",
    "Bhiwani"
    ]} ,
     {name: 'Himachal Pradesh', cities: [
    "Bilaspur",
    "Chamba",
    "Dalhousie",
    "Dharmshala"]} ,
      {name: 'Jammu and Kashmir', cities: ["Anantnag",
    "Baramula"]} ,
      {name: 'Jharkhand', cities: ["Bokaro",
    "Chaibasa"]} ,
     {name: 'Karnataka', cities: ["Halebid"]} ,
     {name: 'Kerala', cities: [
    "Kochi"]} ,
      {name: 'Madhya Pradesh', cities: ["Dhar"]} ,
     {name: 'Maharashtra', cities: ["Pune"]} ,
      {name: 'Manipur', cities: ["Imphal"]} ,
    {name: 'Mizoram', cities: ["Aizawl"]} ,
     {name: 'Nagaland', cities: ["Phek"]} ,
      {name: 'Odisha', cities: ["Cuttack"]} ,
      {name: 'Punjab', cities: ["Firozpur"]} ,
      {name: 'Rajasthan', cities: ["Jaipur"]} ,
      {name: 'Sikkim', cities: ["Lachung"]} ,
      {name: 'Tamil Nadu', cities: ["Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanniyakumari",
    "Madurai",
    "Salem",
    "Thanjavur",
    "Tuticorin"]} ,
      {name: 'Telangana', cities: [
    "Hyderabad",
    "Karimnagar",
    "Khammam",
    "Mahbubnagar",
    "Nizamabad",
    "Sangareddi"]} ,
      {name: 'Tripura', cities: [
    "Agartala"]} ,
     {name: 'Uttar Pradesh', cities: [
    "Agra",
    "Bara Banki",
    "Jalaun",
    "Lucknow",
    "Pilibhit",
    "Sitapur",
    "Tehri"]} ,
      {name: 'Uttarakhand', cities: ["Dehra Dun",
    "Haridwar",
    "Mussoorie"]} ,
      {name: 'West Bengal', cities: ["Haora",
    "Hugli",
    "Ingraj Bazar",
    "Jalpaiguri"]} ]},
	];
  
    //states: Array<any>; //Angular 8
	states: Array<any> = []; //Angular 11

	//cities: Array<any>; //Angular 8
	cities: Array<any> = []; //Angular 11
   
  user = new User();
  address= new Address();
  order=new Order();
  purchase!: Purchase;
  customer = new Customer();
  card=new Card();

  expiryYears:number[]=[]

  expiryMonths:number[]=[]
 
  constructor(public checkoutService:CheckoutService,public route:Router) { }
  total_price:any=0;
  total_quantity:any="0";
  ngOnInit(): void {
    for(let i=2021;i<=2030;i++){
      this.expiryYears[i-2021]=i;
    }

    for(let i=1;i<=12;i++){
      this.expiryMonths[i-1]=i;
    }
   
  }
  //We already have decided the total_price and Total_quantity so we will get the previous value using LocalStorage
  ngDoCheck(){
    this.total_price=localStorage.getItem('total_price');
    this.total_quantity=localStorage.getItem('total_quantity');
   }
//This Method is used for sending the checkout details in the dataBase
 registerUser(data:any)
  {
  this.order.total_price=this.total_price;
  this.order.total_quantity=this.total_quantity;
  this.purchase = new Purchase(this.customer,this.address,this.order);
  this.checkoutService.checkoutFormPost(this.purchase).subscribe(
  data =>{
    alert("YOUR ORDER IS GOT PLACED");
    localStorage.clear();
    this.route.navigate(['']);
  },
  error => {
    alert("SOMETHING WENT WRONG");
  })
}

changeCountry(country: any) { //Angular 11
  //this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
  this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; //Angular 11
}

//changeState(state) { //Angular 8
changeState(state: any) { //Angular 11
  this.selectedCountry=this.address.country;
  //this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == state).cities; //Angular 8
  this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
}



}
