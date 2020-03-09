import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// using Derective
import { HoverDirective } from './hover.directive';
import { AppComponent } from './app.component';
// import { SliderComponent } from './slider/slider.component';
import { BssliderComponent } from './bsslider/bsslider.component';
import { HeaderComponent } from './header/header.component';
import { DiscountComponent } from './discount/discount.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    // SliderComponent,
    BssliderComponent,
    HeaderComponent,
    DiscountComponent,
    HoverDirective,
    ProductsComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
