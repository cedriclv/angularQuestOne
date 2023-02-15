import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-exo',
  templateUrl: './admin-exo.component.html',
  styleUrls: ['./admin-exo.component.css']
})
export class AdminExoComponent {
  isAdmin : boolean = false;

  changeStatus(){
    if(this.isAdmin === true){
      this.isAdmin = false;
    } else {
      this.isAdmin = true;
    }
  }
}
