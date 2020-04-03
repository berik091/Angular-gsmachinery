import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-auger',
  templateUrl: './auger.component.html',
  styleUrls: ['./auger.component.scss']
})
export class AugerComponent implements OnInit {

  augers = {};

  constructor(private productsService: ProductsService) {
   }

  ngOnInit(): void {
    this.augers = this.getAugers();
    }
  getAugers() {
    return this.productsService.augers;
  }
  }
