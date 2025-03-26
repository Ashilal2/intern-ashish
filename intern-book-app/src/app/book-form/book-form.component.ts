import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookInfoService } from '../book-info.service';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-book-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: 'book-form.component.html',
  styleUrl: 'book-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush // memo：変更検出が必要なタイミングにのみ実行されるため、パフォーマンスを最適化できる
})


export class BookFormComponent {
  title: string = '';
  summary: string = '';
  rating: number = 0;

  addBook() {
    const book: Book = {
      title: this.title,
      summary: this.summary,
      rating: this.rating
    };
  }

  constructor(public bookInfoService: BookInfoService) { }
}
