import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Summary } from 'src/app/classes/summary';

export interface DialogData {
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
  public summary = new Summary();
  public isAnswerVisible : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    //var str =  this.data.summary!;
    //str
    //str = str.replace(/'/g, '"');
    // str = str.replace("\'logprobs\': None", "\"logprobs\": \"None\"");
    // this.summary = JSON.parse(JSON.stringify(str));
    // console.log(this.summary.text);

    this.summary = this.summaryJsonParser(this.data.summary!);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onToggleVisibility(): void {
    this.isAnswerVisible = !this.isAnswerVisible;
  }

  summaryJsonParser(summaryText : string) : Summary {
    var str = summaryText;
    console.log(str);
    str = str.replace(/"/g, "'");
    console.log(str);
    str = str.replace("{\'text\': \'", "{\"text\": \"");
    str = str.replace("\', \'index\': 0, \'", "\", \"index\": \"0\", \"");
    str = str.replace("logprobs\': None, \'", "logprobs\": \"None\", \"");
    str = str.replace("\': \'stop\'}", "\": \"stop\"}");
    console.log(str);
    //str = str.replace("\\\'s", "\'s");
    str = str.replace(/\\'/g,"'");
    console.log(str);
    var finalSummary = new Summary();
    finalSummary = JSON.parse(str);
    return finalSummary;
  }

}
