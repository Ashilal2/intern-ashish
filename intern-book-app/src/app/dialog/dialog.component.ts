import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-dialog',
  imports: [MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  bookTitle = inject(MAT_DIALOG_DATA).bookTitle;

}


// memo:親コンポーネントから子コンポーネントにデータを渡すとき、@Input()を使ったが、ダイアログを開くときは@Input()を使えない。その代わりにdataオプションとMAT_DIALOG_DATAを使う。
