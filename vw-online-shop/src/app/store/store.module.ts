import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { CartDetailComponent } from "./cart-detail.component";
import { CartSummaryComponent } from "./cart-summary.component";
import { CheckoutComponent } from "./checkout.component";
import { CounterDirective } from "./counter.directive";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    providers: [],
    declarations: [StoreComponent,CounterDirective, CartSummaryComponent,CartDetailComponent,CheckoutComponent],
    exports: [StoreComponent,CartDetailComponent,CheckoutComponent]
})
export class StoreModule {

}