import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  interval,
  map,
  repeat,
  take,
  withLatestFrom,
} from 'rxjs';
import { NgDigitWheelComponent } from '../ng-digit-wheel/ng-digit-wheel.component';

@Component({
  selector: 'lib-ng-digit-wheels',
  templateUrl: './ng-digit-wheels.component.html',
  styleUrls: ['./ng-digit-wheels.component.css'],
  standalone: true,
  imports: [CommonModule, NgDigitWheelComponent],
})
export class NgDigitWheelsComponent implements OnInit, OnDestroy {
  _value: number = 0;

  digits: (string | number)[] = [];

  maxDigitLength: number = 10;

  validNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  _value$: BehaviorSubject<number | string | null> = new BehaviorSubject<
    number | string | null
  >(null);

  notify$: Subject<void> = new Subject<void>();
  interval$ = interval(20).pipe(take(2), repeat({ delay: () => this.notify$ }));

  _splitValue = this._value$.pipe(
    map((value) => {
      if (!value) {
        return [];
      }
      return value
        .toString()
        .split('')
        .map((v) => {
          if (v in this.validNumbers) {
            return parseInt(v, 10);
          } else {
            return v;
          }
        });
    })
  );

  _updatingValue = this.interval$.pipe(
    withLatestFrom(this._splitValue),
    map(([interval, value]) => {
      if (interval === 0) {
        const t = value.map((v) => (typeof v === 'string' ? v : 0));
        return t;
      } else {
        return value;
      }
    })
  );

  subscription: Subscription | undefined;

  @Input() set value(val: number | string | null) {
    this._value$.next(val);
    this.notify$.next();
  }

  constructor(protected changeDetector: ChangeDetectorRef) {}

  trackByMethod(index: number, el: any): number {
    return index;
  }

  ngOnInit(): void {
    this.subscription = this._updatingValue.subscribe((value) => {
      this.digits = value;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
