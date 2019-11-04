import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private ht: HttpClient) { }

  getSignup() {
    return this.ht.get("http://localhost:3000/signup");
  }

  postLoginDetails(login: any) {


    return this.ht.post("http://192.168.2.94:8089/login", login, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }
    )

  }
  postRegisterDetails(reg:any)
  {
    return this.ht.post("http://192.168.2.94:8089/gst/customer/reg",reg,{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    }
    )
  }


  getItem() {
    return localStorage.getItem('token')
  }
  intercept(req, next) {
    let token = req.clone({
      setHeaders: {
        "Authorization": `${this.getItem()}`
      }

    })
    return next.handle(token);
  }
}
