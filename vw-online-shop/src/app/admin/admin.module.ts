import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";
import { MaterialModule } from "./material.module";
import { ProductEditorComponent } from "./product-editor.component";
import { ProductTableComponent } from "./product-table.component";


let routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    {
        path: 'main', component: AdminComponent,
        children: [
            { path: "products/:mode/:id", component: ProductEditorComponent },
            { path: "products/:mode", component: ProductEditorComponent },
            { path: "products/:mode/:id", component: ProductEditorComponent },
            { path: "products", component: ProductTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: '**', redirectTo: "auth" }
]);

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        routing
    ],
    providers: [],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent,ProductEditorComponent],
    exports: []
})
export class AdminModule { }