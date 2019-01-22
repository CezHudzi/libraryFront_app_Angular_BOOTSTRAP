import {Component, OnInit, Input} from '@angular/core';
import {Book} from './book';
import {BookPost} from './bookPost';
import {BookService} from '../book.service';
import {TestResponse} from './testResponse';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  constructor(private _bookService: BookService) {
  }

  @Input() public login: string;
  @Input() public password: string;


  books: Book[];
  book = new Book;
  bookPost = new BookPost();
  bookNameForm: string;
  bookAuthForm: string;
  searchForm: string;


  protectedString: string[];
  unProtectedString: TestResponse;


  ngOnInit() {
    this.getBooks();
    // @ts-ignore
    this.protectedString = this._bookService.getProtected().subscribe((resData) => {
      this.protectedString = resData, console.log(resData);
    }, (error) => {
      console.log(error + 'IN fdsfsdfds');
    });
    console.log(this.protectedString + 'PROTECTED STRIND');
    // @ts-ignore
    this.unProtectedString = this._bookService.getUnProtected().subscribe((resData) => {
      this.unProtectedString = resData, console.log(resData);
    }, (error) => {
      console.log(error + 'IN fdsfsdfds');
    });
    console.log(this.unProtectedString.response + 'TOOOo NIE PROTECT');


  }

  getBooks(): void {
    this._bookService.getAllBooks(this.login, this.password)
      .subscribe((bookData) => {
        this.books = bookData, console.log(bookData);
      }, (error) => {
        console.log(error + 'IN BOOK GET');
      });
  }

  addBook(): void {


    console.log(this.bookNameForm);
    console.log(this.bookAuthForm);
    this.bookPost.bookName = this.bookNameForm;
    this.bookPost.author = this.bookAuthForm.split(',').map(function (item) {
      return parseInt(item, 10);
    });


    this._bookService.addBook(this.bookPost, this.login, this.password).subscribe((response) => {
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


  onFormSubmit(borrowForm) {
    // console.log(movieForm);
    this.addBook();
    this.reset();
    borrowForm.resetForm();
  }


}
