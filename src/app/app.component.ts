import { Component } from '@angular/core';
import { InfoService } from './services/info.service'
import { ProductsService } from './services/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public _is: InfoService,
    public _ps:ProductsService ){

  }  
}
