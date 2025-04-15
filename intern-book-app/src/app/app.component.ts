import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookFormComponent } from "./book-form/book-form.component";
import { MessageComponent } from './message/message.component';



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ToolbarComponent, BookFormComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-app';
}
