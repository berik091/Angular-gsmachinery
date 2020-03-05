import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
// import { SliderComponent } from './slider/slider.component';
import { BssliderComponent } from './bsslider/bsslider.component';
import { HeaderComponent } from './header/header.component';
import { DiscountComponent } from './discount/discount.component';
import { HoverDirective } from './hover.directive';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    // SliderComponent,
    BssliderComponent,
    HeaderComponent,
    DiscountComponent,
    HoverDirective,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
