import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { time } from 'console';
import { AnswerRequest } from 'src/app/classes/answerRequest';
import { AnswerResponse } from 'src/app/classes/answerResponse';
import { Summary } from 'src/app/classes/summary';
import { AnswerService } from 'src/app/services/answer.service';

export interface DialogData {
  id?: number;
  title?: string;
  summary?: string;
  question?: string;
}

@Component({
  selector: 'app-question-dialogue',
  templateUrl: './question-dialogue.component.html',
  styleUrls: ['./question-dialogue.component.css']
})
export class QuestionDialogueComponent implements OnInit {
  public answerText = '';
  public answerObject = new AnswerRequest();
  public answerResponse? : AnswerResponse;

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _answerService: AnswerService
  ) { }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onSubmitAnswer(): void {
    const answerRequest : AnswerRequest = {
      post: this.data.id,
      answer : this.answerText
    }
    this.answerObject.post = answerRequest.post;
    this.answerObject.answer = answerRequest.answer;
    this._answerService.uploadAnswer(answerRequest).subscribe((res : any)=> {
      this.answerObject.id = res.id;
      this._answerService.getAnswerById(res.id).subscribe((res : any)=> {
        this.answerResponse = res;
      });
    });
  }
}
