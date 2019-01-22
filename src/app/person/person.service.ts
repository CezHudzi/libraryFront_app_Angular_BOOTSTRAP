import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {PersonPost} from './personPost';
import {PersonGet} from './personGet';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private _httpService: Http) {
  }

  getAllPersons(login: string, password: string): Observable<PersonGet[]> {
    const headers = new Headers({'Authorization': 'Basic  ' + btoa(login + ':' + password)});
    return this._httpService.get('http://localhost:8080/persons', {headers}).map((response: Response) => response.json())
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    return Observable.throw(error);
  }


  addPerson(personPost: PersonPost, login: string, password: string) {

    console.log(JSON.stringify(personPost));
    const body = JSON.stringify(personPost);
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(login + ':' + password)});
    const options = new RequestOptions({headers: headers});


    return this._httpService.post('http://localhost:8080/persons', body, options);

  }


}


