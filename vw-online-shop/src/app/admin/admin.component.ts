import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    selector: 'admin',
    templateUrl: 'admin.component.html'
})
export class AdminComponent{
  
    constructor(private authService:AuthService,private router:Router) {}

    logout(){
        this.authService.logOff();
        this.router.navigateByUrl("/");
    }

}