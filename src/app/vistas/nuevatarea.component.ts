import { creaTarea } from './../modelo/creaTarea';
import { Usuario } from './../modelo/usuario';
import { UsuarioserviceService } from './../service/usuarioservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareaserviceService } from './../service/tareaservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevatarea',
  templateUrl: './nuevatarea.component.html',
  styleUrls: ['./nuevatarea.component.css']
})
export class NuevatareaComponent implements OnInit {
  title : string='';
  description : string='';
  user_id  : number=0;

  constructor(private tareaService : TareaserviceService,
    private toast : ToastrService,
    private router : Router,
    private usuarioservice : UsuarioserviceService){}
    usuario : Usuario []=[];

  ngOnInit(): void {
    this.ListarUsuario();
  }

  ListarUsuario() :void{
    this.usuarioservice.listaUsuarios().subscribe(
    datos => {
      console.log(datos);
   this.usuario=datos;
 });
 }

  crearTarea() : void {
     let tarea = new creaTarea (this.title,this.description,this.user_id);
     this.tareaService.saveTarea(tarea).subscribe(
       datos=>{
         this.toast.success('Tarea Creado con exito','OK');
         this.router.navigate(['/lista-tarea']);
       },
       err =>{
        console.log(this.user_id);
        this.toast.error(err.error.mensaje, this.title);
       }
     )}


}
