import { Component } from '@angular/core';
import { User } from "./../shared/models/User";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = new User();

  onSubmit(){
    console.log(this.user);
  }

}
