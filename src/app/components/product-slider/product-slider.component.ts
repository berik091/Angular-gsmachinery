import { Component, OnInit } from '@angular/core';
import { ProductSliderService } from './product-slider.service';
declare var $: any;
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

public imageUrl:any;
public href: any;

horizontals = {};
  constructor(private productSliderService: ProductSliderService) { }

  ngOnInit(): void {

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
