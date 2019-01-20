import {Component, OnInit} from '@angular/core';
import {BorrowService} from './borrow.service';
import {BorrowGet} from './borrowGet';
import {BorrowPost} from './bookPost';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  borrows: BorrowGet[];
  borrowPeopleId: number;
  borrowBookId: number;
  private borrow: BorrowPost;

  constructor(private _borrowService: BorrowService) {
  }

  ngOnInit() {
    this.getBorrows();
  }


  getBorrows(): void {
    this._borrowService.getAllBrrows().subscribe((borrowData) => {
      // @ts-ignore
      this.borrows = borrowData;
      console.log(borrowData);
    }, (error) => {
      console.log(error + 'IN BOOK GET');
    });
  }

  addBorrow(): void {

    this.borrow = new BorrowPost(this.borrowPeopleId, this.borrowBookId);
    this._borrowService.addBorrow(this.borrow).subscribe((response) => {
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

}


