import { Component, OnInit } from '@angular/core';
import { HmsProductsService } from 'src/app/services/Hms/hms-products.service';

@Component({
  selector: 'app-hms-horizontal-list',
  templateUrl: './hms-horizontal-list.component.html',
  styleUrls: ['./hms-horizontal-list.component.scss']
})
export class HmsHorizontalListComponent implements OnInit {

  horizontals = {};

  constructor(private hmsHorizontalService: HmsProductsService) {
  }

  ngOnInit(): void {
    this.horizontals = this.getHorizontals();
    }

  getHorizontals() {
    return this.hmsHorizontalService.horizontals;
  }
  }


