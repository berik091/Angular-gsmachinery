import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// using Derective
import { HoverDirective } from './hover.directive';
import { AppComponent } from './components/app.component';
// import { SliderComponent } from './slider/slider.component';
import { BssliderComponent } from './components/bsslider/bsslider.component';
import { HeaderComponent } from './components/header/header.component';
import { DiscountComponent } from './components/discount/discount.component';
import { ProductsComponent } from './components/products/products.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config.service';
import { NoutfoundcomponentComponent } from './noutfoundcomponent/noutfoundcomponent.component';
import { TopheaderComponent } from './components/topheader/topheader.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ProductComponent } from './components/product/product.component';
import { ServiceExtraComponent } from './components/service-extra/service-extra.component';

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
    FormComponent,
    ProductComponent,
    ServiceExtraComponent
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
