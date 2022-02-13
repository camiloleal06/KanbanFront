import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UsuarioComponent } from './vistas/usuario.component';
import { TareaComponent } from './vistas/tarea.component';
import { NuevousuarioComponent } from './vistas/nuevousuario.component';
import { NuevatareaComponent } from './vistas/nuevatarea.component';
import { EditarusuarioComponent } from './vistas/editarusuario.component';
import { EditartareaComponent } from './vistas/editartarea.component';
import { LoginComponent } from './vistas/login.component';
import { ListatareaComponent } from './vistas/listatarea.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TareaComponent,
    NuevousuarioComponent,
    NuevatareaComponent,
    EditarusuarioComponent,
    EditartareaComponent,
    LoginComponent,
    ListatareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
