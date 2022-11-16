import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private uploadTextURL = "http://localhost:8080/upload";
  constructor(
    private http:HttpClient,
    private params:HttpParams
    ) { }


  uploadFile(formData : FormData, csrf:any){
    return this.http.post(this.uploadTextURL, formData, {
      headers: {
        'X-CSRFToken' : csrf
      }
    });
  }
}
