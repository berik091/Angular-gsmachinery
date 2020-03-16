import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BssliderComponent } from './components/bsslider/bsslider.component';
import { ProductsComponent } from './components/products/products.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiscountComponent } from './components/discount/discount.component';

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
