import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  name: string;
  imageUrl: any;
  price: any;
  extraImages?: string[];
  capacity?: number;
  size?: any;
  power?: number;
  description?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsHmsService {

  horizontals: Item[] = [
  { name: 'Разбрасыватель удобрений S 900',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s900/1.png', price: '990,000.00', id: 300,
    capacity: 2.5, size: '2.0м х 1.0м х 1.32м', power: 40,
    description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s900/2.png',
              'assets/images/product/Product HMS/HORIZONTAL MIXER/s900/3.png',
              'assets/images/product/Product HMS/HORIZONTAL MIXER/s900/4.png'],
  },
  { name: 'Разбрасыватель удобрений S 1200',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/3.png', price: '990,000.00', id: 301,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/1.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/4.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/5.png'],
  },
  { name: 'Разбрасыватель удобрений S 1500',
  imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/1.png', price: '990,000.00', id: 302,
  capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
  extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/2.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/3.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/4.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/5.png'],
  },
  { name: 'Разбрасыватель удобрений S 1800',
  imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/1.png', price: '990,000.00', id: 303,
  capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
  extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/2.png',
              'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/3.png',
              'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/4.png',
              'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/5.png'],
  },
    { name: 'Разбрасыватель удобрений S 2000',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/1.png', price: '990,000.00', id: 304,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/4.png'],
    },
    { name: 'Разбрасыватель удобрений S 2500',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/1.png', price: '990,000.00', id: 305,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/4.png'],
    },
    { name: 'Разбрасыватель удобрений S 3000',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/1.png', price: '990,000.00', id: 306,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/4.png'],
    },
    { name: 'Разбрасыватель удобрений S 3500',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/1.png', price: '990,000.00', id: 307,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/4.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/5.png'],
    },
    { name: 'Разбрасыватель удобрений S 2000 maxi',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/1.png', price: '990,000.00', id: 308,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/4.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/5.png'],
    },
    { name: 'Разбрасыватель удобрений S 2500 maxi',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/1.png', price: '990,000.00', id: 309,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/4.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/5.png'],
    },
    { name: 'Разбрасыватель удобрений S 3000 Maxi',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/1.png', price: '990,000.00', id: 310,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/4.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/5.png'],
    },
    { name: 'Разбрасыватель удобрений S 2500 Twin',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500twin/1.png', price: '990,000.00', id: 311,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2500twin/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500twin/3.png'],
    },
    { name: 'Разбрасыватель удобрений S 3000 Twin',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000twin/1.png', price: '990,000.00', id: 312,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3000twin/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000twin/3.png'],
    },
    { name: 'Разбрасыватель удобрений S 3500 Twin',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500twin/1.png', price: '990,000.00', id: 313,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3500twin/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500twin/3.png'],
    }
  ];

  verticals: Item[] = [
  { name: 'Разбрасыватель удобрений A 650',
    imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A650/1.png', price: '100,000.00', id: 314,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A650/2.png',
                'assets/images/product/Product HMS/VERTICAL MIXER/A650/3.png',
                'assets/images/product/Product HMS/VERTICAL MIXER/A650/4.png']},
  { name: 'Разбрасыватель удобрений A 850',
  imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A850/1.png', price: '100,000.00', id: 315,
  capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
  extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A850/2.png',
              'assets/images/product/Product HMS/VERTICAL MIXER/A850/3.png',
              'assets/images/product/Product HMS/VERTICAL MIXER/A850/4.png']},
  { name: 'Разбрасыватель удобрений A 1000',
  imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A1000/1.png', price: '100,000.00', id: 316,
  capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
  extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A1000/2.png',
              'assets/images/product/Product HMS/VERTICAL MIXER/A1000/3.png',
              'assets/images/product/Product HMS/VERTICAL MIXER/A1000/4.png',
              'assets/images/product/Product HMS/VERTICAL MIXER/A1000/5.png']},
  { name: 'Разбрасыватель удобрений A 1200',
  imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A1200/1.png', price: '100,000.00', id: 317,
  capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
  extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A1200/2.png',
              'assets/images/product/Product HMS/VERTICAL MIXER/A1200/3.png']},
  ];

  augers: Item[] = [
     { name: 'SINGLE AUGER HORIZANTAL FEED MIXER 4 M3',
       imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/4m/1.jpg', price: ' 990,000.00', id: 170,
       extraImages: ['assets/images/product/Single Auger Horizantal Feed Mixer/4m/2.jpg',
                    'assets/images/product/Single Auger Horizantal Feed Mixer/4m/3.jpg',
                    'assets/images/product/Single Auger Horizantal Feed Mixer/4m/4.jpg',
                    'assets/images/product/Single Auger Horizantal Feed Mixer/4m/5.jpg']},

    { name: 'SINGLE AUGER HORIZANTAL FEED MIXER 6 M3',
      imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/6m/1.jpeg', price: 'KZT 990,000.00', id: 180,
      extraImages: ['assets/images/product/Single Auger Horizantal Feed Mixer/6m/2.jpeg',
                    'assets/images/product/Single Auger Horizantal Feed Mixer/6m/3.jpeg',
                    'assets/images/product/Single Auger Horizantal Feed Mixer/6m/4.jpeg']},
  ];
  silages: Item[] = [
    {name: 'MOBILE SILAGE ROUND BALER',
    imageUrl: 'assets/images/product/silage round baler/6m/1.jpg', price: '990,000.00', id: 19,
    extraImages: ['assets/images/product/silage round baler/6m/2.jpg',
                    'assets/images/product/silage round baler/6m/3.jpg',
                    'assets/images/product/silage round baler/6m/4.jpg',
                    'assets/images/product/silage round baler/6m/5.jpg']},
    {name: 'MOBILE SILAGE ROUND BALER 3000',
    imageUrl: 'assets/images/product/silage round baler/8m/1.jpg', price: '990,000.00', id: 200,
    extraImages: ['assets/images/product/silage round baler/8m/2.jpg',
                    'assets/images/product/silage round baler/8m/3.jpg',
                    'assets/images/product/silage round baler/8m/4.jpg',
                    'assets/images/product/silage round baler/8m/5.jpg']}
  ];
  others: Item[] = [
    {name: 'Classic Hale Bopp-300 Rake-Ted Combination',
    imageUrl: 'assets/images/product/Other Products/Hale bob/hale-bopp01.jpg', price: '990,000.00', id: 21,
    extraImages: ['assets/images/product/Other Products/Hale bob/hale-bopp02.jpg',
                  'assets/images/product/Other Products/Hale bob/hale-bopp03.jpg',
                  'assets/images/product/Other Products/Hale bob/hale-bopp04.jpg',
                  'assets/images/product/Other Products/Hale bob/hale-bopp05.jpg']},
    {name: 'Stationary Angled Feed Mixers',
    imageUrl: 'assets/images/product/Other Products/Stationary Angled Feed Mixers/1.jpg', price: '990,000.00', id: 210,
    extraImages: ['assets/images/product/Other Products/Stationary Angled Feed Mixers/2.jpg',
                  'assets/images/product/Other Products/Stationary Angled Feed Mixers/3.jpg',
                  'assets/images/product/Other Products/Stationary Angled Feed Mixers/4.jpg']},
    {name: 'Maize Chopper',
    imageUrl: 'assets/images/product/Other Products/maize-chopper/1.jpg', price: '990,000.00', id: 220,
    extraImages: ['assets/images/product/Other Products/maize-chopper/2.jpg',
                  'assets/images/product/Other Products/maize-chopper/3.jpg',
                  'assets/images/product/Other Products/maize-chopper/4.jpg',
                  'assets/images/product/Other Products/maize-chopper/5.jpg']},
    {name: 'Forage Harvester',
    imageUrl: 'assets/images/product/Other Products/forage-harvester/1.jpg', price: '990,000.00', id: 230,
    extraImages: ['assets/images/product/Other Products/forage-harvester/2.jpg',
                  'assets/images/product/Other Products/forage-harvester/3.jpg',
                  'assets/images/product/Other Products/forage-harvester/4.jpg',
                  'assets/images/product/Other Products/forage-harvester/5.jpg']},
    {name: 'Liquid Manure Spreader',
    imageUrl: 'assets/images/product/Other Products/liquid-manure/1.jpg', price: '990,000.00', id: 235,
    extraImages: ['assets/images/product/Other Products/liquid-manure/2.jpg',
                  'assets/images/product/Other Products/liquid-manure/3.jpg',
                  'assets/images/product/Other Products/liquid-manure/4.jpg',
                  'assets/images/product/Other Products/liquid-manure/5.jpg']},
    {name: 'Manure Pump',
    imageUrl: 'assets/images/product/Other Products/manure-pump/1.jpeg', price: '990,000.00', id: 240,
    extraImages: ['assets/images/product/Other Products/manure-pump/2.jpeg',
                  'assets/images/product/Other Products/manure-pump/3.jpeg',
                  'assets/images/product/Other Products/manure-pump/4.jpeg',
                  'assets/images/product/Other Products/manure-pump/5.jpeg']},
    {name: 'Manure Scraper Systemp',
    imageUrl: 'assets/images/product/Other Products/manure-scraper-system/1.jpg', price: '990,000.00', id: 250,
    extraImages: ['assets/images/product/Other Products/manure-scraper-system/2.jpg']},
    {name: 'Rotary Rake With 9 Arms',
    imageUrl: 'assets/images/product/Other Products/rotary-rake-with/1.jpg', price: '990,000.00', id: 260,
    extraImages: ['assets/images/product/Other Products/rotary-rake-with/2.jpg',
                  'assets/images/product/Other Products/rotary-rake-with/3.jpg',
                  'assets/images/product/Other Products/rotary-rake-with/4.jpg',
                  'assets/images/product/Other Products/rotary-rake-with/5.jpg']},
    {name: '2 Row-Row Independent Maize Chopper',
    imageUrl: 'assets/images/product/Other Products/row-independent-maize/1.jpg', price: '990,000.00', id: 270,
    extraImages: ['assets/images/product/Other Products/row-independent-maize/2.jpg',
                  'assets/images/product/Other Products/row-independent-maize/3.jpg',
                  'assets/images/product/Other Products/row-independent-maize/4.jpg']},
    {name: 'Garden-Greenhouse Self Loading Manure Spreader',
    imageUrl: 'assets/images/product/Other Products/greenhouse-self/1.jpeg', price: '990,000.00', id: 280,
    extraImages: ['assets/images/product/Other Products/greenhouse-self/2.jpeg',
                  'assets/images/product/Other Products/greenhouse-self/3.jpeg',
                  'assets/images/product/Other Products/greenhouse-self/4.jpeg',
                  'assets/images/product/Other Products/greenhouse-self/5.jpeg']},
    {name: 'Automatic Stationary Bale Wrapper',
    imageUrl: 'assets/images/product/Other Products/automatic-stationary-bale/1.jpeg', price: '990,000.00', id: 290,
    extraImages: ['assets/images/product/Other Products/automatic-stationary-bale/2.jpeg',
                  'assets/images/product/Other Products/automatic-stationary-bale/3.jpeg',
                  'assets/images/product/Other Products/automatic-stationary-bale/4.jpeg',
                  'assets/images/product/Other Products/automatic-stationary-bale/5.jpeg']},
  ];

  getById(id: number) {
    return this.verticals.find(p => p.id === id) || this.horizontals.find (p => p.id === id) ||
    this.augers.find (p => p.id === id) || this.silages.find (p => p.id === id) || this.others.find (p => p.id === id)
  }
  constructor() {
  }
}
