import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GAME extends ProductComponent {
    private productName;
    private GameArray = [];

    constructor() {
        super();
    }

    ngOnInit():void {

        // create object of type GAME, add properties of parent and derived class
        let game1 = new GAME();
        game1.ArticelNumber = 1;
        game1.category = 'Game';
        game1.productName = 'Overwatch';
        game1.price = 150;
        this.GameArray.push(game1);

        // create object of type GAME, add properties of parent and derived class
        let game2 = new GAME();
        game2.ArticelNumber = 2;
        game2.category = 'Game';
        game2.productName = 'The last of us';
        game2.price = 250;
        this.GameArray.push(game2);
    }
}