import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class VWUrlGuard implements CanActivate{
    private firstRequest:boolean = true;

    constructor(private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.firstRequest){
            this.firstRequest = false;
            if(route.component != StoreComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }

}