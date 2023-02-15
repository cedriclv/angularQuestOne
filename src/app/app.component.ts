import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette Party';
  isThisIngredientVital : boolean = true;
  isGuestListDisplayed : boolean = true;
  isRolandInvited : boolean = false;
  movies : string[] = [
    'top gun',
    'rocky le retour',
    'titanic',
    'batman',
    'titanic la suite'
  ]
}
