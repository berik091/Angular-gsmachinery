import { Component, OnInit } from '@angular/core';
import { ProductSliderService } from 'src/app/services/product-slider.service';
import { ProductsService, Product } from 'src/app/services/products.service';
import { ActivatedRoute, Params } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})

export class ProductSliderComponent implements OnInit {

  product: Product;
// public imageUrl:any;
// public href: any;

horizontals = {};

      constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService,
        private productSliderService: ProductSliderService
        ){ 
          this.route.params.subscribe((params:Params)=>{
          console.log('Params',params)
          this.product = this.productsService.getById(+params.id)
          })
      }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.horizontals = this.getHorizontals();

    $(document).ready(function(){
      $('.thumb a').click(function(e){
          e.preventDefault();
          $('.imgBox img').attr("src", $(this).attr("href"))
      })
  })
  }

  getHorizontals() {
    return this.productSliderService.horizontals;
  }

}
