import {Component, OnInit} from '@angular/core';
import {PersonService} from './person.service';
import {PersonGet} from './personGet';
import {PersonPost} from './personPost';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: PersonGet[];
  personFirstName: string;
  personLastName: string;
  private personPost: PersonPost;


  constructor(private _personService: PersonService) {
  }

  ngOnInit() {
    this.getPersons();
  }


  getPersons(): void {

    this._personService.getAllPersons().subscribe((bookData) => {
      this.persons = bookData, console.log(bookData);
    }, (error) => {
      console.log(error + 'IN BOOK GET');
    });
  }


  addPerson(): void {
    console.log(this.personFirstName);
    console.log(this.personLastName);
    this.personPost = new PersonPost(this.personFirstName, this.personLastName);

    this._personService.addPerson(this.personPost).subscribe((response) => {
      console.log(response);
      this.reset();
    }, (error) => {
      console.log(error);
    });
  }

  reset(): void {
    this.personLastName = null;
    this.personFirstName = null;
    this.getPersons();
  }


  onFormSubmit(borrowForm) {
    // console.log(movieForm);
    this.addPerson();
    this.reset();
    borrowForm.resetForm();
  }


}
