import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './book/book/book.component';
import {BookService} from './book/book.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AutorComponent} from './autor/autor.component';
import {AuthorService} from './autor/autor.service';
import {PersonComponent} from './person/person.component';
import {PersonService} from './person/person.service';
import {BorrowComponent} from './borrow/borrow.component';
import {FilterPipePipe} from './book/book/filter-pipe.pipe';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginFormComponent} from './login-form/login-form.component';


import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AutorComponent,
    PersonComponent,
    BorrowComponent,
    FilterPipePipe,
    HeaderComponent,
    LoginFormComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService, AuthorService, PersonService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
