import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  p = 1;
  public page: number;
  public collectionSize: number;
  active = 1;
  @Input() furniture;
  @Input() decorative;
  @Input() lighting;
  @Input() outdoor;
  @Input() storage;

furnitures: any[] = [

  { id: 1, name: 'HORIZONTAL FEED MIXER 2.5 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor1.jpg', discount: '-50%', price: 'KZT 990,000.00'},
  { id: 2, name: 'HORIZONTAL FEED MIXER 4 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor2.jpeg', discount: '-55%', price: 'KZT 990,000.00'},
  { id: 3, name: 'HORIZONTAL FEED MIXER 5 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor3.jpg', discount: '-60%', price: 'KZT 990,000.00'},
  { id: 4, name: 'HORIZONTAL FEED MIXER 6 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor4.jpg', discount: '-50%', price: 'KZT 990,000.00' },
  { id: 5, name: 'HORIZONTAL FEED MIXER 8 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor5.jpg', discount: '-50%', price: 'KZT 990,000.00'},
  { id: 6, name: 'HORIZONTAL FEED MIXER 10 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor6.jpeg', discount: '-55%', price: 'KZT 990,000.00'},
  { id: 7, name: 'HORIZONTAL FEED MIXER 12 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor7.jpg', discount: '-60%', price: 'KZT 990,000.00'},
  { id: 8, name: 'HORIZONTAL FEED MIXER 14 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor8.jpg', discount: '-50%', price: 'KZT 990,000.00' },
  { id: 9, name: 'HORIZONTAL FEED MIXER 16 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor9.jpg', discount: '-50%', price: 'KZT 990,000.00' },
  { id: 9, name: 'HORIZONTAL FEED MIXER 20 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor10.jpg', discount: '-50%', price: 'KZT 990,000.00' },
  ];

decoratives: any[] = [
  { id: 1, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-50%', price: '40$'},
  { id: 2, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'},
  { id: 3, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-3.jpg', discount: '-60%', price: '49$'},
  { id: 4, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-2.jpg', discount: '-50%', price: '59$' },
  { id: 5, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-50%', price: '40$'},
  { id: 6, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'}
];

lightings: any[] = [
  { id: 1, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-50%', price: '40$'},
  { id: 2, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'},
  { id: 3, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-3.jpg', discount: '-60%', price: '49$'},
  { id: 4, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-2.jpg', discount: '-50%', price: '59$' },
  { id: 5, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-50%', price: '40$'},
  { id: 6, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'}
];

outdoors: any[] = [
  { id: 1, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-5%', price: '40$'},
  { id: 2, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'},
  { id: 3, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-3.jpg', discount: '-60%', price: '49$'},
  { id: 4, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-2.jpg', discount: '-50%', price: '59$' },
  { id: 5, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-50%', price: '40$'},
  { id: 6, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'},
];

storages: any[] = [
  { id: 1, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-50%', price: '40$'},
  { id: 2, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'},
  { id: 3, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-3.jpg', discount: '-60%', price: '49$'},
  { id: 4, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-2.jpg', discount: '-50%', price: '59$' },
  { id: 5, name: 'Classic Wardrobe', imageUrl: 'assets/images/product/p-5.jpg', discount: '-50%', price: '40$'},
  { id: 6, name: 'Touchwood Chaira', imageUrl: 'assets/images/product/p-2.jpg', discount: '-55%', price: '129$'},
];
  constructor() {
   }

  ngOnInit(): void {}
  }
