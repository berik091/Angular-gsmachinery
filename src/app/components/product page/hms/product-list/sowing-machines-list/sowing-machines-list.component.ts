import { Component, OnInit } from '@angular/core';
import { HmsHorizontalService } from 'src/app/services/Hms/hms-horizontal.service';

@Component({
  selector: 'app-sowing-machines-list',
  templateUrl: './sowing-machines-list.component.html',
  styleUrls: ['./sowing-machines-list.component.scss']
})
export class SowingMachinesListComponent implements OnInit {

  augers = {};

  constructor(private hmsAugerService: HmsHorizontalService) {
  }

  ngOnInit(): void {
    this.augers = this.getAugers();
    }

  getAugers() {
    return this.hmsAugerService.augers;
  }
  }


