import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Book} from './book/book';
import {BookPost} from './book/bookPost';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpService: Http, private httpClient: HttpClient) {
  }


  getAllBooks( login: string, password: string): Observable<Book[]> {

    const headers = new Headers({'Authorization': 'Basic  ' + btoa(login + ':' + password)});

    return this._httpService.get('http://localhost:8080/books', {headers}).map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }


  addBook(bookPost: BookPost, login: string, password: string) {

    console.log(JSON.stringify(bookPost));
    const body = JSON.stringify(bookPost);

    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(login + ':' + password)});
    const options = new RequestOptions({headers: headers});


    return this._httpService.post('http://localhost:8080/books', body, options);

  }


  getProtected() {

    //  const url = 'http://localhost:8080/rest/hello/secured/all';

    // console.log(this.httpClient.get(url));
    //  return this.httpClient.get(url);

    const headers = new Headers({'admin': 'root'});

    return this._httpService.get('http://localhost:8080/rest/hello/secured/all', {headers}).map((response: Response) => response.json())
      .catch(this.handleError);
  }


  getUnProtected() {

    const headers = new Headers({'admin': 'root'});
    return this._httpService.get('http://localhost:8080/rest/hello/all', {headers}).map((response: Response) => response.json())
      .catch(this.handleError);

  }


}
