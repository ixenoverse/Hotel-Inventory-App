import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: `<h1>hello world from inline template!</h1>
 // <p>Angular is awesome</p>
 // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelinventoryapp2';

  role = 'Admin';
}
