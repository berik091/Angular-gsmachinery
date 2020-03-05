import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  active = 1;
  @Input() product;
  @Input() vertical;
  products: any[] = [
    // Horizontal feeder mixer
    // 1
    {
      name: 'Fibre Chair',
      imageUrl: 'assets/images/product/p-1.jpg',
      discount: '-59%',
      price: '50$'
    },
    // 2
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
    // 3
    {
      name: 'Classic Wardrobe',
      imageUrl: 'assets/images/product/p-3.jpg',
      discount: '-10%',
      price: '89$'
    },
    // 4
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
    // 5
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
    // 6
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
  ];
  verticals: any[] = [
    // Horizontal feeder mixer
    // 1
    {
      name: 'Fibre Chair',
      imageUrl: 'assets/images/product/p-1.jpg',
      discount: '-80%',
      price: '50$'
    },
    // 2
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
    // 3
    {
      name: 'Classic Wardrobe',
      imageUrl: 'assets/images/product/p-3.jpg',
      discount: '-10%',
      price: '89$'
    },
    // 4
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
    // 5
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
    // 6
    {
      name: 'Touchwood Chair 2',
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
