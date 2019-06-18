import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { logging } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClientModule) { }

  login(obj) {
    return this.http.get(`${environment.apiUrl}login/sendDomains?`)
  }
}