import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** import service **/
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {
  product:any = undefined;

  constructor(private route:ActivatedRoute, private _ps:ProductsService) { 
    route.params.subscribe(params=>{
      _ps.load_product(params.id)
        .subscribe(res=>{
          this.product = res.json();
          this.product.id = params.id;
        });
    });
  }
}
