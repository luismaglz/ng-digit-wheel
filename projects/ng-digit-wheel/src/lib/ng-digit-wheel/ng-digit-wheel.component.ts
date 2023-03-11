import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-digit-wheel',
  templateUrl: './ng-digit-wheel.component.html',
  styleUrls: ['./ng-digit-wheel.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NgDigitWheelComponent implements OnInit {
  digitHeight: number = 18;

  translate: string | null = null;

  _char: string | null = null;

  _digit: number = 0;
  @Input() set selectedDigit(digit: number | string) {
    if (typeof digit === 'number') {
      this._char = null;
      this._digit = digit;
      this.selectDigit();
    } else {
      if (digit === '*') {
        this._char = null;
        this._digit = -1;
      } else {
        this._char = digit;
      }
    }
  }

  constructor() {}

  ngOnInit() {
    this.selectDigit();
  }

  selectDigit() {
    // console.log(this._digit);
    if (this._digit !== undefined) {
      this.setTranslateString(this._digit);
    }
  }

  setTranslateString(digit: number): void {
    this.translate = `translateY(-${digit * this.digitHeight}px)`;
  }
}
