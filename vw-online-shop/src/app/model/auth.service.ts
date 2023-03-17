import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDatasource } from "./rest.datasource";

@Injectable()
export class AuthService{
    constructor(private dataSource:RestDatasource) {}

    authenticate(username:string,password:string): Observable<any>{
        return this.dataSource.authenticate(username,password);
    }

    get authenticated():boolean{
        return this.dataSource.authToken != null;
    }

    logOff(){
        this.dataSource.authToken = undefined;
        sessionStorage['vwToken'] = this.dataSource.authToken;
    }
}