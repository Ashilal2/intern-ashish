import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../types/book';

@Component({
  standalone: true,
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() book?: Book;
  @Output() deleteRequest = new EventEmitter<Book>();

  delete() {
    this.deleteRequest.emit(this.book); // ここで親に「削除リクエスト」が送られる
  }
}
