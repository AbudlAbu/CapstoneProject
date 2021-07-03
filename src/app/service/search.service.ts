import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public search:string="";
  constructor() { }

  //Used to get the data from Header Component
  public  storeData(dish:string):void
  {  
     this.search=dish;
  }
  //used to send the data to search component
  public getData():string
  {
    return this.search;
  }
}
