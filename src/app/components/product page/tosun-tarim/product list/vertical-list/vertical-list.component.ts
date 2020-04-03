import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.scss']
})
export class VerticalListComponent implements OnInit {

  horizontals = {};
  verticals = {};
  augers = {};
  silages = {};
  others = {};

  constructor(private productsService: ProductsService) {
   }

  ngOnInit(): void {
    this.verticals = this.getVerticals();
    }

  getVerticals() {
    return this.productsService.verticals;
  }
  }
