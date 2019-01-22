import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Router} from '@angular/router';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',

  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() public logged: boolean;
  @Output() public outPutToParentLogin = new EventEmitter<string>();
  @Output() public outPutToParentPassword = new EventEmitter<string>();

  public login: string;
  public passwordUser: string;


  constructor(private router: Router) {
  }

  ngOnInit() {

  }


  onFormSubmit2(borrowForm) {
    // console.log(movieForm);


    console.log(borrowForm.value.title);
    console.log(borrowForm.value.titleBook);


    this.login = borrowForm.value.title;
    this.passwordUser = borrowForm.value.titleBook;

    this.outPutToParentLogin.emit(this.login);
    this.outPutToParentPassword.emit(this.passwordUser);
    this.logged = true;
    borrowForm.resetForm();


  }


  logout() {
    this.login = 'Login';
    this.outPutToParentLogin.emit(this.login);
    this.passwordUser = null;
    this.logged = false;

  }


}
