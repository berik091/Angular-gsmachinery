import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app.component';
import { BssliderComponent } from './components/main page/bsslider/bsslider.component';
import { HeaderComponent } from './components/shared/navbar/header/header.component';
import { DiscountComponent } from './components/main page/discount/discount.component';
import { ProductsComponent } from './components/product page/tosun-tarim/product list/products.component';
import { ServiceComponent } from './components/service page/service.component';
import { TeamComponent } from './components/about page/team.component';
import { ContactComponent } from './components/contact page/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NoutfoundcomponentComponent } from './components/404/noutfoundcomponent.component';
import { TopheaderComponent } from './components/shared/navbar/topheader/topheader.component';
import { ProductComponent } from './components/product page/tosun-tarim/product item/product.component';
import { ServiceExtraComponent } from './components/service page/service-extra/service-extra.component';
import { ProductSliderComponent } from './components/product page/product-slider/product-slider.component';

import { ConfigService } from './services/config.service';
import { HoverDirective } from './hover.directive';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product page/hms/product-list/product-list.component';
import { ProductItemComponent } from './components/product page/hms/product-item/product-item.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HorizontalListComponent } from './components/product page/tosun-tarim/product list/horizontal-list/horizontal-list.component';
import { VerticalListComponent } from './components/product page/tosun-tarim/product list/vertical-list/vertical-list.component';
import { AugerComponent } from './components/product page/tosun-tarim/product list/auger/auger.component';
import { SilageComponent } from './components/product page/tosun-tarim/product list/silage/silage.component';
import { OtherComponent } from './components/product page/tosun-tarim/product list/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ProductSliderComponent,
    ProductListComponent,
    ProductItemComponent,
    AccordionComponent,
    HorizontalListComponent,
    VerticalListComponent,
    AugerComponent,
    SilageComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
