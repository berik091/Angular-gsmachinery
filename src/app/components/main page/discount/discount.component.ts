import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
    imageUrl: 'assets/images/discount-product/product-1.jpg',
    ahref: '/Product'
  },
  {
    name: 'HMS',
    text: 'Подробнее',
    imageUrl: 'assets/images/discount-product/product-2.jpg',
    ahref: '/Hms'
  },
];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  }

}
