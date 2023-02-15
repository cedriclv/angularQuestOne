import { Component } from '@angular/core';
import { User } from "./../shared/models/User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user2 = new User('toto', 'titi', 25, 'this is my quote', 'https://randomuser.me/api/portraits/lego/2.jpg');
  user1 : User = {
    lastName : 'toto',
    firstName : 'Cedric',
    age : 44,
    quote : 'the best quote !',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  alterImage(){    
    let ageTag = document.getElementById("ageTag");
    if(ageTag != null){
      if(ageTag.hidden == false){
        ageTag.hidden=true;
      } else {
        ageTag.hidden=false;
      }
    } 
  }
}
