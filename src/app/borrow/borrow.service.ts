import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {BorrowGet} from './borrowGet';
import {BorrowPost} from './bookPost';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor(private _httpService: Http) {
  }

  getAllBrrows( login: string, password: string): Observable<BorrowGet> {
    const headers = new Headers({'Authorization': 'Basic  ' + btoa(login + ':' + password)});
    return this._httpService.get('http://localhost:8080/borrows', {headers}).map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }


  addBorrow(borrowPost: BorrowPost, login: string, password: string) {

    console.log(JSON.stringify(borrowPost));
    const body = JSON.stringify(borrowPost);
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(login + ':' + password)});
    const options = new RequestOptions({headers: headers});


    return this._httpService.post('http://localhost:8080/borrows', body, options);
  }


  removeBorrow(borrowPost: BorrowPost, login: string, password: string) {

    console.log(JSON.stringify(borrowPost));
    const body = JSON.stringify(borrowPost);
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(login + ':' + password)});
    const options = new RequestOptions({headers: headers});


    return this._httpService.delete('http://localhost:8080/borrows', new RequestOptions({
      headers: headers,
      body: body
    }));
  }



  extendRent(borrowPost: BorrowPost, login: string, password: string) {

    console.log(JSON.stringify(borrowPost));
    const body = JSON.stringify(borrowPost);
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(login + ':' + password)});
    const options = new RequestOptions({headers: headers});


    return this._httpService.put('http://localhost:8080/borrows', body, options);
  }




}
