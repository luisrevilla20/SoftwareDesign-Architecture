import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../models/user/user';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
  endpoint = 'https://b697e71a90b9.ngrok.io/';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',

    })
    */
  }

  user: User;

  /*
  getUser(): Observable <any>{
  

     return this.http.get(this.endpoint + 'user/' + '91ce84db-7cf4-4625-806e-7a9bf94f5ef9',  {
      headers: new HttpHeaders()
        .set('Authorization', 'bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwcTJFRDBUdXBmTDJPS2h4VTA2WmlIcmdKOGVHQWY5ZWpvU2dBUEZON1FjIn0.eyJqdGkiOiJkNzI0OTE5ZS1kYTNjLTQ0ZTctODc0Ni1jYmE0ZDU4YWFlNDUiLCJleHAiOjE1OTE1OTc4MjksIm5iZiI6MCwiaWF0IjoxNTkxNTYxODI5LCJpc3MiOiJodHRwczovL2F1dGgucmFwcGlwYXkuY29tL2F1dGgvcmVhbG1zL2RldiIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzMzI5ODI0OS00ZWU2LTQzNDctYWNlOC0xYTAzYzRkNWMxNDgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzaG9wcGVyLW1hbmFnZXItYnIiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI0MTYxNWMwOC0wY2JjLTRkMjQtOTdlZC0yNTZkM2U0ZGEyZjciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiY2xpZW50SWQiOiJzaG9wcGVyLW1hbmFnZXItYnIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudEhvc3QiOiIxODkuMjE3LjEwLjY4IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXNob3BwZXItbWFuYWdlci1iciIsImNsaWVudEFkZHJlc3MiOiIxODkuMjE3LjEwLjY4IiwiZW1haWwiOiJzZXJ2aWNlLWFjY291bnQtc2hvcHBlci1tYW5hZ2VyLWJyQHBsYWNlaG9sZGVyLm9yZyJ9.HAhWUv1arJ2ue1jnh5M1Q_zesxyfjTZg7Gq8BvOpo2hHgQ9wWK8L-lL0fqWuiZ-UoJpVEBRwTYe_cUAo3jlrPoIbpJAO3-7BY1PCPL-m7cdVj5bVjJU4j4Ulf7rX79ruN6hGEYfQ1AvJtOQ8UvJBNSXjmbpw3XZvQAu-5XBojOoeF5w4R7ZMnilbXlRmYM3ki3OBmBxF1bHHk_gc4_V0m-S61DxjN1XZI-9D0-zF4gBusGz3RFGfGHmmFmjXKKzmHody8lqx_YlXB38vBvx7u6whJsJZFI6vmUIZVdBoMXDxB9Y-Zx1RNw_OxTCVMdChviXoQdJ2fQ_uOXcx22oobQ')
    }).pipe(
        map(this.extractData));
    //return of (this.user);
  }
  */

  /*getTransactions(){
    //info-table component
    return
  }*/

  /*
  createTransactions(){
    //send-form component
    //with-form component
    return
  }

  updateUser(){
    //settings component
    return
  }



  private extractData(res: Response) {
    let body = res;
    console.log(res)
    return body || {}; 
  }

  constructor(private http: HttpClient) { }
}
*/
