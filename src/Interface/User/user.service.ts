import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private apiHost: string = 'http://127.0.0.1/:8080';

  constructor(private http: Http) {
  }

  public login(email:string, password:string):Observable<any> {
    return this.http.get(this.apiHost+"/api/authenticate").map((response) => {
      return response.json();
    })
      .catch((err) => {
        throw Observable.throw(err);
      });
  }
}