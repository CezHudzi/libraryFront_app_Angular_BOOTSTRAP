export class BorrowPost {

  constructor(bookId: number, personId: number) {
    this.bookId = bookId;
    this.personId = personId;
  }

  bookId: number;
  personId: number;

}
