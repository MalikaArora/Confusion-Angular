import { Component } from '@angular/core';

//component decorator
@Component({
  selector: 'app-root', //where the view corresponding to this component should be displayed in the browser
  templateUrl: './app.component.html', //defines view for this component
  styleUrls: ['./app.component.scss'] //scss code
})
export class AppComponent {
  title = 'confusion'; //variable
}
