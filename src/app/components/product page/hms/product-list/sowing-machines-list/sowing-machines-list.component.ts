import { Component, OnInit } from '@angular/core';
import { HmsProductsService } from 'src/app/services/Hms/hms-products.service';

@Component({
  selector: 'app-sowing-machines-list',
  templateUrl: './sowing-machines-list.component.html',
  styleUrls: ['./sowing-machines-list.component.scss']
})
export class SowingMachinesListComponent implements OnInit {

  augers = {};

  constructor(private hmsAugerService: HmsProductsService) {
  }

  ngOnInit(): void {
    this.augers = this.getAugers();
    }

  getAugers() {
    return this.hmsAugerService.augers;
  }
  }


