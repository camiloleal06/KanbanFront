import { Router } from '@angular/router';
import { Message } from './../modelo/message';
import { UsuarioserviceService } from './../service/usuarioservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string='';
  password: string='';
  message: any
  constructor(private usuarioService : UsuarioserviceService,private ruta :Router) { }

  ngOnInit(): void {

}
/*
Login() {
  let resp = this.usuarioService.login(this.username, this.password);
  resp.subscribe(data => {
    this.message = data;
   this.ruta.navigate(["/usuario"])
  });
}*/
}
