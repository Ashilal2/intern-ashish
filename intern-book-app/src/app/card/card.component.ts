import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BookInfoService } from '../book-info.service';
import { Book } from '../book';

@Component({
  standalone: true,
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  bookInformation: Book[] = [];
  constructor(public bookInfoService: BookInfoService) { }

}
