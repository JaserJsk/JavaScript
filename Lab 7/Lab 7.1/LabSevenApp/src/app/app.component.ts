import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // To hold Euro value from input
    public Euro: number = 0;

    // To hold Swedish value from input
    public Swedish: number = 0;

    // To hold converted value from Euro to Swedish
    public EuroToSwedish: string = '';

    // To hold converted value from Swedish to Euro
    public SwedishToEuro: string = '';

    // Convert From Euro To Swedish
    public onEuroToSwedishChanged(): void {
        // To hold formatted value
        this.EuroToSwedish = Intl.NumberFormat('kr', { style: 'currency', currency: 'SEK' }).format(this.Euro * 9.65);
    }

    // Convert From Swedish To Euro
    public onSwedishToEuroChanged(): void {
        // To hold formatted value
        this.SwedishToEuro = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.Swedish * 0.10);
    }
}
