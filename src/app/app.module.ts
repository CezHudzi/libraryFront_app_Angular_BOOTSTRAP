import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book/book.component';
import {BookService} from './book/book.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AutorComponent } from './autor/autor.component';
import {AuthorService} from './autor/autor.service';
import { PersonComponent } from './person/person.component';
import {PersonService} from './person/person.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AutorComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [BookService, AuthorService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
