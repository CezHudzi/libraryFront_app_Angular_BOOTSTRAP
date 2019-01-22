import {Pipe, PipeTransform} from '@angular/core';
import {Book} from './book';


@Pipe(
  {
    name: 'filterPipePipe'
  }
)
export class FilterPipePipe implements PipeTransform {




  transform(books: Book[], searchForm): Book[] {

    if (!books || !searchForm) {
      return books;
    }

    return books.filter(book => book.bookName.toLocaleLowerCase().indexOf(searchForm.toLocaleLowerCase()) !== -1);

  }
}
