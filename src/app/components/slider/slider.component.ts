import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [
      { img: 'https://via.placeholder.com/300x150' },
      { img: 'https://via.placeholder.com/300x150' },
      { img: 'https://via.placeholder.com/300x150' },
      { img: 'https://via.placeholder.com/300x150' },
      { img: 'https://via.placeholder.com/300x150' },
      { img: 'https://via.placeholder.com/300x150' },
      { img: 'https://via.placeholder.com/300x150' },
      { img: 'https://via.placeholder.com/300x150' }
    ];

    slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 3,
      dots: true,
      infinite: true,
      autoplay: true,
      nextArrow: '<div class=\'nav-btn next-slide\'></div>',
      preArrow: '<div class=\'nav-btn next-slide\'></div>'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
