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
  description?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
// создаем класс объекта horizontals c применением свойств
  horizontals: Product[] = [
    { name: 'КОРМОСМЕСИТЕЛЬ 2.5',
      imageUrl: 'assets/images/product/horizontalfeedmixer/2_5m/1.jpg', price: '990,000.00', id: 1,
      capacity: 2.5, size: '1.49м х 1.72м х 3.55м', power: 40,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/2_5m/2.jpg',
                'assets/images/product/horizontalfeedmixer/2_5m/3.jpg',
                'assets/images/product/horizontalfeedmixer/2_5m/4.jpg'],
    },
    { name: 'КОРМОСМЕСИТЕЛЬ 4',
      imageUrl: 'assets/images/product/horizontalfeedmixer/4_0m/1.jpg', price: '990,000.00', id: 2,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/4_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/4_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/4_0m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/4_0m/5.jpg'],
    },
    { name: 'КОРМОСМЕСИТЕЛЬ 5',
      imageUrl: 'assets/images/product/horizontalfeedmixer/5_0m/1.jpg', price: '990,000.00', id: 3,
      capacity: 5, size: '1.48м х 1.66м х 2.50м', power: 40,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/5_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/5_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/5_0m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/5_0m/5.jpg'],
    },
    { name: 'КОРМОСМЕСИТЕЛЬ 6',
      imageUrl: 'assets/images/product/horizontalfeedmixer/5_0m/1.jpg',  price: '990,000.00', id: 4,
      capacity: 6, size: '1.70м х 1.80м х 3.0м', power: 50,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/6_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/6_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/6_0m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/6_0m/5.jpg'],
    },
    { name: 'КОРМОСМЕСИТЕЛЬ ГОРИЗОНТАЛЬНЫЙ 8',
      imageUrl: 'assets/images/product/horizontalfeedmixer/8_0m/1.jpg',  price: '990,000.00', id: 5,
      capacity: 8, size: '1.86м х 2.0м х 3.0м', power: 60,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/8_0m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/8_0m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/8_0m/4.jpg']
    },
    { name: 'КОРМОСМЕСИТЕЛЬ 10',
      imageUrl: 'assets/images/product/horizontalfeedmixer/10m/1.jpg', price: '990,000.00', id: 6,
      capacity: 10, size: '1.87м х 2.10м х 3.50м', power: 80,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/10m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/10m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/10m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/10m/5.jpg']
    },
    { name: 'КОРМОСМЕСИТЕЛЬ ГОРИЗОНТАЛЬНЫЙ 12',
      imageUrl: 'assets/images/product/horizontalfeedmixer/12m/1.jpg',  price: '990,000.00', id: 7,
      capacity: 12, size: '1.90м х 2.0м х 4.0', power: 80,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/12m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/12m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/12m/4.jpg',
                    'assets/images/product/horizontalfeedmixer/12m/5.jpg']
    },
    { name: 'КОРМОСМЕСИТЕЛЬ 14',
      imageUrl: 'assets/images/product/horizontalfeedmixer/14m/1.jpg',  price: '990,000.00', id: 8,
      capacity: 14, size: '1.90м х 2.1м х 4.35', power: 80,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/14m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/14m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/14m/4.jpg']
    },
    { name: 'КОРМОСМЕСИТЕЛЬ 16',
      imageUrl: 'assets/images/product/horizontalfeedmixer/16m/1.jpg',  price: '990,000.00', id: 9,
      capacity: 16, size: '2.28м х 2.3м х 4.0', power: 85,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/16m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/16m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/16m/4.jpg']
    },
    { name: 'КОРМОСМЕСИТЕЛЬ 20',
      imageUrl: 'assets/images/product/horizontalfeedmixer/20m/1.jpg',  price: '990,000.00', id: 10,
      capacity: 20, size: '2.2м х 2.3м х 5.0', power: 100,
      description: 'Кормосмесители являются очень важной частью животноводческих ферм, производя однородные корма для животных. Миксер для кормораздатчика позволяет быстро разрезать тюки с помощью специально легированных ножей, однородно смешивая грубые корма и концентрированные корма благодаря своей конструкции корпуса. Корпус питателя-смесителя также разработан для уменьшения количества пищи, оставшейся после доставки.',
      extraImages: ['assets/images/product/horizontalfeedmixer/20m/2.jpg',
                    'assets/images/product/horizontalfeedmixer/20m/3.jpg',
                    'assets/images/product/horizontalfeedmixer/20m/4.jpg']
    },
  ];

  verticals: Product[] = [
  { name: 'ВЕРТИКАЛЬНЫЙ КОРМОСМЕСИТЕЛЬ 1.5',
    imageUrl: 'assets/images/product/verticalfeedmixer/1_5m/1.jpg', price: '100,000.00',  id: 11,
    capacity: 1.5, size: '1.10м х 1.10м х 1.70м', power: 20,
    description: 'Вертикальные смесители-питатели Tosun с запатентованной конструкцией шнекового типа обеспечивают более измельченную подачу и более однородную подачу. Благодаря уменьшенной высоте шасси, обеспечивается простота использования для оператора.',
    extraImages: ['assets/images/product/horizontalfeedmixer/20m/2.jpg',
                'assets/images/product/horizontalfeedmixer/20m/3.jpg',
                'assets/images/product/horizontalfeedmixer/20m/4.jpg']},
  { name: 'ВЕРТИКАЛЬНЫЙ КОРМОСМЕСИТЕЛЬ 3.0',
    imageUrl: 'assets/images/product/verticalfeedmixer/3m/1.jpg', price: '990,000.00',  id: 12,
    description: 'Вертикальные смесители-питатели Tosun с запатентованной конструкцией шнекового типа обеспечивают более измельченную подачу и более однородную подачу. Благодаря уменьшенной высоте шасси, обеспечивается простота использования для оператора.',
    capacity: 3.0, size: '1.50м х 1.20м х 2.30м', power: 35,
    extraImages: ['assets/images/product/verticalfeedmixer/3m/2.jpg',
                  'assets/images/product/verticalfeedmixer/3m/3.jpg',
                  'assets/images/product/verticalfeedmixer/3m/4.jpg']},
  { name: 'ВЕРТИКАЛЬНЫЙ КОРМОСМЕСИТЕЛЬ 5.1',
    imageUrl: 'assets/images/product/verticalfeedmixer/5_1m/1.jpg', price: '990,000.00',  id: 13,
    description: 'Вертикальные смесители-питатели Tosun с запатентованной конструкцией шнекового типа обеспечивают более измельченную подачу и более однородную подачу. Благодаря уменьшенной высоте шасси, обеспечивается простота использования для оператора.',
    extraImages: ['assets/images/product/verticalfeedmixer/5_1m/2.jpg',
                  'assets/images/product/verticalfeedmixer/5_1m/3.jpg',
                  'assets/images/product/verticalfeedmixer/5_1m/4.jpg',
                  'assets/images/product/verticalfeedmixer/5_1m/3.jpg']},
  { name: 'ВЕРТИКАЛЬНЫЙ КОРМОСМЕСИТЕЛЬ 8.0',
    imageUrl: 'assets/images/product/verticalfeedmixer/8m/1.jpg', price: '990,000.00',  id: 14,
    description: 'Вертикальные смесители-питатели Tosun с запатентованной конструкцией шнекового типа обеспечивают более измельченную подачу и более однородную подачу. Благодаря уменьшенной высоте шасси, обеспечивается простота использования для оператора.',
    extraImages: ['assets/images/product/verticalfeedmixer/8m/2.jpg',
                  'assets/images/product/verticalfeedmixer/8m/3.jpg',
                  'assets/images/product/verticalfeedmixer/8/4.jpg',
                  'assets/images/product/verticalfeedmixer/8m/3.jpg']},
  { name: 'ВЕРТИКАЛЬНЫЙ КОРМОСМЕСИТЕЛЬ 12.0',
    imageUrl: 'assets/images/product/verticalfeedmixer/12m/1.jpg', price: '990,000.00',  id: 15,
    description: 'Вертикальные смесители-питатели Tosun с запатентованной конструкцией шнекового типа обеспечивают более измельченную подачу и более однородную подачу. Благодаря уменьшенной высоте шасси, обеспечивается простота использования для оператора.',
    extraImages: ['assets/images/product/verticalfeedmixer/12m/2.jpg',
                  'assets/images/product/verticalfeedmixer/12m/3.jpg',
                  'assets/images/product/verticalfeedmixer/12/4.jpg']},
    { name: 'ВЕРТИКАЛЬНЫЙ КОРМОСМЕСИТЕЛЬ 20.0',
      imageUrl: 'assets/images/product/verticalfeedmixer/20m/1.jpg', price: '990,000.00',  id: 16,
    description: 'Вертикальные смесители-питатели Tosun с запатентованной конструкцией шнекового типа обеспечивают более измельченную подачу и более однородную подачу. Благодаря уменьшенной высоте шасси, обеспечивается простота использования для оператора.',
      extraImages: ['assets/images/product/verticalfeedmixer/20m/2.jpg',
                    'assets/images/product/verticalfeedmixer/20m/3.jpg',
                    'assets/images/product/verticalfeedmixer/20/4.jpg',
                    'assets/images/product/verticalfeedmixer/20m/5.jpg']},
  ];

  augers: any[] = [
    { name: 'Кормораздатчик c одиночным шнеком 4',
      imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/4m/1.jpg', price: '990,000.00', id: 17,
      extraImages: ['assets/images/product/Single Auger Horizantal Feed Mixer/4m/2.jpg',
                  'assets/images/product/Single Auger Horizantal Feed Mixer/4m/3.jpg',
                  'assets/images/product/Single Auger Horizantal Feed Mixer/4m/4.jpg',
                  'assets/images/product/Single Auger Horizantal Feed Mixer/4m/5.jpg']},

    { name: 'Кормораздатчик c одиночным шнеком 6',
      imageUrl: 'assets/images/product/Single Auger Horizantal Feed Mixer/6m/1.jpeg', price: '990,000.00', id: 18,
      extraImages: ['assets/images/product/Single Auger Horizantal Feed Mixer/6m/2.jpeg',
                    'assets/images/product/Single Auger Horizantal Feed Mixer/6m/3.jpeg',
                    'assets/images/product/Single Auger Horizantal Feed Mixer/6m/4.jpeg']},
  ];
  silages: any[] = [
    {name: 'MOBILE SILAGE ROUND BALER',
    imageUrl: 'assets/images/product/silage round baler/6m/1.jpg', price: '990,000.00', id: 19,
    extraImages: ['assets/images/product/silage round baler/6m/2.jpg',
                    'assets/images/product/silage round baler/6m/3.jpg',
                    'assets/images/product/silage round baler/6m/4.jpg',
                    'assets/images/product/silage round baler/6m/5.jpg']},
    {name: 'MOBILE SILAGE ROUND BALER 3000',
    imageUrl: 'assets/images/product/silage round baler/8m/1.jpg', price: '990,000.00', id: 20,
    extraImages: ['assets/images/product/silage round baler/8m/2.jpg',
                    'assets/images/product/silage round baler/8m/3.jpg',
                    'assets/images/product/silage round baler/8m/4.jpg',
                    'assets/images/product/silage round baler/8m/5.jpg']}
  ];
  others: any[] = [
    {name: 'Classic Hale Bopp-300 Rake-Ted Combination',
    imageUrl: 'assets/images/product/Other Products/Hale bob/hale-bopp01.jpg', price: '990,000.00', id: 21,
    extraImages: ['assets/images/product/Other Products/Hale bob/hale-bopp02.jpg',
                  'assets/images/product/Other Products/Hale bob/hale-bopp03.jpg',
                  'assets/images/product/Other Products/Hale bob/hale-bopp04.jpg',
                  'assets/images/product/Other Products/Hale bob/hale-bopp05.jpg']},
    {name: 'Stationary Angled Feed Mixers',
    imageUrl: 'assets/images/product/Other Products/Stationary Angled Feed Mixers/1.jpg', price: '990,000.00', id: 22,
    extraImages: ['assets/images/product/Other Products/Stationary Angled Feed Mixers/2.jpg',
                  'assets/images/product/Other Products/Stationary Angled Feed Mixers/3.jpg',
                  'assets/images/product/Other Products/Stationary Angled Feed Mixers/4.jpg']},
    {name: 'Maize Chopper',
    imageUrl: 'assets/images/product/Other Products/maize-chopper/1.jpg', price: '990,000.00', id: 23,
    extraImages: ['assets/images/product/Other Products/maize-chopper/2.jpg',
                  'assets/images/product/Other Products/maize-chopper/3.jpg',
                  'assets/images/product/Other Products/maize-chopper/4.jpg',
                  'assets/images/product/Other Products/maize-chopper/5.jpg']},
    {name: 'Forage Harvester',
    imageUrl: 'assets/images/product/Other Products/forage-harvester/1.jpg', price: '990,000.00', id: 24,
    extraImages: ['assets/images/product/Other Products/forage-harvester/2.jpg',
                  'assets/images/product/Other Products/forage-harvester/3.jpg',
                  'assets/images/product/Other Products/forage-harvester/4.jpg',
                  'assets/images/product/Other Products/forage-harvester/5.jpg']},
    {name: 'Liquid Manure Spreader',
    imageUrl: 'assets/images/product/Other Products/liquid-manure/1.jpg', price: '990,000.00', id: 25,
    extraImages: ['assets/images/product/Other Products/liquid-manure/2.jpg',
                  'assets/images/product/Other Products/liquid-manure/3.jpg',
                  'assets/images/product/Other Products/liquid-manure/4.jpg',
                  'assets/images/product/Other Products/liquid-manure/5.jpg']},
    {name: 'Manure Pump',
    imageUrl: 'assets/images/product/Other Products/manure-pump/1.jpeg', price: '990,000.00', id: 26,
    extraImages: ['assets/images/product/Other Products/manure-pump/2.jpeg',
                  'assets/images/product/Other Products/manure-pump/3.jpeg',
                  'assets/images/product/Other Products/manure-pump/4.jpeg',
                  'assets/images/product/Other Products/manure-pump/5.jpeg']},
    {name: 'Manure Scraper Systemp',
    imageUrl: 'assets/images/product/Other Products/manure-scraper-system/1.jpg', price: '990,000.00', id: 27,
    extraImages: ['assets/images/product/Other Products/manure-scraper-system/2.jpg']},
    {name: 'Rotary Rake With 9 Arms',
    imageUrl: 'assets/images/product/Other Products/rotary-rake-with/1.jpg', price: '990,000.00', id: 28,
    extraImages: ['assets/images/product/Other Products/rotary-rake-with/2.jpg',
                  'assets/images/product/Other Products/rotary-rake-with/3.jpg',
                  'assets/images/product/Other Products/rotary-rake-with/4.jpg',
                  'assets/images/product/Other Products/rotary-rake-with/5.jpg']},
    {name: '2 Row-Row Independent Maize Chopper',
    imageUrl: 'assets/images/product/Other Products/row-independent-maize/1.jpg', price: '990,000.00', id: 29,
    extraImages: ['assets/images/product/Other Products/row-independent-maize/2.jpg',
                  'assets/images/product/Other Products/row-independent-maize/3.jpg',
                  'assets/images/product/Other Products/row-independent-maize/4.jpg']},
    {name: 'Garden-Greenhouse Self Loading Manure Spreader',
    imageUrl: 'assets/images/product/Other Products/greenhouse-self/1.jpeg', price: '990,000.00', id: 30,
    extraImages: ['assets/images/product/Other Products/greenhouse-self/2.jpeg',
                  'assets/images/product/Other Products/greenhouse-self/3.jpeg',
                  'assets/images/product/Other Products/greenhouse-self/4.jpeg',
                  'assets/images/product/Other Products/greenhouse-self/5.jpeg']},
    {name: 'Automatic Stationary Bale Wrapper',
    imageUrl: 'assets/images/product/Other Products/automatic-stationary-bale/1.jpeg', price: '990,000.00', id: 31,
    extraImages: ['assets/images/product/Other Products/automatic-stationary-bale/2.jpeg',
                  'assets/images/product/Other Products/automatic-stationary-bale/3.jpeg',
                  'assets/images/product/Other Products/automatic-stationary-bale/4.jpeg',
                  'assets/images/product/Other Products/automatic-stationary-bale/5.jpeg']},
  ];

  getById(id: number) {
    return this.verticals.find(p => p.id === id) ||
    this.horizontals.find (p => p.id === id) ||
    this.augers.find (p => p.id === id) || this.silages.find (p => p.id === id) || this.others.find (p => p.id === id)
  }
  constructor() {
  }
}
