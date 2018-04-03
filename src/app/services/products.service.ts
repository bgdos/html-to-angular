import { Injectable } from '@angular/core';
import { Http } from '@angular/http'


@Injectable()
export class ProductsService {
  products:any[] = [];
  loading_products:boolean = false;
  constructor( private http:Http ) { 
    this.load_products();
  }
  public load_products(){
    this.loading_products = true;
    this.http.get('https://web-angular-beeaf.firebaseio.com/products_idx.json')
      .subscribe(res=>{
        this.products = res.json();
        this.loading_products = false;
        // setTimeout(()=>{
        //   this.products = res.json();
        //   this.loading_products = false;
        // },1500)
        
      });
  } 

}
