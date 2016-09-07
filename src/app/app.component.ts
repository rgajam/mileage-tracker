import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('vehicle_data/-KHT_d3bmggLXYRUcVQd/mileage_records', {
      query: {
        limitToLast: 10
      }
    }).map( (arr) => { return arr.reverse(); }
  }
}
