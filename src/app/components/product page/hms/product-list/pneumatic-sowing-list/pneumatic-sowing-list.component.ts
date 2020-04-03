import { Component, OnInit } from '@angular/core';
import { ProductsHmsService } from 'src/app/services/products-hms.service';

@Component({
  selector: 'app-pneumatic-sowing-list',
  templateUrl: './pneumatic-sowing-list.component.html',
  styleUrls: ['./pneumatic-sowing-list.component.scss']
})
export class PneumaticSowingListComponent implements OnInit {

  silages = {};
  others = {};

  constructor(private productsHmsService: ProductsHmsService) {
  }

  ngOnInit(): void {
    this.silages = this.getSilages();
    }
  getSilages() {
    return this.productsHmsService.silages;
  }
  }
