import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerRequest } from '../classes/answerRequest';
import { AnswerResponse } from '../classes/answerResponse';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private getTextURL = "http://localhost:8000/api/answers/";
  constructor(
    private _http:HttpClient,
    ) { }


  getAnswerById(answerRequestId : number) : Observable<AnswerResponse> {
    return this._http.get<AnswerResponse>(`${this.getTextURL}${answerRequestId}/`);
  }

  getAllAnswers() : Observable<AnswerResponse[]> {
    return this._http.get<AnswerResponse[]>(`${this.getTextURL}`);
  }

  uploadAnswer(answerRequest : AnswerRequest) : Observable<AnswerResponse>{
    return this._http.post<AnswerResponse>(`${this.getTextURL}`, answerRequest);
  }
}
