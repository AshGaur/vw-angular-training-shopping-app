import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './store/cart-detail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { VWUrlGuard } from './vw-url.guard';

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [VWUrlGuard] },
  { path: 'cart', component: CartDetailComponent, canActivate: [VWUrlGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [VWUrlGuard] },
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
