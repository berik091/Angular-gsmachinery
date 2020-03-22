import { Injectable } from '@angular/core';

export interface Products {
  id: number;
  name: any;
  imageUrl: any;
  price: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  horizontals: Products[] = [
    { name: 'HORIZONTAL FEED MIXER 2.5 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor1.jpg', price: 'KZT 990,000.00', id: 11,},
    { name: 'HORIZONTAL FEED MIXER 4 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor2.jpeg', price: 'KZT 990,000.00', id:22},
    { name: 'HORIZONTAL FEED MIXER 5 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor3.jpg',  price: 'KZT 990,000.00', id:33},
    { name: 'HORIZONTAL FEED MIXER 6 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor4.jpg',  price: 'KZT 990,000.00', id: 44,},
    { name: 'HORIZONTAL FEED MIXER 8 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor5.jpg',  price: 'KZT 990,000.00', id: 55},
    { name: 'HORIZONTAL FEED MIXER 10 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor6.jpeg', price: 'KZT 990,000.00', id: 66,},
    { name: 'HORIZONTAL FEED MIXER 12 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor7.jpg',  price: 'KZT 990,000.00', id: 77,},
    { name: 'HORIZONTAL FEED MIXER 14 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor8.jpg',  price: 'KZT 990,000.00', id: 88, },
    { name: 'HORIZONTAL FEED MIXER 16 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor9.jpg',  price: 'KZT 990,000.00', id: 99, },
    { name: 'HORIZONTAL FEED MIXER 20 M3', imageUrl: 'assets/images/product/horizontalfeedmixer/hor10.jpg', price: 'KZT 990,000.00', id: 100, },
    ];

  verticals: any[] = [
    { id: 11, name: 'VERTICAL FEED MIXER 1.5 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver1.jpg', price: 'KZT 990,000.00'},
    { id: 12, name: 'VERTICAL FEED MIXER 3 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver2.jpg',  price: 'KZT 990,000.00'},
    { id: 13, name: 'VERTICAL FEED MIXER 5 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver3.jpg', price: 'KZT 990,000.00'},
    { id: 14, name: 'VERTICAL FEED MIXER 8 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver4.jpg', price: 'KZT 990,000.00' },
    { id: 15, name: 'VERTICAL FEED MIXER 12 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver5.jpg', price: 'KZT 990,000.00'},
    { id: 16, name: 'VERTICAL FEED MIXER 20 M3', imageUrl: 'assets/images/product/verticalfeedmixer/ver6.jpg', price: 'KZT 990,000.00'}
  ];

  augers: any[] = [
    { id: 17, name: 'SINGLE AUGER HORIZANTAL FEED MIXER 4 M3', imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/single-hor01.jpg', price: 'KZT 990,000.00'},
    { id: 18, name: 'SINGLE AUGER HORIZANTAL FEED MIXER 6 M3', imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/single-hor02.jpg', price: 'KZT 990,000.00'},
  ];
  silages: any[] = [
    { id: 19, name: 'MOBILE SILAGE ROUND BALER', imageUrl: 'assets/images/product/silage round baler/silage01.jpg', price: 'KZT 990,000.00'},
    { id: 20, name: 'COMBINE SILAGE ROUND BALER', imageUrl: 'assets/images/product/silage round baler/silage02.jpg', price: 'KZT 990,000.00'}
  ];
  hales: any[] = [
    { id: 21, name: 'Classic Hale Bopp-300 Rake-Ted Combination', imageUrl: 'assets/images/product/Hale bob/hale-bopp01.jpg', price: 'KZT 990,000.00'},
  ];
  getById(id: number){
    return this.horizontals.find(p=>p.id === id)
  }

  constructor() {
  }
}
