import {Component, OnInit, Input} from '@angular/core';
import {BorrowService} from './borrow.service';
import {BorrowGet} from './borrowGet';
import {BorrowPost} from './bookPost';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  @Input() login;
  @Input() password;


  borrows: BorrowGet[];
  borrowPeopleId: number;
  borrowBookId: number;
  private borrow: BorrowPost;
  private borrowDel: BorrowPost;


  constructor(private _borrowService: BorrowService) {
  }

  ngOnInit() {
    this.getBorrows();
  }


  getBorrows(): void {
    this._borrowService.getAllBrrows(this.login, this.password).subscribe((borrowData) => {
      // @ts-ignore
      this.borrows = borrowData;
      console.log(borrowData);
    }, (error) => {
      console.log(error + 'IN BOOK GET');
    });
  }

  addBorrow(): void {

    this.borrow = new BorrowPost(this.borrowPeopleId, this.borrowBookId);
    this._borrowService.addBorrow(this.borrow,  this.login, this.password).subscribe((response) => {
      console.log(response);
      this.reset();
    }, (error) => {
      console.log(error);
    });

  }


  reset(): void {
    this.borrowPeopleId = null;
    this.borrowBookId = null;
    this.getBorrows();
  }

  removeBarrow(idRemove: number): void {

    console.log(idRemove);
    console.log(this.borrows[idRemove]);
    const index = this.borrows[idRemove].idBorrow;
    this.borrow = new BorrowPost(1, index);
    this._borrowService.removeBorrow(this.borrow,  this.login, this.password).subscribe((response) => {
      console.log(response);
      this.reset();
    }, (error) => {
      console.log(error);
    });

  }

  extendReturnDate(idExtend: number): void {

    console.log(idExtend);
    console.log(this.borrows[idExtend]);
    const index = this.borrows[idExtend].idBorrow;
    this.borrow = new BorrowPost(1, index);
    this._borrowService.extendRent(this.borrow,  this.login, this.password).subscribe((response) => {
      console.log(response);
      this.reset();
    }, (error) => {
      console.log(error);
    });

  }


  onFormSubmit(borrowForm) {
    // console.log(movieForm);
    this.addBorrow();
    this.reset();
    borrowForm.resetForm();
  }


}


