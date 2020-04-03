import { Component, OnInit } from '@angular/core';
import { HmsHorizontalService } from 'src/app/services/Hms/hms-horizontal.service';

@Component({
  selector: 'app-hms-horizontal-list',
  templateUrl: './hms-horizontal-list.component.html',
  styleUrls: ['./hms-horizontal-list.component.scss']
})
export class HmsHorizontalListComponent implements OnInit {

  horizontals = {};

  constructor(private hmsHorizontalService: HmsHorizontalService) {
  }

  ngOnInit(): void {
    this.horizontals = this.getHorizontals();
    }

  getHorizontals() {
    return this.hmsHorizontalService.horizontals;
  }
  }


