import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showComp2 = true;
  toggleComp() {
    this.showComp2 = !this.showComp2;
  }
}
