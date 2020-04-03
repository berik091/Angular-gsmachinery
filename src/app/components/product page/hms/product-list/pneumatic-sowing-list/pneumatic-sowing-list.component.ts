import { Component, OnInit } from '@angular/core';
import { HmsProductsService } from 'src/app/services/Hms/hms-products.service';

@Component({
  selector: 'app-pneumatic-sowing-list',
  templateUrl: './pneumatic-sowing-list.component.html',
  styleUrls: ['./pneumatic-sowing-list.component.scss']
})
export class PneumaticSowingListComponent implements OnInit {

  silages = {};

  constructor(private hmsSilageService: HmsProductsService) {
  }

  ngOnInit(): void {
    this.silages = this.getSilages();
    }
  getSilages() {
    return this.hmsSilageService.silages;
  }
  }
