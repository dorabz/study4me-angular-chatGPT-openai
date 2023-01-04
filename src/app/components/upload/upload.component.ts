import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
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
  constructor(
    private fb : FormBuilder,
    private _uploadService : UploadService,
    ) {
    }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm():void{
    this.textUploadForm = this.fb.group({
      title : ['', [Validators.required,Validators.minLength(5), Validators.maxLength(50)]],
      text : ['', [Validators.required,Validators.minLength(100), Validators.maxLength(100000)]],
    },
    {
      updateOn : 'change'
    });
  }
  submitForm(): void{
    this.isUploading = !this.isUploading;
    this._uploadService.uploadText(this.textUploadForm.get('title').value, this.textUploadForm.get('text').value).subscribe((res) => {
      this.isUploading = !this.isUploading;
      this.isUploaded = !this.isUploaded;
      this.textUploadForm.reset();
    });
  }
}
