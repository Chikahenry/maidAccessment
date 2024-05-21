import { Routes } from '@angular/router';

import { UserListComponent } from '../Views/user-list/user-list.component';
import { UserDetailComponent } from '../Views/user-detail/user-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent }
];
