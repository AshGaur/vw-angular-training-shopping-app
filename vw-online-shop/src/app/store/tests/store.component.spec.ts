import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Cart } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";
import { ProductRepository } from "src/app/model/product.repository";
import { StoreComponent } from "../store.component";

describe("", () => {
    let fixture: ComponentFixture<StoreComponent>;
    let component: StoreComponent;
    let mockRepository = {
        getProducts: function () {
            return [
                new Product(1, "Test1", "Soccer", "Test1", 100),
                new Product(2, "Test2", "Chess", "Test2", 100),
                new Product(3, "Test3", "Soccer", "Test3", 100)
            ];
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [StoreComponent],
            providers: [Cart,
                {provide:ProductRepository, useValue:mockRepository}
            ]
        });
        fixture = TestBed.createComponent(StoreComponent);
        component = fixture.componentInstance;
    });

    it("is store defined", () => expect(component).toBeDefined());

    it("filters categories",()=>{
        component.changeCategory("Chess");
        expect(component.products.length).toBe(3);
    })

    it("filter by unknown category",()=>{
        component.changeCategory("Cricket");
        expect(component.products.length).toBe(0);
    })
});