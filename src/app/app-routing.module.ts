import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BssliderComponent } from 'src/app/components/main page/bsslider/bsslider.component';
import { ProductsComponent } from './components/product page/tosun-tarim/product list/products.component';
import { ServiceComponent } from 'src/app/components/service page/service.component';
import { TeamComponent } from 'src/app/components/about page/team.component';
import { ContactComponent } from 'src/app/components/contact page/contact.component';
import { NoutfoundcomponentComponent } from 'src/app/components/404/noutfoundcomponent.component';
import { DiscountComponent } from 'src/app/components/main page/discount/discount.component';
import { ProductComponent } from './components/product page/tosun-tarim/product item/product.component';
import { ServiceExtraComponent } from 'src/app/components/service page/service-extra/service-extra.component';
import { ProductListComponent } from './components/product page/hms/product-list/product-list.component';
import { ProductItemComponent } from './components/product page/hms/product-item/hms-horizontal/product-item.component';
import { HorizontalListComponent } from './components/product page/tosun-tarim/product list/horizontal-list/horizontal-list.component';
import { VerticalListComponent } from './components/product page/tosun-tarim/product list/vertical-list/vertical-list.component';
import { AugerComponent } from './components/product page/tosun-tarim/product list/auger/auger.component';
import { SilageComponent } from './components/product page/tosun-tarim/product list/silage/silage.component';
import { OtherComponent } from './components/product page/tosun-tarim/product list/other/other.component';
import { HmsHorizontalListComponent } from './components/product page/hms/product-list/hms-horizontal-list/hms-horizontal-list.component';
import { HmsVerticalListComponent } from './components/product page/hms/product-list/hms-vertical-list/hms-vertical-list.component';
import { SowingMachinesListComponent } from './components/product page/hms/product-list/sowing-machines-list/sowing-machines-list.component';
import { PneumaticSowingListComponent } from './components/product page/hms/product-list/pneumatic-sowing-list/pneumatic-sowing-list.component';
import { GunnyLiftListComponent } from './components/product page/hms/product-list/gunny-lift-list/gunny-lift-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: BssliderComponent},
  { path: 'Home', component: DiscountComponent},
  // Product detail
  { path: 'Product', component: ProductsComponent },
  { path: 'Tosuntarim/Horizontal-feed-mixer', component: HorizontalListComponent },
  { path: 'Tosuntarim/Horizontal-feed-mixer/:id', component: ProductComponent},
  { path: 'Tosuntarim/Vertical-feed-mixer', component: VerticalListComponent },
  { path: 'Tosuntarim/Vertical-feed-mixer/:id', component: ProductComponent },
  { path: 'Tosuntarim/Auger', component: AugerComponent },
  { path: 'Tosuntarim/Auger/:id', component: ProductComponent },
  { path: 'Tosuntarim/Silage', component: SilageComponent },
  { path: 'Tosuntarim/Silage/:id', component: ProductComponent },
  { path: 'Tosuntarim/Other', component: OtherComponent },
  { path: 'Tosuntarim/Other/:id', component: ProductComponent },

  { path: 'HMS/Horizontal-feed-mixer', component: HmsHorizontalListComponent},
  { path: 'HMS/Horizontal-feed-mixer/:id', component: ProductItemComponent },
  { path: 'HMS/Vertical-feed-mixer', component: HmsVerticalListComponent },
  { path: 'HMS/Vertical-feed-mixer/:id', component: ProductItemComponent },
  { path: 'HMS/Sowing-macines', component: SowingMachinesListComponent},
  { path: 'HMS/Sowing-macines/:id', component: ProductItemComponent },
  { path: 'HMS/Pneumatic-sowing-macines', component: PneumaticSowingListComponent },
  { path: 'HMS/Pneumatic-sowing-macines/:id', component: ProductItemComponent },
  { path: 'HMS/Gunny-lift', component: GunnyLiftListComponent },
  { path: 'HMS/Gunny-lift/:id', component: ProductItemComponent },

  { path: 'Hms', component: ProductListComponent},
  { path: 'Hms/:id', component: ProductItemComponent},
  { path: 'Service', component: ServiceComponent, children: [
    {path: 'Extra', component: ServiceExtraComponent}
  ]},
  { path: 'Team', component: TeamComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '404', component: NoutfoundcomponentComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
