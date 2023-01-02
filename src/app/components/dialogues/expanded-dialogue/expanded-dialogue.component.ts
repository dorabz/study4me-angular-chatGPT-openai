import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Summary } from 'src/app/classes/summary';

export interface DialogData {
  title?: string;
  text?: string;
  summary?: string;
  questions?: string[];
  type?: string;
}

@Component({
  selector: 'app-expanded-dialogue',
  templateUrl: './expanded-dialogue.component.html',
  styleUrls: ['./expanded-dialogue.component.css']
})
export class ExpandedDialogueComponent {

  public summary = new Summary();

  constructor(
    public dialogRef: MatDialogRef<ExpandedDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    var str =  this.data.summary!;
    str = str.replace(/'/g, '"');
    str = str.replace("\"logprobs\": None", "\"logprobs\": \"None\"");
    this.summary = JSON.parse(str);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
