import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../classes/result';
import { Observable } from 'rxjs';
//import { HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private uploadTextURL = "http://localhost:8000/api/aiposts/";
  constructor(
    private _http : HttpClient,
    //private params : HttpParams
    ) { }


  uploadFile(formData : FormData, csrf:any){
    for (var p in formData){
      console.log(p);
    }

    return this._http.post(this.uploadTextURL, formData, {
      headers: {
        'X-CSRFToken' : csrf
      }
    });
  }

  uploadText(title :string, text : string) : Observable<Result>{
    console.log(`This is input in the post call ${text}`);
    return this._http.post<Result>(this.uploadTextURL, {title, text});
  }
}
