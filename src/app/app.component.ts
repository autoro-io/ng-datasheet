import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-datasheet-library';
  csv = [
    ["Column 1", "Column 2", "Column 3", "Column 4"],
    ["1-1", "1-2", "1-3", "1-4"],
    ["2-1", "2-2", "2-3", "2-4"],
    ["3-1", "3-2", "3-3", "3-4"],
    ["4", "5", "6", "7"]
  ]
}
