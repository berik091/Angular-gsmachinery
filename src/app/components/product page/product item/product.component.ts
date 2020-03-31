import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService, Product } from 'src/app/services/products.service';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService
) {
    this.route.params.subscribe((params: Params) => {
        console.log('Params', params);
        this.product = this.productsService.getById(+params.id);
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.extraImages = this.getProduct.extraImages();
    $(document).ready(function() {
      $('.thumb a').click(function(e) {
          e.preventDefault();
          $('.imgBox img').attr('src', $(this).attr( 'href'));
      });
  });
    $(document).ready(function() {
    $('.set > a').on('click', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this)
          .siblings('.content')
          .slideUp(200);
        $('.set > a i')
          .removeClass('fa-minus')
          .addClass('fa-plus');
      } else {
        $('.set > a i')
          .removeClass('fa-minus')
          .addClass('fa-plus');
        $(this)
          .find('i')
          .removeClass('fa-plus')
          .addClass('fa-minus');
        $('.set > a').removeClass('active');
        $(this).addClass('active');
        $('.content').slideUp(200);
        $(this)
          .siblings('.content')
          .slideDown(200);
      }
    });
    $('.accordion-container .set a:eq(0)').trigger('click');
  });
  }

}
