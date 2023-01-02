import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Result } from '../classes/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private getTextURL = "http://localhost:8000/api/aiposts/";
  constructor(
    private _http:HttpClient,
    //private params:HttpParams
    ) { }


  getResult(resultId : number) : Observable<Result> {
    return this._http.get<Result>(`${this.getTextURL}/${resultId}`);
  }

  getResults() : Observable<Result[]> {
    return this._http.get<Result[]>(`${this.getTextURL}`);
  }

  deleteResult(id : number) {
    return this._http.delete(`${this.getTextURL}${id}/`);
  }
}
