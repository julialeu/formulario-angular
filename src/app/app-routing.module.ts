import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearUsuarioComponent} from "./components/crear-usuario/crear-usuario.component";
import {ContactosComponent} from "./components/contactos/contactos.component";

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'dashboard', loadChildren: () => import('./components/mi-agenda/mi-agenda.component').then(x => x.MiAgendaComponent)},
  { path: '', component: ContactosComponent},
  { path: 'crear-usuario', component: CrearUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
