import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class Book extends ProductComponent implements OnInit{
    @Input('showAllProperties') showAllProperties;

    private productName: string;
    private writer:string;
    private year: number;
    private BookArray: any = [];
    private newBook: any = {};
    
    constructor() {
        super();
    }

    addBook(): void {
        let newBook = new Book();
       newBook.ArticelNumber = this.newBook.ArticelNumber;
       newBook.category = this.newBook.category;
       newBook.price = this.newBook.price;
       newBook.productName = this.newBook.productName;
       newBook.writer = this.newBook.writer;
       newBook.year = this.newBook.year;
       this.BookArray.push(newBook); 
    }

    ngOnInit():void {
        
        // create object of DVD type, add properties of parent and derived class
        let Book1 = new Book();
        Book1.ArticelNumber = 1;
        Book1.productName = 'Harry Potter';
        Book1.category = 'Book';
        Book1.price = 150;
        Book1.writer = 'J.K. Rowling';
        Book1.year = 1997;
        this.BookArray.push(Book1);

        // create object of DVD type, add properties of parent and derived class
        let Book2 = new Book();
        Book2.ArticelNumber = 2;
        Book2.productName = 'The Lord Of The Rings';
        Book2.category = 'Book';
        Book2.price = 250;
        Book2.writer = 'J. R. R. Tolkien';
        Book2.year = 1954;
        this.BookArray.push(Book2);
    }
}