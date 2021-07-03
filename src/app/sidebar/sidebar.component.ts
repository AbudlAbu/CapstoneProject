import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
r1 : string = "r1";
r2 : string = "r2";
r3 : string = "r3";
r4 : string = "r4";

//This Constructor is used for routing to restaurant and divide it on the basis of id 
  constructor( public router :Router) {
    this.router.navigate(['/rest-1',this.r1]);
    this.router.navigate(['/rest-2',this.r2]);
    this.router.navigate(['/rest-3',this.r3]);
    this.router.navigate(['/rest-4',this.r4]);
    this.router.navigateByUrl('');
   }


  ngOnInit(): void {
  }

}
