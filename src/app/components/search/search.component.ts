import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** import service **/
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  term:string = undefined;

  constructor(private route:ActivatedRoute, private _ps:ProductsService) {
    route.params.subscribe(params=>{
      this.term = params.term;
      _ps.search_product(this.term);
    });
   }

}
