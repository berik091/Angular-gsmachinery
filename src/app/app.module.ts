import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// using Derective
import { HoverDirective } from './hover.directive';
import { AppComponent } from './components/app.component';
// import { SliderComponent } from './slider/slider.component';
import { BssliderComponent } from 'src/app/components/main page/bsslider/bsslider.component';
import { HeaderComponent } from 'src/app/components/shared/navbar/header/header.component';
import { DiscountComponent } from 'src/app/components/main page/discount/discount.component';
import { ProductsComponent } from 'src/app/components/product page/product list/products.component';
import { ServiceComponent } from 'src/app/components/service page/service.component';
import { TeamComponent } from 'src/app/components/about page/team.component';
import { ContactComponent } from 'src/app/components/contact page/contact.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './services/config.service';
import { NoutfoundcomponentComponent } from 'src/app/components/404/noutfoundcomponent.component';
import { TopheaderComponent } from 'src/app/components/shared/navbar/topheader/topheader.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductComponent } from 'src/app/components/product page/product item/product.component';
import { ServiceExtraComponent } from 'src/app/components/service page/service-extra/service-extra.component';
import { ProductSliderComponent } from './components/product page/product-slider/product-slider.component';

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
    FooterComponent,
    TopheaderComponent,
    NoutfoundcomponentComponent,
    ProductComponent,
    ServiceExtraComponent,
    ProductSliderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    // SlickCarouselModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
