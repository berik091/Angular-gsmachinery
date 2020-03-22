import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BssliderComponent } from './components/bsslider/bsslider.component';
import { ProductsComponent } from './components/products/products.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoutfoundcomponentComponent } from './noutfoundcomponent/noutfoundcomponent.component';
import { FormComponent } from './components/form/form.component';
import { DiscountComponent } from './components/discount/discount.component';
import { ProductComponent } from './components/product/product.component';
import { ServiceExtraComponent } from './components/service-extra/service-extra.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: BssliderComponent},
  { path: 'Home', component: DiscountComponent},
  { path: 'Product', component: ProductsComponent },
  { path: 'Product/:id', component: ProductComponent},
  { path: 'Service', component: ServiceComponent, children: [
    {path: 'Extra', component: ServiceExtraComponent}
  ]},
  { path: 'Team', component: TeamComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '404', component: NoutfoundcomponentComponent },
  { path: 'Form', component: FormComponent },
  { path: '**', redirectTo: '/404' }
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
