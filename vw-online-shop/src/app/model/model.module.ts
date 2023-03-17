import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { RestDatasource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    declarations: [],
    exports: [],
    providers: [
        ProductRepository,
        Cart,
        Order,
        OrderRepository,
        {provide:StaticDataSource,useClass:RestDatasource},
        AuthService,
        RestDatasource //adding here as now one of the classes require this directly injected
    ]
})
export class ModelModule {

}