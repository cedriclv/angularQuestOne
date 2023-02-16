import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { RouterModule } from '@angular/router'; // <--- JavaScript import from Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminExoComponent } from './admin-exo/admin-exo.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    UserProfileComponent,
    AdminExoComponent,
    SignUpComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(ROUTES)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
