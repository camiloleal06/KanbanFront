import { ListatareaComponent } from './vistas/listatarea.component';
import { LoginComponent } from './vistas/login.component';
import { EditarusuarioComponent } from './vistas/editarusuario.component';
import { UsuarioComponent } from './vistas/usuario.component';
import { NuevousuarioComponent } from './vistas/nuevousuario.component';
import { TareaComponent } from './vistas/tarea.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevatareaComponent } from './vistas/nuevatarea.component';

const routes: Routes = [

  {path:'', component : UsuarioComponent},
  {path:'usuario', component : UsuarioComponent},
  {path:'lista-tareas', component : ListatareaComponent},
  {path:'nuevo-usuario', component : NuevousuarioComponent},
  {path:'nueva-tarea', component : NuevatareaComponent},
  {path:'editar-usuario', component : EditarusuarioComponent},
  {path:'ver-tarea-usuario/:user_id', component : TareaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
