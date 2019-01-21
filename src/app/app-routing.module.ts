import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutorComponent} from './autor/autor.component';
import {BookComponent} from './book/book/book.component';
import {BorrowComponent} from './borrow/borrow.component';
import {PersonComponent} from './person/person.component';

const routes: Routes = [
  {path: 'authors', component: AutorComponent},
  {path: 'books', component: BookComponent},
  {path: 'borrows', component: BorrowComponent},
  {path: 'users', component: PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
