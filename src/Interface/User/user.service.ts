import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  private apiHost: string = "http://127.0.0.1:8080";

  constructor(private http: Http) {}

  public login(email: string, password: string): Observable<any> {
    let body: string = "name=" + email + "&password=" + password,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ "Content-Type": type }),
      options: any = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiHost + "/authenticate", body,options)
      .map(response => {
        console.log(response);
        return response.json();
      })
      .catch(err => {
        throw Observable.throw(err);
      });
  }
/*
  public login(email: string, password: string) {
    return new Promise(resolve => {
      let data: string = "name=" + email + "&password=" + password;
      let headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      let options = new RequestOptions({ headers: headers });
      let link = this.apiHost + "/authenticate";
      this.http.post(link, data, options).subscribe(
        (response) => {

          console.log(response);
          resolve(response);
        },
        error => {
          resolve(error);
        }
      );
    });
  }*/
}
