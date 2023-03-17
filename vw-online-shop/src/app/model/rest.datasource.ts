import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Order } from "./order.model";
import { Product } from "./product.model";

@Injectable()
export class RestDatasource{
	baseUrl:string = "http://localhost:4300/";
	constructor(private httpClient:HttpClient) {}
	authToken?:string;

	getProducts(): Observable<Product[]> {
		return this.httpClient.get<Product[]>(this.baseUrl + "products");
	}
 	
	saveOrder(order:Order) : Observable<Order>{
		return this.httpClient.post<Order>(this.baseUrl + "orders", order);	
	}	  
	
	authenticate(user:string, pass:string) : Observable<any>{
		return this.httpClient.post<any>(this.baseUrl + "login",
		{
			name:user,
			password:pass
		}).pipe(map(resp=>{
			this.authToken = resp.success ? resp.token : null;
			if(this.authToken){
				sessionStorage['vwToken'] = this.authToken;
			}
			return resp.success;
		}));
	}

	saveProduct(product: Product): Observable<Product>{
		return this.httpClient.post<Product>(this.baseUrl + "products", product);
	}
	
	updateProduct(product:Product): Observable<Product> {
		return this.httpClient.put<Product>(`${this.baseUrl}products/${product.id}`,product,this.getOptions());
	}

	private getOptions(){
		return {
			headers: new HttpHeaders({
				Authorization: `Bearer ${sessionStorage['vwToken']}`
			})
		};
	}
}