import { Component } from '@angular/core';
import { User } from "./../shared/models/User";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = new User();
  isOKForm: boolean = true;

  onSubmit(){
    console.log(this.user);
  }

}
