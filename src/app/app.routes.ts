import { Routes } from '@angular/router';
import {ContactAddComponent} from "./contact/contact-add/contact-add.component";
import {ContactListComponent} from "./contact/contact-list/contact-list.component";

export const routes: Routes = [
  {
    path: 'add',
    pathMatch: 'full',
    component: ContactAddComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: ContactListComponent,
  },
];
