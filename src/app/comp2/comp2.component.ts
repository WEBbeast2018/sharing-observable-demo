import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  data;
  constructor(private dummyService: DummyService) { }

  ngOnInit() {
    this.data = this.dummyService.getData();
  }
}
