import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SapientComponent } from '../sapient/sapient.component';

const routes: Routes = [
  { path: '**', component: SapientComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SapientRouteRoutingModule { }
