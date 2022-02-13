import { Usuariotarea } from './../modelo/usuariotarea';
import { Usuario } from './../modelo/usuario';
import { UsuarioserviceService } from './../service/usuarioservice.service';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
usuarioTarea : Usuariotarea []=[];
  constructor(
    private rutaActiva : ActivatedRoute,
    private usuarioService : UsuarioserviceService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.mostraTarea();

  }


  mostraTarea() : void{
    this.rutaActiva.paramMap.subscribe(
      param=>{
        const id = param.get('user_id');
       this.usuarioService.listaUsuariosTareas(id).subscribe(
         datos=>{
          if(datos!=[])
          this.usuarioTarea=datos;

         }
       )
      }
    )
  }
}
