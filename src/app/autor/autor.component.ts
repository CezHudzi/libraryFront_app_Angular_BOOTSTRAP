import {Component, OnInit} from '@angular/core';
import {AutorGet} from './autorGet';
import {AutorPost} from './autorPost';
import {AuthorService} from './autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  autors: AutorGet[];
  autorFirstName: string;
  autorSecondName: string;
  private autorPost: AutorPost;

  constructor(private _authorService: AuthorService) {
  }

  ngOnInit() {
    this.getAutors();
  }

  getAutors(): void {
    this._authorService.getAllAuthors().subscribe((autorData) => {
        this.autors = autorData, console.log(autorData);
      }, (error) => {
        console.log(error + 'IN GET AUTHORS');
      }
    );
  }

  addAuthor(): void {


    this.autorPost = new AutorPost(this.autorFirstName, this.autorSecondName);

    this._authorService.addAutor(this.autorPost).subscribe((response) => {
        console.log(response);
        this.reset();
      }, (error) => {
        console.log(error);
      }
    );
  }

  private reset() {
    this.autorSecondName = null;
    this.autorFirstName = null;
    this.getAutors();
  }



  onFormSubmit(borrowForm) {
    // console.log(movieForm);
    this.addAuthor();
    this.reset();
    borrowForm.resetForm();
  }


}
