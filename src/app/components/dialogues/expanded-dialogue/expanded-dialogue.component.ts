import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Summary } from 'src/app/classes/summary';

export interface DialogData {
  title?: string;
  text?: string;
  summary?: string;
  type?: string;
}

@Component({
  selector: 'app-expanded-dialogue',
  templateUrl: './expanded-dialogue.component.html',
  styleUrls: ['./expanded-dialogue.component.css']
})
export class ExpandedDialogueComponent implements OnInit{

  public summary = new Summary();

  constructor(
    public dialogRef: MatDialogRef<ExpandedDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.summary = this.summaryJsonParser(this.data.summary!);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  summaryJsonParser(summaryText : string) : Summary {
    var str = summaryText;

    str = str.replace(/"/g, "'");
    str = str.replace("{\'text\': \'", "{\"text\": \"");
    str = str.replace("\', \'index\': 0, \'", "\", \"index\": \"0\", \"");
    str = str.replace("logprobs\': None, \'", "logprobs\": \"None\", \"");
    str = str.replace("\': \'stop\'}", "\": \"stop\"}");
    str = str.replace(/\\'/g,"'");
    console.log(str);
    var finalSummary = new Summary();
    finalSummary = JSON.parse(str);
    console.log(finalSummary.text);
    return finalSummary;
  }
}
