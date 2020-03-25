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
    name: 'name10',
    text: 'Подробнее',
    imageUrl: 'assets/images/discount-product/product-1.jpg'
  },
  {
    name: 'name20',
    text: 'Подробнее',
    imageUrl: 'assets/images/discount-product/product-2.jpg'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
