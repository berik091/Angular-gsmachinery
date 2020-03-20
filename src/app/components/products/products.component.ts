import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

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

  horizontals = {};
  verticals = {};
  augers = {};
  silages = {};
  hales = {};

  constructor(private productsService: ProductsService) {
   }

  ngOnInit(): void {
    this.horizontals = this.getHorizontals();
    this.verticals = this.getVerticals();
    this.augers = this.getAugers();
    this.silages = this.getSilages();
    this.hales = this.getHales();
    }

  getHorizontals() {
    return this.productsService.horizontals;
  }
  getVerticals() {
    return this.productsService.verticals;
  }
  getAugers() {
    return this.productsService.augers;
  }
  getSilages() {
    return this.productsService.silages;
  }
  getHales() {
    return this.productsService.hales;
  }
  }
