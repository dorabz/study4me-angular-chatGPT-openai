import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatButton } from '@angular/material/button';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
import { UploadService } from '../../services/upload.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public textUploadForm : any;
  public uploadText? : string;
  public isUploaded : boolean = false;
  public isUploading : boolean = false;
  //private csrf : any;
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

  // onFileChange(event : any) {

  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.fileUploadForm.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }
  // get f(){
  //   return this.fileUploadForm.controls;
  // }

  initializeForm():void{
    this.textUploadForm = this.fb.group({
      title : ['', [Validators.required,Validators.minLength(5), Validators.maxLength(50)]],
      text : ['', [Validators.required,Validators.minLength(100), Validators.maxLength(100000)]],
      // file : ['', [Validators.required]],
      // fileSource : ['', [Validators.required]]
    },
    {
      updateOn : 'change'
    });
  }



  submitForm(): void{
    // const formData = new FormData();
    // formData.append('file', this.fileUploadForm.get('fileSource').value);
    // formData.append('servername', this.fileUploadForm.get('serverName').value);
    // console.log(formData);
    // this._uploadService.uploadFile(formData, '').subscribe(res => {
    //   alert('Upload Successfully.');
    // });
    this.isUploading = !this.isUploading;
    this._uploadService.uploadText(this.textUploadForm.get('title').value, this.textUploadForm.get('text').value).subscribe((res) => {
      // console.log(res);
      // alert('Uploaded Successfully.');
      this.isUploading = !this.isUploading;
      this.isUploaded = !this.isUploaded;
      this.textUploadForm.reset();
    });
  }
}
