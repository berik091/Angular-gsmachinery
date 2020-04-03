import { Component, OnInit } from '@angular/core';
import { HmsProductsService } from 'src/app/services/Hms/hms-products.service';

@Component({
  selector: 'app-gunny-lift-list',
  templateUrl: './gunny-lift-list.component.html',
  styleUrls: ['./gunny-lift-list.component.scss']
})
export class GunnyLiftListComponent implements OnInit {

  others = {};

  constructor(private hmsOtherService: HmsProductsService) {
  }

  ngOnInit(): void {
    this.others = this.getOthers();
    }
  getOthers() {
    return this.hmsOtherService.others;
  }
  }


