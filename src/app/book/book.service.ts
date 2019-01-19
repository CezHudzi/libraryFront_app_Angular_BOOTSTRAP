import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Book} from './book/book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpService: Http) {
  }


  getAllBooks(): Observable<Book[]> {
    return this._httpService.get('http://localhost:8080/books').map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {

    return Observable.throw(error);

  }


}
