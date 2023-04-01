import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor(private httpClient: HttpClient) {}

  url='http://localhost:8080';

  loginvalues(data:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/login`, data,{
      headers: httpHeaders,
    });
  }

 //getlogin
 getUserLogin() {
  const httpHeaders = new HttpHeaders();
  httpHeaders.append('content-type', 'application/json');
  return this.httpClient.get(`${this.url}/api/login`, {
    headers: httpHeaders,
  });
};
  //admin login
  adminLoginDetailsGet() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(
      `${this.url}/api/login`, { headers: httpHeaders }
    );
  };

}
