import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})

export class DVD extends ProductComponent{
    // To hold dvdName;
    private productName: string;
    private DvdArray: any = [];

    constructor() {
        // Call Super
        super();
    }

    ngOnInit():void {
        // create object of DVD type, add properties of parent and derived class
        let DVD1 = new DVD();
        DVD1.ArticelNumber = 1;
        DVD1.category = 'DVD';
        DVD1.price = '150';
        DVD1.productName = 'Alien vs Predator'
        this.DvdArray.push(DVD1);

        // create object of DVD type, add properties of parent and derived class
        let DVD2 = new DVD();
        DVD2.ArticelNumber = 2;
        DVD2.category = 'DVD';
        DVD2.price = '250';
        DVD2.productName = 'Deadpool'
        this.DvdArray.push(DVD2);
    }
}