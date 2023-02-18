import { Component } from '@angular/core';
import { User } from "../shared/models/user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = new User('last name de toto', 'first name de toto', 0, '','','','');

  onClick(){
    alert('submit');
  }

}
