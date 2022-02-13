import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioserviceService } from './../service/usuarioservice.service';
import { Usuario } from './../modelo/usuario';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuario : Usuario []=[];
  constructor(private usuarioservice : UsuarioserviceService,
    private toast : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    this.ListarUsuario();
  }


 ListarUsuario() :void{
   this.usuarioservice.listaUsuarios().subscribe(
   datos => {
  this.usuario=datos;
});
}

borrarUsuario(id: number) {
  this.usuarioservice.delete(id).subscribe(
    data => {
      this.toast.success('El Usuario ha sido Eliminado', 'OK');
      this.ListarUsuario() ;
    },
    err => {
      this.toast.warning(err.error.mensaje, 'No se puede eliminar usuarios con Tareas asignadas');
    }
  );
}


}
