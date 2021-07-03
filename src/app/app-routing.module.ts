import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Restaurent1Component } from './restaurent1/restaurent1.component';
import { SearchComponent } from './search/search.component';
 
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';



const routes: Routes = [
  
  {path: '',component: SidebarComponent, children : [
     {path:'',redirectTo:'rest-1/r1',pathMatch:'full'},
    {path: 'rest-1/:r1',component: Restaurent1Component},
    {path: 'rest-2/:r2',component:Restaurent1Component},
    {path: 'rest-3/:r3',component:Restaurent1Component},
    {path: 'rest-4/:r4',component:Restaurent1Component},
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'cartitems',component:CartitemsComponent},
    {path:'check',component:CheckoutComponent},
    {path:'search',component:SearchComponent},
    // {path:'',component:SliderComponent}
  ]}

 
 
   
 
   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
