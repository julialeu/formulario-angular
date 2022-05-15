import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent},
  { path: 'dashboard', loadChildren: () => import('./components/mi-agenda/mi-agenda.component').then(x => x.MiAgendaComponent)},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
