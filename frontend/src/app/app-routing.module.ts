import { PeopleDetailsComponent } from './people-details/people-details.component';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { UpdatePeopleComponent } from './update-people/update-people.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'add', component: CreatePeopleComponent },
  { path: 'update/:id', component: UpdatePeopleComponent },
  { path: 'details/:id', component: PeopleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
