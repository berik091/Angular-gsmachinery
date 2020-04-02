import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  others = {};

  constructor(private productsService: ProductsService) {
   }

  ngOnInit(): void {
    this.others = this.getOthers();
    }

  getOthers() {
    return this.productsService.others;
  }
  }
