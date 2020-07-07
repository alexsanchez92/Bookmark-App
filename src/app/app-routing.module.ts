import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NoNgrxComponent} from './outlets/no-ngrx/no-ngrx.component';
import {WithNgrxComponent} from './outlets/with-ngrx/with-ngrx.component';

const routes: Routes = [
  { path: 'no-ngrx', component: NoNgrxComponent },
  { path: 'ngrx', component: WithNgrxComponent },
  { path: '',   redirectTo: '/no-ngrx', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NoNgrxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
