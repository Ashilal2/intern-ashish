import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Book } from '../types/book';
import { FormsModule } from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'app-book-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    CommonModule,
    NgFor,
    CardComponent,
  ],
  templateUrl: 'book-form.component.html',
  styleUrl: 'book-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush // memo：変更検出が必要なタイミングにのみ実行されるため、パフォーマンスを最適化できる
})


export class BookFormComponent {

  public title: string = '';
  public summary: string = '';
  public rating: number = 0;

  public bookList: Book[] = [
    {
      title: 'アンドロイドは電気羊の夢を見るか?',
      summary: '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      rating: 90,
    },
    {
      title: '岩田さん: 岩田聡はこんなことを話していた。',
      summary: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      rating: 90,
    },
  ];


  addBook() {
    const newBook: Book = {
      title: this.title,
      summary: this.summary,
      rating: this.rating
    };
    this.bookList.push(newBook);

    //フォームのリセット
    this.title = '';
    this.summary = '';
    this.rating = 0;
  }

}
