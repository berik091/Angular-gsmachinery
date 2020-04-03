import { Component, OnInit } from '@angular/core';
import { ProductsHmsService } from 'src/app/services/products-hms.service';

@Component({
  selector: 'app-gunny-lift-list',
  templateUrl: './gunny-lift-list.component.html',
  styleUrls: ['./gunny-lift-list.component.scss']
})
export class GunnyLiftListComponent implements OnInit {

  others = {};

  constructor(private productsHmsService: ProductsHmsService) {
  }

  ngOnInit(): void {
    this.others = this.getOthers();
    }

  getOthers() {
    return this.productsHmsService.others;
  }
  }


