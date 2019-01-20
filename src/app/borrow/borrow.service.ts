import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {BorrowGet} from './borrowGet';
import {BorrowPost} from './bookPost';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor(private _httpService: Http) { }

getAllBrrows(): Observable<BorrowGet> {
  return this._httpService.get('http://localhost:8080/borrows').map((response: Response) => response.json())
    .catch(this.handleError);
}

  private handleError(error: Response) {
    return Observable.throw(error);
  }


  addBorrow(borrowPost: BorrowPost) {

    console.log(JSON.stringify(borrowPost));
    const body = JSON.stringify(borrowPost);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});


    return this._httpService.post('http://localhost:8080/borrows', body, options);
  }




}
