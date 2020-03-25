import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-bsslider',
  templateUrl: './bsslider.component.html',
  styleUrls: ['./bsslider.component.scss'],
  styles: [`
  .carouselImage { min-width:100%; }
  ::ng-deep .container-fluid { padding:0 !important; }
`]
})
export class BssliderComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1140/500`);
  constructor() {

  }
  ngOnInit(): void {
  }

}
