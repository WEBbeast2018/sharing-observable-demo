import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, share } from 'rxjs/internal/operators';

const DATA = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  dummyObservable;

  constructor() {
    this.dummyObservable = interval(900).pipe(
      map(i => DATA[i % DATA.length]),
      share()
    );
  }

  getData(): Observable<any> {
    return this.dummyObservable;
  }
}
