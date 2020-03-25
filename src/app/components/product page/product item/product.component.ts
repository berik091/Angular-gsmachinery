import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService, Product } from 'src/app/services/products.service';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService
) { 
    this.route.params.subscribe((params:Params)=>{
        console.log('Params',params)
        this.product = this.productsService.getById(+params.id)
    })
  }
    
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // this.extraImages = this.getProduct.extraImages();

    $(document).ready(function(){
      $('.thumb a').click(function(e){
          e.preventDefault();
          $('.imgBox img').attr("src", $(this).attr("href"))
      })
  })
  }

}
