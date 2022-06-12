import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: IBook = { name: '', author: '', genre: '', price: 0 };

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.bookService.addBook(form.value).
      then(() => form.reset());
  }
  import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  @Input() id: string;
  book: IBook;

  constructor(
    private bookService: BookService,
    public activeModal: NgbActiveModal)
     { }

  ngOnInit() {
    if (this.id)
      this.bookService.getBookByID(this.id).subscribe(res => {
        this.book = res
      });
  }

  onUpdate() {
    this.bookService.updateBook(this.book).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }

  setPrice(book: IBook, price: number) {
    this.bookService.modifyBookPrice(book, price)
  }
}
}
