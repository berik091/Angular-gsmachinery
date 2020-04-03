import { Component, OnInit } from '@angular/core';
import {ProductsHmsService } from 'src/app/services/products-hms.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productsHmsService: ProductsHmsService) {
  }

  ngOnInit(): void {
    }

  }


