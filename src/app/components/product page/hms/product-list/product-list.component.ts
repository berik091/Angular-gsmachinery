import { Component, OnInit } from '@angular/core';
import {ProductsHmsService } from 'src/app/services/products-hms.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public page: number;
  public collectionSize: number;
  active = 1;

  horizontals = {};
  verticals = {};
  augers = {};
  silages = {};
  others = {};

  constructor(private productsHmsService: ProductsHmsService) {
  }

  ngOnInit(): void {
    this.horizontals = this.getHorizontals();
    this.verticals = this.getVerticals();
    this.augers = this.getAugers();
    this.silages = this.getSilages();
    this.others = this.getOthers();
    }

  getHorizontals() {
    return this.productsHmsService.horizontals;
  }
  getVerticals() {
    return this.productsHmsService.verticals;
  }
  getAugers() {
    return this.productsHmsService.augers;
  }
  getSilages() {
    return this.productsHmsService.silages;
  }
  getOthers() {
    return this.productsHmsService.others;
  }
  }


