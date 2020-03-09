import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BssliderComponent } from './bsslider/bsslider.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { DiscountComponent } from './discount/discount.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: BssliderComponent},
  { path: 'Product', component: ProductsComponent },
  { path: 'Service', component: ServiceComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
