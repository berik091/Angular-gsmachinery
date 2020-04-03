import { Component, OnInit } from '@angular/core';
import { ProductsHmsService } from 'src/app/services/products-hms.service';

@Component({
  selector: 'app-hms-vertical-list',
  templateUrl: './hms-vertical-list.component.html',
  styleUrls: ['./hms-vertical-list.component.scss']
})
export class HmsVerticalListComponent implements OnInit {

  verticals = {};

  constructor(private productsHmsService: ProductsHmsService) {
  }

  ngOnInit(): void {
    this.verticals = this.getVerticals();
    }
  getVerticals() {
    return this.productsHmsService.verticals;
  }
  }


