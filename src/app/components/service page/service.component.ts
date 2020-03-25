import { Component, OnInit } from '@angular/core';
import {ConfigService} from 'src/app/services/config.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
    services: any = { };

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.services = this.getServices();
  }
  getServices() {
    return this.config.getConfig().services;
  }
}
