import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {AutorGet} from './autorGet';
import {AutorPost} from './autorPost';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _httpService: Http) {
  }


  getAllAuthors(login: string, password: string): Observable<AutorGet[]> {
    const headers = new Headers({'Authorization': 'Basic  ' + btoa(login + ':' + password)});
    return this._httpService.get('http://localhost:8080/autors', {headers}).map((response: Response) => response.json())
      .catch(this.handleError);

  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }


  addAutor(autorPost: AutorPost, login: string, password: string) {
    console.log(JSON.stringify(autorPost));
    const body = JSON.stringify(autorPost);

    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(login + ':' + password)});

    const options = new RequestOptions({headers: headers});
    return this._httpService.post('http://localhost:8080/autors', body, options);
  }


}
