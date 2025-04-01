import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from "./card/card.component";
import { BookFormComponent } from "./book-form/book-form.component";



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ToolbarComponent, CardComponent, BookFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-app';
}
