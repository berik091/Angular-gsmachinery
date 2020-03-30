import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
@Input() discount;

discounts: any[] = [
  {
    name: 'Tosun Tarim',
    text: 'Подробнее',
    imageUrl: 'assets/images/discount-product/product-1.jpg'
  },
  {
    name: 'HMS',
    text: 'Подробнее',
    imageUrl: 'assets/images/discount-product/product-2.jpg'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
