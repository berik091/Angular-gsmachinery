import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app.component';
import { BssliderComponent } from 'src/app/components/main page/bsslider/bsslider.component';
import { HeaderComponent } from 'src/app/components/shared/navbar/header/header.component';
import { DiscountComponent } from 'src/app/components/main page/discount/discount.component';
import { ProductsComponent } from 'src/app/components/product page/product list/products.component';
import { ServiceComponent } from 'src/app/components/service page/service.component';
import { TeamComponent } from 'src/app/components/about page/team.component';
import { ContactComponent } from 'src/app/components/contact page/contact.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { NoutfoundcomponentComponent } from 'src/app/components/404/noutfoundcomponent.component';
import { TopheaderComponent } from 'src/app/components/shared/navbar/topheader/topheader.component';
import { ProductComponent } from 'src/app/components/product page/product item/product.component';
import { ServiceExtraComponent } from 'src/app/components/service page/service-extra/service-extra.component';
import { ProductSliderComponent } from './components/product page/product-slider/product-slider.component';

import { ConfigService } from './services/config.service';
import { HoverDirective } from './hover.directive';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product page/hms/product-list/product-list.component';
import { ProductItemComponent } from './components/product page/hms/product-item/product-item.component';

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
    ProductItemComponent
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
