import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  data;
  constructor(private dummyService: DummyService) { }

  ngOnInit() {
    this.data = this.dummyService.getData().pipe(
      map(x => x + '  some suffix '),
      map(x => x + '  :)')
    );
  }

}
