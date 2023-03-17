import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "app-store",
    templateUrl: "./store.component.html",
    styleUrls: ["./store.component.css"]
})
export class StoreComponent {
    selectedCategory: string | undefined;
    productsPerPage: number = 3;
    selectedPage: number = 1;

    constructor(private productRepository: ProductRepository,
        private cart: Cart,
        // private router: Router
        ) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.productRepository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.productRepository.getCategories();
    }

    //Event handler for Category selection/click
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
        this.changePage(1);
    }

    // Event handler for pagination buttons
    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    // Event handler for change in products per page
    changePageSize(newSize: number) {
        this.productsPerPage = newSize;
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((x, i) => i + 1);
    }

    get pageCount(): number {
        return Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }

    // Event handler for add to cart
    addProductToCart(product: Product) {
        this.cart.addLine(product);
    }

    // // Event handler for cart click
    // showCart() {
    //     this.router.navigateByUrl("/cart");
    // }
}