import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {

  horizontals = {};

  constructor(private productsService: ProductsService) {
   }

  ngOnInit(): void {
    this.horizontals = this.getHorizontals();
    }

  getHorizontals() {
    return this.productsService.horizontals;
  }
  }
