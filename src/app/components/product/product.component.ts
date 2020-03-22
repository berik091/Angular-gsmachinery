import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService, Products } from 'src/app/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Products;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService
) { 
    this.route.params.subscribe((params:Params)=>{
        console.log('Params',params)
        this.product = this.productsService.getById(+params.id)
    })
  }
    
  ngOnInit(): void {
   
  }

}
