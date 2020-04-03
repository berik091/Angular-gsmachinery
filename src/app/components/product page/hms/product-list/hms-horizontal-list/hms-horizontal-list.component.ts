import { Component, OnInit } from '@angular/core';
import { ProductsHmsService } from 'src/app/services/products-hms.service';

@Component({
  selector: 'app-hms-horizontal-list',
  templateUrl: './hms-horizontal-list.component.html',
  styleUrls: ['./hms-horizontal-list.component.scss']
})
export class HmsHorizontalListComponent implements OnInit {

  horizontals = {};

  constructor(private productsHmsService: ProductsHmsService) {
  }

  ngOnInit(): void {
    this.horizontals = this.getHorizontals();
    }

  getHorizontals() {
    return this.productsHmsService.horizontals;
  }
  }


