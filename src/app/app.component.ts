import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'digit-wheel';

  numbers: number[] = [
    55.23, 6722.67, 5654.23, 365.23, 523323.23, 5634, 23, 456, 3576, 9192,
  ];

  selectedNumber: number = 523;

  do() {
    this.selectedNumber = this.numbers[Math.floor(Math.random() * 10)];
    console.log(this.selectedNumber);
  }
}
