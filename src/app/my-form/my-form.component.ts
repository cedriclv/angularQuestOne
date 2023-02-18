import { Component } from '@angular/core';
import { Order } from "./../shared/models/order";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  model = new Order('',0,new Date(),'');

  onSubmit(): void {
    alert('formulaire envoyé');
  }
}
