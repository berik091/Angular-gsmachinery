import { Component, OnInit } from '@angular/core';
import { ProductsHmsService } from 'src/app/services/products-hms.service';

@Component({
  selector: 'app-sowing-machines-list',
  templateUrl: './sowing-machines-list.component.html',
  styleUrls: ['./sowing-machines-list.component.scss']
})
export class SowingMachinesListComponent implements OnInit {

  augers = {};

  constructor(private productsHmsService: ProductsHmsService) {
  }

  ngOnInit(): void {
    this.augers = this.getAugers();
    }

  getAugers() {
    return this.productsHmsService.augers;
  }
  }


