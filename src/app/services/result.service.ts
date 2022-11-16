import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private getTextURL = "http://localhost:8080/result";
  constructor(
    private http:HttpClient,
    private params:HttpParams
    ) { }


  getResult( csrf:any ) : Observable<any> {
    return this.http.get<any>(this.getTextURL, {
      headers: {
        'X-CSRFToken' : csrf
      }
    });
  }
}
