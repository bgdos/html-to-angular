import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { reject } from 'q';


@Injectable()
export class ProductsService {
  products:any[] = [];
  products_filtered:any[] = [];
  loading_products:boolean = false;
  term:string = "";
  constructor( private http:Http ) { 
    this.load_products();
  }
  public load_product(id:String){
    return this.http.get(`https://web-angular-beeaf.firebaseio.com/products/${id}.json`);

  }
  public load_products(){
    this.loading_products = true;
    let promise = new Promise((resolve, reject)=>{
      this.http.get('https://web-angular-beeaf.firebaseio.com/products_idx.json')
      .subscribe(res=>{
        this.products = res.json();
        this.loading_products = false;
        resolve();
      });
    });
    return promise;
  } 
  public search_product(term:string){
    this.term = this.remove_accent(term);
    if (!this.products.length){
      this.load_products().then(()=>{
        // finish loading
        this.filter_products()
      });
    }else{this.filter_products()}
  }
  private filter_products(){
    this.products_filtered = [];
    this.products.forEach(prod =>{
      if(prod.categoria.indexOf(this.term)>=0 || this.remove_accent(prod.titulo).indexOf(this.term)>=0){
        this.products_filtered.push(prod);
        console.log(prod);
      }
    });
  }
  private remove_accent(text:string){
    text = text.toLowerCase();
    text = text.replace(/([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g, function(str,a,c,e,i,n,o,s,u,y,ae) { if(a) return 'a'; else if(c) return 'c'; else if(e) return 'e'; else if(i) return 'i'; else if(n) return 'n'; else if(o) return 'o'; else if(s) return 's'; else if(u) return 'u'; else if(y) return 'y'; else if(ae) return 'ae'; });
    console.warn(text);
    return text;
  }
}
