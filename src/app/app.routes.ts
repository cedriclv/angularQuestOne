import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppComponent } from './app.component';

const ROUTES = [
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'user',
    component: UserProfileComponent,
  },
  {
    path: '',
    component: UserProfileComponent,
  },
];

export { ROUTES };
