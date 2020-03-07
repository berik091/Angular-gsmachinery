import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  active = 1;
  @Input() furniture;
  @Input() decorative;
  @Input() lighting;
  @Input() outdoor;
  @Input() storage;

    furnitures: any[]= [
      {
      id:1,
      name: "Classic Wardrobe",
      imageUrl: 'assets/images/product/p-1.jpg',
      discount: '-50%',
      price: '40$'
    },
    {
      id:2,
      name: "Touchwood Chaira",
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-55%',
      price: '129$'
    },
    {
      id:3,
      name: "Classic Wardrobe",
      imageUrl: 'assets/images/product/p-3.jpg',
      discount: '-60%',
      price: '49$'
    },
    {
      id:4,
      name: "Classic Wardrobe",
      imageUrl: 'assets/images/product/p-2.jpg',
      discount: '-50%',
      price: '59$'
    },
    {
      id:5,
      name: "Touchwood Chaira",
      imageUrl: 'assets/images/product/p-3.jpg',
      discount: '-55%',
      price: '59$'
    },
    {
      id:6,
      name: "Classic Wardrobe",
      imageUrl: 'assets/images/product/p-1.jpg',
      discount: '-60%',
      price: '79$'
    },
  ];

    decoratives:any[]=[
      {
        id:1,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-10%',
        price: '50$'
      },
      {
        id:2,
        name: "Touchwood Chaira",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-55%',
        price: '129$'
      },
      {
        id:3,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-60%',
        price: '49$'
      },
      {
        id:4,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-50%',
        price: '59$'
      },
      {
        id:5,
        name: "Touchwood Chaira",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-55%',
        price: '59$'
      },
      {
        id:6,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-1.jpg',
        discount: '-60%',
        price: '79$'
      },
    ]

    lightings:any[]=[
      {
        id:1,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-100%',
        price: '50$'
      },
      {
        id:2,
        name: "Touchwood Chaira",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-55%',
        price: '129$'
      },
      {
        id:3,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-60%',
        price: '49$'
      },
      {
        id:4,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-50%',
        price: '59$'
      },
      {
        id:5,
        name: "Touchwood Chaira",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-55%',
        price: '59$'
      },
      {
        id:6,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-1.jpg',
        discount: '-60%',
        price: '79$'
      },
    ]

    outdoors:any[]=[
      {
        id:1,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-1.jpg',
        discount: '-90%',
        price: '50$'
      },
      {
        id:2,
        name: "Touchwood Chaira",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-55%',
        price: '129$'
      },
      {
        id:3,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-60%',
        price: '49$'
      },
      {
        id:4,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-50%',
        price: '59$'
      },
      {
        id:5,
        name: "Touchwood Chaira",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-55%',
        price: '59$'
      },
      {
        id:6,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-1.jpg',
        discount: '-60%',
        price: '79$'
      },
    ]
    storages:any[]=[
      {
        id:1,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-1.jpg',
        discount: '-90%',
        price: '50$'
      },
      {
        id:2,
        name: "Touchwood",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-20%',
        price: '19$'
      },
      {
        id:3,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-60%',
        price: '49$'
      },
      {
        id:4,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-2.jpg',
        discount: '-50%',
        price: '59$'
      },
      {
        id:5,
        name: "Touchwood Chaira",
        imageUrl: 'assets/images/product/p-3.jpg',
        discount: '-55%',
        price: '59$'
      },
      {
        id:6,
        name: "Classic Wardrobe",
        imageUrl: 'assets/images/product/p-1.jpg',
        discount: '-60%',
        price: '79$'
      },
    ]

  constructor() { }

  ngOnInit(): void {}
  }