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
  @Input() horizontal: any;
  @Input() vertical: any;
  @Input() auger;
  @Input() silage;
  @Input() hale;

  horizontals: any[] = [

  { id: 1, name: 'HORIZONTAL FEED MIXER 2.5 M3',imageUrl: 'assets/images/product/horizontalfeedmixer/hor1.jpg', price: 'KZT 990,000.00'},
  { id: 2, name: 'HORIZONTAL FEED MIXER 4 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor2.jpeg', price: 'KZT 990,000.00'},
  { id: 3, name: 'HORIZONTAL FEED MIXER 5 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor3.jpg',  price: 'KZT 990,000.00'},
  { id: 4, name: 'HORIZONTAL FEED MIXER 6 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor4.jpg',  price: 'KZT 990,000.00' },
  { id: 5, name: 'HORIZONTAL FEED MIXER 8 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor5.jpg',  price: 'KZT 990,000.00'},
  { id: 6, name: 'HORIZONTAL FEED MIXER 10 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor6.jpeg', price: 'KZT 990,000.00'},
  { id: 7, name: 'HORIZONTAL FEED MIXER 12 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor7.jpg',  price: 'KZT 990,000.00'},
  { id: 8, name: 'HORIZONTAL FEED MIXER 14 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor8.jpg',  price: 'KZT 990,000.00' },
  { id: 9, name: 'HORIZONTAL FEED MIXER 16 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor9.jpg',  price: 'KZT 990,000.00' },
  { id: 9, name: 'HORIZONTAL FEED MIXER 20 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor10.jpg', price: 'KZT 990,000.00' },
  ];

verticals: any[] = [
  { id: 1, name: 'VERTICAL FEED MIXER 1.5 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver1.jpg', price: 'KZT 990,000.00'},
  { id: 2, name: 'VERTICAL FEED MIXER 3 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver2.jpg',  price: 'KZT 990,000.00'},
  { id: 3, name: 'VERTICAL FEED MIXER 5 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver3.jpg', price: 'KZT 990,000.00'},
  { id: 4, name: 'VERTICAL FEED MIXER 8 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver4.jpg', price: 'KZT 990,000.00' },
  { id: 5, name: 'VERTICAL FEED MIXER 12 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver5.jpg', price: 'KZT 990,000.00'},
  { id: 6, name: 'VERTICAL FEED MIXER 20 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver6.jpg', price: 'KZT 990,000.00'}
];

augers: any[] = [
  { id: 1, name: 'SINGLE AUGER HORIZANTAL FEED MIXER 4 M3', imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/single-hor01.jpg', price: 'KZT 990,000.00'},
  { id: 2, name: 'SINGLE AUGER HORIZANTAL FEED MIXER 6 M3', imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/single-hor02.jpg', price: 'KZT 990,000.00'},
];

silages: any[] = [
  { id: 1, name: 'MOBILE SILAGE ROUND BALER', imageUrl: 'assets/images/product/silage round baler/silage01.jpg', price: 'KZT 990,000.00'},
  { id: 2, name: 'COMBINE SILAGE ROUND BALER', imageUrl: 'assets/images/product/silage round baler/silage02.jpg', price: 'KZT 990,000.00'}
];

hales: any[] = [
  { id: 1, name: 'Classic Hale Bopp-300 Rake-Ted Combination', imageUrl: 'assets/images/product/Hale bob/hale-bopp01.jpg', price: 'KZT 990,000.00'},

];
  constructor() {
   }

  ngOnInit(): void {}
  }
