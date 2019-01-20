import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {BookPost} from './bookPost';
import {BookService} from '../book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  books: Book[];
  book = new Book;
  bookPost = new BookPost();
  bookNameForm: string;
  bookAuthForm: string;


  constructor(private _bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this._bookService.getAllBooks()
      .subscribe((bookData) => {
        this.books = bookData, console.log(bookData);
      }, (error) => {
        console.log(error + 'IN BOOK GET');
      });
  }
l
  addBook(): void {


    console.log(this.bookNameForm);
    console.log(this.bookAuthForm);
    this.bookPost.bookName = this.bookNameForm;
    this.bookPost.author = this.bookAuthForm.split(',').map(function (item) {
      return parseInt(item, 10);
    });


    this._bookService.addBook(this.bookPost).subscribe((response) => {
      console.log(response);
      this.reset();
    }, (error) => {
      console.log(error);
    });
  }


  private reset() {
    this.bookNameForm = null;
    this.bookAuthForm = null;
    this.getBooks();
  }


}
