import { Component, OnDestroy, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnDestroy {
  data;
  subscription;
  constructor(private dummyService: DummyService) { }

  ngOnInit() {
    this.subscription = this.dummyService.getData().subscribe(d => {
      this.data = d;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
