import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-great-angular-app  s s d de dfe de e re re er er ';

  name = 'Jason';

  p1 = (evt:any) => console.log("Child gave me this message  - "+evt);
}