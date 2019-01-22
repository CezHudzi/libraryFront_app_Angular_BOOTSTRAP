import {Component, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'libraryFront';

  name: string;
  login: string;
  password: string;
  menu: number;
  logged: boolean;


  ngOnInit(): void {

    this.name = 'Z INICJACJI';
    this.login = 'Login';
    this.password = null;
    this.logged = false;
  }

  receiveLogin($event) {

    this.login = $event;
    this.logged = true;
  }

  receivePass($event) {
    console.log($event);
    this.password = $event;
  }

  setMenu(num: number) {
    this.menu = num;

  }


}
