import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private httpClient: HttpClient) {}

  url='http://localhost:8080';

  
  //login post
  // addNewContactUser(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:8080/api/user',
  //     createResource,
  //     { headers: httpHeaders }
  //   );
  // }

  userRegisterDetails() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/user`, {
      headers: httpHeaders,
    });
  }

  //register post
  addNewUserRegisterDetails(data: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/user`,data,{ headers: httpHeaders }
    );
  }

  

}
