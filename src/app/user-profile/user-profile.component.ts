import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    lastName : 'Le Valegant',
    firstName : 'Cedric',
    age : 44,
    quote : 'I need a break',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

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
