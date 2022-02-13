import { Usuario } from './../modelo/usuario';
import { Creausuario } from './../modelo/creausuario';
import { UsuarioserviceService } from './../service/usuarioservice.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {
fullname : string='';
password : string='';
username : string='';


  constructor(
    private usuarioservice : UsuarioserviceService,
    private toast : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
  }

creaUsuario() : void {
 const usuario = new Usuario (this.username,this.password,this.fullname);
  this.usuarioservice.saveUsuario(usuario).subscribe(
    datos=>{
      this.toast.success('Usuario Creado con exito','OK');
      this.router.navigate(['/usuario']);
    },
    err =>{
       this.toast.error(err.error.mensaje, this.username);
    }
  )}

  eliminaUsuario() : void {
    const usuario = new Usuario (this.username,this.password,this.fullname);
     this.usuarioservice.saveUsuario(usuario).subscribe(
       datos=>{
         this.toast.success('Usuario Eliminado con exito','OK');
          },
       err =>{
       console.log(err);
         this.toast.error(err.error.mensaje,'Error');
       }
     )}

}
