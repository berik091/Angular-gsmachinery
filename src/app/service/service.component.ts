import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  services = {
    heading: 'Our Story',
    title: 'Build Your Sweet Home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.',
    imageUrl: 'assets/images/services/services.jpg',
    buttonlink: '\home'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
