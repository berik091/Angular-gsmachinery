import { Component, OnInit } from '@angular/core';
import { HmsHorizontalService } from 'src/app/services/Hms/hms-horizontal.service';

@Component({
  selector: 'app-hms-vertical-list',
  templateUrl: './hms-vertical-list.component.html',
  styleUrls: ['./hms-vertical-list.component.scss']
})
export class HmsVerticalListComponent implements OnInit {

  verticals = {};

  constructor(private hmsVerticalService: HmsHorizontalService) {
  }

  ngOnInit(): void {
    this.verticals = this.getVerticals();
    }
  getVerticals() {
    return this.hmsVerticalService.verticals;
  }
  }


