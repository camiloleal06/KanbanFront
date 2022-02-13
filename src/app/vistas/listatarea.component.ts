import { creaTarea } from './../modelo/creaTarea';
import { Usuario } from './../modelo/usuario';
import { UsuarioserviceService } from './../service/usuarioservice.service';
import { Tarea } from './../modelo/tarea';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareaserviceService } from './../service/tareaservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listatarea',
  templateUrl: './listatarea.component.html',
  styleUrls: ['./listatarea.component.css']
})
export class ListatareaComponent implements OnInit {
tareas : Tarea[]=[];
  constructor(
    private tareaService : TareaserviceService,
    private toast : ToastrService,
    private router : Router,
    private usuarioservice : UsuarioserviceService){}
    usuario : Usuario []=[];
  ngOnInit(): void {
    this.mostraTarea();
  }

  mostraTarea() : void {
       this.tareaService.listaTareas().subscribe(
         datos=>{
           this.tareas=datos;
               });
     }
     borrarTarea(id: number) {
      this.tareaService.deleteTarea(id).subscribe(
        data => {
          this.toast.success('La Tarea ha sido Eliminada', 'OK');
          this.mostraTarea() ;
        },
        err => {
          this.toast.warning(err.error.mensaje, 'No se pudo eliminar la Tarea');
        }
      );
    }


  }
