import { Injectable } from '@angular/core';

export interface Products {
  imageUrl: any;
  href: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductSliderService {
  horizontals:Products[]=[
      {imageUrl: "assets/images/product/horizontalfeedmixer/hor1.jpg", href: "assets/images/product/horizontalfeedmixer/hor1.jpg" },
      {imageUrl: "assets/images/product/horizontalfeedmixer/hor2.jpeg", href: "assets/images/product/horizontalfeedmixer/hor2.jpeg" },
      {imageUrl: "assets/images/product/horizontalfeedmixer/hor3.jpg", href: "assets/images/product/horizontalfeedmixer/hor3.jpg" },
      {imageUrl: "assets/images/product/horizontalfeedmixer/hor4.jpg", href: "assets/images/product/horizontalfeedmixer/hor4.jpg" },
      {imageUrl: "assets/images/product/horizontalfeedmixer/hor5.jpg", href: "assets/images/product/horizontalfeedmixer/hor5.jpg" },
  ]

  constructor() { }
}
