import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MakeRequestService {

  constructor(private http: HttpClient) { }

  getHeaders(h: any){
  let headers = new HttpHeaders(h);
  return headers;
  }

   post<T>(headers?:any, url?: string, body?: any,  ): Observable<T> {
 
   let response = this.http.post<T>(url , body,{ headers} )
   return response;
  }
}
