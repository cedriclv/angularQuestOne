import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminExoComponent } from './admin-exo/admin-exo.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    UserProfileComponent,
    AdminExoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
