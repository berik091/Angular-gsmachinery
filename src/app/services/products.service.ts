import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// создаем объект Product и этот обект имеет свойство id, name, imageUrl, price
export interface Product {
  id: number;
  name: string;
  imageUrl: any;
  price: any;
  extraImages?: string[];
  capacity?: number;
  size?: any;
  power?: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
// создаем класс объекта horizontals c применением свойств
   horizontals: Product[] = [
    { name: 'HORIZONTAL FEED MIXER 2.5',
      imageUrl: 'assets/images/product/horizontalfeedmixer/2_5m/1.jpg', price: '990,000.00', id: 11,
      capacity: 2.5, size: '1.49м х 1.72м х 3.55м', power: 40,
      extraImages: ['assets/images/product/horizontalfeedmixer/2_5m/2.jpg',
                'assets/images/product/horizontalfeedmixer/2_5m/3.jpg',
                'assets/images/product/horizontalfeedmixer/2_5m/4.jpg'],
    },
    { name: 'HORIZONTAL FEED MIXER 4',
      imageUrl: 'assets/images/product/horizontalfeedmixer/4_0m/1.jpg', price: '990,000.00', id: 22,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/horizontalfeedmixer/4_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/4_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/4_0m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/4_0m/5.jpg'],
    },
    { name: 'HORIZONTAL FEED MIXER 5',
      imageUrl: 'assets/images/product/horizontalfeedmixer/5_0m/1.jpg', price: '990,000.00', id: 33,
      capacity: 5, size: '1.48м х 1.66м х 2.50м', power: 40,
      extraImages: ['assets/images/product/horizontalfeedmixer/5_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/5_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/5_0m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/5_0m/5.jpg'],
    },
    { name: 'HORIZONTAL FEED MIXER 6',
      imageUrl: 'assets/images/product/horizontalfeedmixer/5_0m/1.jpg',  price: '990,000.00', id: 44,
      capacity: 6, size: '1.70м х 1.80м х 3.0м', power: 50,
      extraImages: ['assets/images/product/horizontalfeedmixer/6_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/6_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/6_0m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/6_0m/5.jpg'],
    },
    { name: 'HORIZONTAL FEED MIXER 8',
      imageUrl: 'assets/images/product/horizontalfeedmixer/8_0m/1.jpg',  price: '990,000.00', id: 55,
      capacity: 8, size: '1.86м х 2.0м х 3.0м', power: 60,
      extraImages: ['assets/images/product/horizontalfeedmixer/8_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/8_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/8_0m/4.jpg']
    },
    { name: 'HORIZONTAL FEED MIXER 10',
      imageUrl: 'assets/images/product/horizontalfeedmixer/10m/1.jpg', price: '990,000.00', id: 66,
      capacity: 10, size: '1.87м х 2.10м х 3.50м', power: 80,
      extraImages: ['assets/images/product/horizontalfeedmixer/10m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/10m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/10m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/10m/5.jpg']
    },
    { name: 'HORIZONTAL FEED MIXER 12',
      imageUrl: 'assets/images/product/horizontalfeedmixer/12m/1.jpg',  price: '990,000.00', id: 77,
      capacity: 12, size: '1.90м х 2.0м х 4.0', power: 80,
      extraImages: ['assets/images/product/horizontalfeedmixer/12m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/12m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/12m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/12m/5.jpg']
    },
    { name: 'HORIZONTAL FEED MIXER 14',
      imageUrl: 'assets/images/product/horizontalfeedmixer/14m/1.jpg',  price: '990,000.00', id: 88,
      capacity: 14, size: '1.90м х 2.1м х 4.35', power: 80,
      extraImages: ['assets/images/product/horizontalfeedmixer/14m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/14m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/14m/4.jpg']
    },
    { name: 'HORIZONTAL FEED MIXER 16',
      imageUrl: 'assets/images/product/horizontalfeedmixer/16m/1.jpg',  price: '990,000.00', id: 99,
      capacity: 16, size: '2.28м х 2.3м х 4.0', power: 85,
      extraImages: ['assets/images/product/horizontalfeedmixer/16m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/16m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/16m/4.jpg']
    },
    { name: 'HORIZONTAL FEED MIXER 20',
      imageUrl: 'assets/images/product/horizontalfeedmixer/20m/1.jpg',  price: '990,000.00', id: 100,
      capacity: 20, size: '2.2м х 2.3м х 5.0', power: 100,
      extraImages: ['assets/images/product/horizontalfeedmixer/20m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/20m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/20m/4.jpg']
    },
  ];

    verticals: Product[] = [
    { name: 'VERTICAL FEED MIXER 1.55 M3',
      imageUrl: 'assets/images/product/verticalfeedmixer/1_5m/1.jpg', price: 'KZT 100,000.00',  id: 110,
      extraImages: ['assets/images/product/horizontalfeedmixer/20m/2.jpg',
                  'assets/images/product/horizontalfeedmixer/20m/3.jpg',
                  'assets/images/product/horizontalfeedmixer/20m/4.jpg']},
    { name: 'VERTICAL FEED MIXER 3.0 M3',
      imageUrl: 'assets/images/product/verticalfeedmixer/3m/1.jpg', price: 'KZT 990,000.00',  id: 120,
      extraImages: ['assets/images/product/verticalfeedmixer/3m/2.jpg',
                    'assets/images/product/verticalfeedmixer/3m/3.jpg',
                    'assets/images/product/verticalfeedmixer/3m/4.jpg']},
    { name: 'VERTICAL FEED MIXER 5.1 M3',
      imageUrl: 'assets/images/product/verticalfeedmixer/5_1m/1.jpg', price: 'KZT 990,000.00',  id: 130,
      extraImages: ['assets/images/product/verticalfeedmixer/5_1m/2.jpg',
                    'assets/images/product/verticalfeedmixer/5_1m/3.jpg',
                    'assets/images/product/verticalfeedmixer/5_1m/4.jpg',
                    'assets/images/product/verticalfeedmixer/5_1m/3.jpg']},
    { name: 'VERTICAL FEED MIXER 8.0 M3',
      imageUrl: 'assets/images/product/verticalfeedmixer/8m/1.jpg', price: 'KZT 990,000.00',  id: 140,
      extraImages: ['assets/images/product/verticalfeedmixer/8m/2.jpg',
                    'assets/images/product/verticalfeedmixer/8m/3.jpg',
                    'assets/images/product/verticalfeedmixer/8/4.jpg',
                    'assets/images/product/verticalfeedmixer/8m/3.jpg']},
    { name: 'VERTICAL FEED MIXER 12.0 M3',
      imageUrl: 'assets/images/product/verticalfeedmixer/12m/1.jpg', price: 'KZT 990,000.00',  id: 150,
      extraImages: ['assets/images/product/verticalfeedmixer/12m/2.jpg',
                    'assets/images/product/verticalfeedmixer/12m/3.jpg',
                    'assets/images/product/verticalfeedmixer/12/4.jpg']},
      { name: 'VERTICAL FEED MIXER 20.0 M3',
        imageUrl: 'assets/images/product/verticalfeedmixer/20m/1.jpg', price: 'KZT 990,000.00',  id: 160,
        extraImages: ['assets/images/product/verticalfeedmixer/20m/2.jpg',
                      'assets/images/product/verticalfeedmixer/20m/3.jpg',
                      'assets/images/product/verticalfeedmixer/20/4.jpg',
                      'assets/images/product/verticalfeedmixer/20m/5.jpg']},
    ];

  augers: any[] = [
     { name: 'SINGLE AUGER HORIZANTAL FEED MIXER 4 M3', 
       imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/single-hor01.jpg', price: ' 990,000.00', id: 170,
       extraImages: ['assets/images/product/verticalfeedmixer/20m/2.jpg',
                    'assets/images/product/verticalfeedmixer/20m/3.jpg',
                    'assets/images/product/verticalfeedmixer/20/4.jpg',
                    'assets/images/product/verticalfeedmixer/20m/5.jpg']},

    { name: 'SINGLE AUGER HORIZANTAL FEED MIXER 6 M3', 
      imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/single-hor02.jpg', price: 'KZT 990,000.00', id: 180,
      extraImages: ['assets/images/product/verticalfeedmixer/20m/2.jpg',
                    'assets/images/product/verticalfeedmixer/20m/3.jpg',
                    'assets/images/product/verticalfeedmixer/20/4.jpg',
                    'assets/images/product/verticalfeedmixer/20m/5.jpg']},
  ];
  silages: any[] = [
    {name: 'MOBILE SILAGE ROUND BALER', 
    imageUrl: 'assets/images/product/silage round baler/silage01.jpg', price: 'KZT 990,000.00', id: 19, 
    extraImages: ['assets/images/product/verticalfeedmixer/20m/2.jpg',
                    'assets/images/product/verticalfeedmixer/20m/3.jpg',
                    'assets/images/product/verticalfeedmixer/20/4.jpg',
                    'assets/images/product/verticalfeedmixer/20m/5.jpg']},
    { id: 20, name: 'COMBINE SILAGE ROUND BALER', imageUrl: 'assets/images/product/silage round baler/silage02.jpg', price: 'KZT 990,000.00'}
  ];
  hales: any[] = [
    {name: 'Classic Hale Bopp-300 Rake-Ted Combination', 
    imageUrl: 'assets/images/product/Hale bob/hale-bopp01.jpg', price: 'KZT 990,000.00', id: 21, 
    extraImages: ['assets/images/product/verticalfeedmixer/20m/2.jpg',
                  'assets/images/product/verticalfeedmixer/20m/3.jpg',
                  'assets/images/product/verticalfeedmixer/20/4.jpg',
                  'assets/images/product/verticalfeedmixer/20m/5.jpg']}
  ];

  getById(id: number){
    return this.verticals.find(p=>p.id === id) || 
    this.horizontals.find (p =>p.id === id) || 
    this.augers.find (p =>p.id === id) || this.silages.find (p =>p.id === id) || this.hales.find (p =>p.id === id) 
  }
  constructor() {
  } 
}
