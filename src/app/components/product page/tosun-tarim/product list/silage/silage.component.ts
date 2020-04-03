import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-silage',
  templateUrl: './silage.component.html',
  styleUrls: ['./silage.component.scss']
})
export class SilageComponent implements OnInit {

  silages = {};

  constructor(private productsService: ProductsService) {
   }

  ngOnInit(): void {
    this.silages = this.getSilages();
    }

  getSilages() {
    return this.productsService.silages;
  }
  }
