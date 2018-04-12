import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Book } from './book/book.component';
import { DVD } from './dvd/dvd.component'
import { GAME } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    Book,
    DVD,
    GAME
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
