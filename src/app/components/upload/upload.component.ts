import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatButton } from '@angular/material/button';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public fileUploadForm : any;
  private csrf : any;
  constructor(
    private fb : FormBuilder,
    //private http : HttpClient,
    private _uploadService : UploadService,
    // private cookieService : CookieService
    ) {
      // this.csrf = this.cookieService.get("csrftoken");
      // if (typeof(this.csrf) === 'undefined'){
      //   this.csrf = '';
      // }
    }

  ngOnInit(): void {
    this.initializeForm();
  }

  onFileChange(event : any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileUploadForm.patchValue({
        fileSource: file
      });
    }
  }
  get f(){
    return this.fileUploadForm.controls;
  }

  initializeForm():void{
    this.fileUploadForm = this.fb.group({
      serverName : ['', [Validators.required,Validators.maxLength(20)]],
      file : ['', [Validators.required]],
      fileSource : ['', [Validators.required]]
    },
    {
      updateOn : 'change'
    });
  }

  submitForm(): void{
    const formData = new FormData();
    formData.append('file', this.fileUploadForm.get('fileSource').value);
    formData.append('servername', this.fileUploadForm.get('serverName').value);
    console.log(formData);
    this._uploadService.uploadFile(formData, '').subscribe(res => {
      alert('Upload Successfully.');
    });
  }
}
