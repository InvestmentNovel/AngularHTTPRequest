import { Component , OnInit} from '@angular/core';
import { BookService } from './book.service';
import { Book } from './Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this
      .bookService
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
    });
  }
}
