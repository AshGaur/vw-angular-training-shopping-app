import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    username?: string;
    password?: string;
    errorMessage?: string;
    constructor(private router: Router, private authService: AuthService) { }

    authenticate(form: NgForm){
        if(form.valid){
            this.authService.authenticate(this.username ?? "", this.password ?? "").subscribe(resp=>{
                if(resp){
                    this.router.navigateByUrl("/admin/main");
                }else {
                    this.errorMessage = "Authentication Failed !";
                }
            });
        }else{
            this.errorMessage = "Form Data Invalid";
        }
    }

}